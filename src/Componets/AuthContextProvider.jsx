import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {

    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);


    const login = (token) => {
        setIsAuth(true);
        setToken(token)
    }

    const logout = () => {
        setIsAuth(false)
        setToken(null)
    }

    console.log(isAuth, "from context")
    console.log(token, "context")
    return (
        <div>
            <AuthContext.Provider value={{ isAuth, login, logout }} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}
