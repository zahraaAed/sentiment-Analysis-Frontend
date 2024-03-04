// AuthFbLayout.js
import React from 'react';
import { AuthFbProvider } from './Fbcontext';

const AuthFbLayout = ({ children }) => {
 return (
    <AuthFbProvider>
      {children}
    </AuthFbProvider>
 );
};

export default AuthFbLayout;
