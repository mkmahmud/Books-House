import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from '../../Config/Firebase/Firebase';


const Auth = getAuth(app)

export const UserAuth = createContext()

const AuthContext = ({ children }) => {

    // Current User
    const [user, setUser] = useState(null)

    // Loading 
    const [loading, setLoading] = useState(true)


    // Create User Email Password
    const signupWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    // Log Out

    const logOut = () => {
        return signOut(Auth)
    }


    // Sign In with Email Password

    const loginwWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    // On state Changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe();

    }, [user])


    return (
        <UserAuth.Provider value={{ signupWithEmail, loginwWithEmail, user, logOut}}>
            {children}
        </UserAuth.Provider>
    );
};

export default AuthContext;