import React, { createContext, useEffect, useState } from 'react';
import Unathorized from './components/unathorized/Unathorized';
import mitt from 'mitt';

export const TokenContext = createContext({
  token: '',
});

const TokenProvider = ({ children }) => {
  const [token, setTokenState] = useState(() => {
    const savedToken = localStorage.getItem('access_token');
    return savedToken ?? '';
  });

  const [showPopup, setShowPopup] = useState(false);
  const emitter = mitt();

  const setToken = (newToken) => {
    setTokenState(newToken);
    localStorage.setItem('access_token', newToken);
    emitter.emit('tokenChange', newToken);
  };

  const logout = () => {
    setTokenState('');
    localStorage.removeItem('access_token');
    emitter.emit('tokenChange', '');
  };

  const checkTokenExpiration = () => {
    const savedToken = localStorage.getItem('access_token');
    if (savedToken) {
      const tokenData = JSON.parse(decodeURIComponent(window.atob(savedToken.split('.')[1])));
      const expirationDate = new Date(tokenData.exp * 1000); // Convert expiration timestamp to Date object
      const currentTime = new Date();

      // Check if the current time is after the token expiration time
      return currentTime > expirationDate;
    }
    return true; // Token is considered expired if not found in localStorage
  };

  useEffect(() => {
    const tokenExpired = checkTokenExpiration();
    if (tokenExpired) {
      logout();
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleTokenChange = (newToken) => {
      setShowPopup(false);
      setTokenState(newToken);
    };

    emitter.on('tokenChange', handleTokenChange);

    return () => {
      emitter.off('tokenChange', handleTokenChange);
    };
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken, logout }}>
      {children}
      {showPopup && <Unathorized onClose={closePopup} />}
    </TokenContext.Provider>
  );
};

export default TokenProvider;