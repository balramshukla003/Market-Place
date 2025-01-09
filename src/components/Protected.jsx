import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Get authentication status from localStorage when the component mounts
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
    console.log('authStatus:', authStatus); // To check the value of authStatus
  }, []); // This effect runs only once when the component mounts
  
  // If the user is authenticated, render the children, otherwise redirect to login
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
