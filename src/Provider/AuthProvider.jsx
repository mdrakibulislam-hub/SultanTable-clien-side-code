import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.confif';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const auth = getAuth(app)
    const googleAuthProvider = new GoogleAuthProvider();


    const handleFormLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    const authInfo = { setUser, handleFormLogin, handleGoogleLogin }

    return (
        <>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </>
    );
};

export default AuthProvider;