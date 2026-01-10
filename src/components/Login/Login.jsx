import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {

    const { login } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <form onSubmit={handleLogin} className="border-2 w-1/3 mx-auto mt-10 border-red-400 rounded-lg space-y-3 p-5">

                <div>
                    <p>Email</p>
                    <input name="email" type="email" placeholder="Type here" className="input w-full" />
                </div>
                <div>
                    <p>Password</p>
                    <input name="password" type="password" placeholder="Type here" className="input w-full" />
                </div>
                <button type="submit" className="btn btn-primary w-full">Login</button>
            </form>
        </div>
    );
};

export default Login;