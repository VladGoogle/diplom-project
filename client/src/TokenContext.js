import React, { createContext, useContext, useEffect, useState } from 'react';

export const TokenContext = createContext({
  token: '',
});

const TokenProvider = ({ children }) => {
  const [token, setTokenState] = useState(() => {
    // При первоначальной загрузке приложения, восстанавливаем токен из localStorage
    const savedToken = localStorage.getItem('access_token');
    return savedToken ?? '';
  });

  const setToken = (newToken) => {
    setTokenState(newToken);
    // Сохраняем токен в localStorage
    localStorage.setItem('access_token', newToken);
  };

  const logout = () => {
    setTokenState('');
    localStorage.removeItem('access_token');
  };

  return (
    <TokenContext.Provider value={{ token, setToken, logout }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;