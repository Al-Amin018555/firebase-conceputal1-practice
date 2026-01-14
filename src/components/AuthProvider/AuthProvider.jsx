import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
            else{
                setUser(null)
            }

            return () => {
                unsubscribe()
            }
           
        });

    }, [])
    const authInfo = {
        registerUser,
        login,
        logout,
        user,
        setUser,
        googleLogin,
    }

    return (

        <AuthContext value={authInfo}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;