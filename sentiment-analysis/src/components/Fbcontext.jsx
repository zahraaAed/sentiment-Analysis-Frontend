// AuthFbContext.js
import React, { createContext, useState } from 'react';

export const FbContext = createContext();

export const AuthFbProvider = ({ children }) => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [accessToken, setAccessToken] = useState(null);


 const handleLoginSuccess = (accessToken) => {
   sessionStorage.setItem('accessToken', accessToken);
   setIsLoggedIn(true);
   setAccessToken(accessToken);
  };
  const handleLogout = () => {
   // Clear the access token from session storage
   sessionStorage.removeItem('accessToken');
   // Update the state
   setIsLoggedIn(false);
   setAccessToken(null);
   // Optionally redirect the user
   // window.location.href = '/login';
  };
  
  return (
   <FbContext.Provider value={{ isLoggedIn, accessToken, handleLoginSuccess, handleLogout }}>
      {children}
   </FbContext.Provider>
  );
  
};
