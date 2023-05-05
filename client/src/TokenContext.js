import React, { createContext, useContext, useEffect, useState } from 'react';

// Экспортируем контекст
export const TokenContext = createContext({
    token: '',
    login: () => {},
    logout: () => {}
  });

  const TokenProvider = ({ children }) => {
    const [token, setToken] = useState('');
  
    useEffect(() => {
      const savedToken = localStorage.getItem('access_token');
      if (savedToken) {
        setToken(savedToken);
      }
    }, []);
    
  
    const login = (newToken) => {
      setToken(newToken);
      localStorage.setItem('access_token', newToken);
    };
  
    const logout = () => {
      setToken('');
      localStorage.removeItem('access_token');
    };
  
    return (
      <TokenContext.Provider value={{ token, login, logout }}>
        {children}
      </TokenContext.Provider>
    );
  };

export default TokenProvider;