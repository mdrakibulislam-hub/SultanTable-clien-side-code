import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.confif';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();

    const createUserHandler = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleFormLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    const handleGithubLogin = () => {
        return signInWithPopup(auth, githubAuthProvider);
    }

    const authInfo = { setUser, handleFormLogin, handleGoogleLogin, handleGithubLogin, createUserHandler }
    console.log(user?.displayName);

    return (
        <>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </>
    );
};

export default AuthProvider;