import React, { createContext, useState, useContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import app from './firebase.jsx';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const login = async (username, password) => {
    try {
      const response = await axios.post('https://sentiment-analysis-backend-2-jmtz.onrender.com/api/user/login', { username, password }, { withCredentials: true });
      const token = response.data.token;
      document.cookie = `token=${token}; path=/;`;

      // Set user role here if available
      function getCookie(name) {
         const cookies = document.cookie.split(';');
         for (let cookie of cookies) {
           const [cookieName, cookieValue] = cookie.trim().split('=');
           if (cookieName === name) {
             return cookieValue;
           }
         }
         return null;
       }
       
       // Retrieve the user role from the cookie
       const userRole = getCookie('userrole');
       
       console.log('User Role:', userRole);
       
       setUser({ username, role: userRole || 'user' }); // Set role retrieved from cookie or use 'user' as default

    } catch (error) {
      console.error('Login failed:', error.response.data.error || 'Unknown error occurred');
      throw new Error('Login failed');
    }
  };

  const loginWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser({ username: user.displayName, role: 'user' }); // Example: Set role as 'user' for now
    } catch (error) {
      console.error('Google sign-in failed:', error.message);
      throw new Error('Google sign-in failed');
    }
  };


  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
