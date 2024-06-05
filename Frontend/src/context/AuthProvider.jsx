import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("User");
    const [authUser, setAuthUSer] = useState(
        initialAuthUser? JSON.parse(initialAuthUser) :undefined
    )
    return (
      <AuthContext.Provider value={[authUser, setAuthUSer]}>
        {children}
      </AuthContext.Provider>
    );
}

//custom hook
export const useAuth =()=> useContext(AuthContext)