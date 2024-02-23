import React, { createContext, useContext, useState } from 'react';
import { authenticateUser } from '../services/apiServices';
import { useData } from '../store/DataContext';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);

};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { loadDepartments } = useData();
    const handleLogin = async (username, password) => {
        try {
            const responseData = await authenticateUser(username, password);
            if (responseData.authenticated) {
                setIsLoggedIn(true);
                await loadDepartments();
            } else {
                // Handle authentication failure.
            }
        } catch (error) {
            // Handle error.
        }
    };

    const handleLogout = async () => {
            setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
