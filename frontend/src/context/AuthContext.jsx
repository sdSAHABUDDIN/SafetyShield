import React, { createContext, useEffect, useState } from 'react';
import api from '../utils/api'; 
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null );

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      // Optionally, you can also set the user state here if you have user data
      // fetchUserData(token).then(data => setUser(data));
    } else {
      localStorage.removeItem('token');
      setUser(null);
    }
  }, [token]);

  const login = (credential) => api.login(credential)
    .then(res => {
      setToken(res.token);
      setUser(res.user);
      return res;
    });
  const register = (data) => api.register(data)
    .then(res => {
      setToken(res.token);
      setUser(res.user);
      return res;
    });
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}