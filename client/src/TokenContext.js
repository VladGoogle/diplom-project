import React, { createContext, useEffect, useStateб } from 'react';
import mitt from 'mitt';
import Unathorized from './components/unathorized/Unathorized';
import jwt_decode from 'jwt-decode';

export const TokenContext = createContext({
  token: '',
});

const TokenProvider = ({ children }) => {
  const [token, setTokenState] = useState(() => {
    const savedToken = localStorage.getItem('access_token');
    try {
      return savedToken ? JSON.parse(window.atob(savedToken)) : '';
    } catch (error) {
      console.error('Failed to parse token:', error);
      return '';
    }
  });

  const [showPopup, setShowPopup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [manuallyLoggedOut, setManuallyLoggedOut] = useState(false);
  const emitter = mitt();

  const setToken = (newToken) => {
    setTokenState(newToken);
    const encodedToken = window.btoa(JSON.stringify(newToken));
    localStorage.setItem('access_token', encodedToken);
    emitter.emit('tokenChange', newToken);
    setManuallyLoggedOut(true);
  };

  const logout = () => {
    setTokenState('');
    localStorage.removeItem('access_token');
    emitter.emit('tokenChange', '');
  };

  const checkTokenExpiration = () => {
    const savedToken = localStorage.getItem('access_token');
    console.log('Saved Token:', savedToken);
    if (savedToken) {
      try {
        const decodedTokenData = window.atob(savedToken);
        console.log('Decoded Token Data:', decodedTokenData);
        const tokenData = jwt_decode(decodedTokenData);
        console.log('Token Expiration:', tokenData.exp);
  
        if (!tokenData.exp) {
          console.error('Token does not contain expiration time');
          return true;
        }
  
        const expirationDate = new Date(tokenData.exp * 1000);
        console.log('Expiration Date:', expirationDate);
        const currentTime = new Date();
        const tokenExpired = currentTime > expirationDate;
  
        if (loggedIn && tokenExpired) {
          setShowPopup(true);
          logout(); // Выход из аккаунта по истечению токена
          return true;
        }
  
        console.log('loggedIn:', loggedIn);
        console.log('tokenExpired:', tokenExpired);
        console.log('Expiration Date:', expirationDate);
        console.log('Current Time:', currentTime);
  
        if (!loggedIn && !tokenExpired) {
          setLoggedIn(true); // Установка значения loggedIn в true, когда токен действителен
        }
  
        return tokenExpired;
      } catch (error) {
        console.error('Failed to parse token data:', error);
      }
    }
    return true;
  }
  

  useEffect(() => {
    console.log('Checking token expiration...');
    const tokenExpired = checkTokenExpiration();
    if (loggedIn && !manuallyLoggedOut && tokenExpired) {
      setLoggedIn(false);
      setShowPopup(true);
      logout(); // Выход из аккаунта по истечению токена
    }
  }, [loggedIn, token, manuallyLoggedOut]);

  useEffect(() => {
    const handleTokenChange = (newToken) => {
      setTokenState(newToken);
    };

    emitter.on('tokenChange', handleTokenChange);

    return () => {
      emitter.off('tokenChange', handleTokenChange);
    };
  }, []);

  useEffect(() => {
    // Проверка, что токен не пустой
    if (token) {
      setLoggedIn(true);
    }
  }, [token]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <TokenContext.Provider value={{ token, setToken, loggedIn, logout}}>
      {children}
      {showPopup && !manuallyLoggedOut && <Unathorized onClose={closePopup} />}
    </TokenContext.Provider>
  );
};

export default TokenProvider;