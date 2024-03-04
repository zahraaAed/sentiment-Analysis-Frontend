import React from 'react';
import { Navigate} from 'react-router-dom';

const ProtectedRoute = ({ requiredRole, children }) => {
 // Assuming you have a way to check if the user is authenticated and get the user's role
 // For example, you might have a context or a hook that provides this information
 const isAuthenticated = sessionStorage.getItem('token') !== null;
 const userRole = sessionStorage.getItem('role');

 // Check if the user is authenticated and has the required role
 if (!isAuthenticated || (requiredRole && userRole !== requiredRole)) {
    // Redirect to login if not authenticated or if the user does not have the required role
    return <Navigate to="/login" replace />;
 }

 // Render the children if the user is authenticated and has the required role
 return children;
};

export default ProtectedRoute;
