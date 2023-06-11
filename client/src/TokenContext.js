import React, { createContext, useEffect, useState } from 'react';
import mitt from 'mitt';
import jwt from 'jsonwebtoken';
import Unathorized from './components/unathorized/Unathorized';

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
  const emitter = mitt();

  const setToken = (newToken) => {
    setTokenState(newToken);
    const encodedToken = window.btoa(JSON.stringify(newToken));
    localStorage.setItem('access_token', encodedToken);
    emitter.emit('tokenChange', newToken);
  };

  const logout = () => {
    setTokenState('');
    localStorage.removeItem('access_token');
    emitter.emit('tokenChange', '');
  };

  const checkTokenExpiration = () => {
    if (token) {
      try {
        const decoded = jwt.decode(token);

        if (!decoded.exp) {
          console.error('Token does not contain expiration time');
          return true;
        }

        const expirationDate = new Date(decoded.exp * 1000);
        const currentTime = new Date();
        const tokenExpired = currentTime > expirationDate;

        if (loggedIn && tokenExpired) {
          logout();
          return true;
        }

        if (!loggedIn && !tokenExpired) {
          setLoggedIn(true);
        }

        return tokenExpired;
      } catch (error) {
        console.error('Failed to parse token data:', error);
      }
    }

    return true;
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleTokenChange = (newToken) => {
      setShowPopup(false);
      setTokenState(newToken);
      setLoggedIn(!!newToken);
    };

    emitter.on('tokenChange', handleTokenChange);

    return () => {
      emitter.off('tokenChange', handleTokenChange);
    };
  }, []);

  useEffect(() => {
    const tokenExpired = checkTokenExpiration();
    if (loggedIn && tokenExpired) {
      setLoggedIn(false);
      logout();
      setShowPopup(true);
    }
  }, [loggedIn, token]);

  return (
    <TokenContext.Provider value={{ token, setToken, logout }}>
      {children}
      {showPopup && <Unathorized onClose={closePopup} />}
    </TokenContext.Provider>
  );
};

export default TokenProvider;