import React, { createContext, useContext, useState } from 'react';
import AuthContext from './AuthContext';

// Custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component
export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const authValue = {
    authUser,
    setAuthUser,
    userLoggedIn,
    setUserLoggedIn,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

// Export both AuthContext and useAuth properly
export { AuthContext };
