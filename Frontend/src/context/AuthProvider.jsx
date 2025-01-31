import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    const [authUser, setAuthUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const authValue = { authUser, setAuthUser, userLoggedIn, setUserLoggedIn };

    useEffect(() => {
        console.log('AuthProvider userLoggedIn ', userLoggedIn)
    }, [userLoggedIn])


    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };
export default AuthProvider;
