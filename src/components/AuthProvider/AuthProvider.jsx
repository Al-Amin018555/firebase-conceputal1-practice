import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error))
    }
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error))
    }
    const authInfo = {
        registerUser,
        login,
    }

    return (

        <AuthContext value={authInfo}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;