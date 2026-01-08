import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error))

    }
    const authInfo = {
        register,
    }

    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;