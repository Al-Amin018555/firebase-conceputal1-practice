import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const [error, setError] = useState("");
    const { registerUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword);
        if (password.length < 6) {
            setError("password must be atleast 6 characters or more")
            return;
        }
        if(password !== confirmPassword){
            setError("password didn't match")
            return;
        }

        setError("")
        registerUser(email, password)
    }
    return (
        <div>
            <form onSubmit={handleRegister} className="border-2 w-1/3 mx-auto mt-10 border-red-400 rounded-lg space-y-3 p-5">
                <div>
                    <p>Name</p>
                    <input name="name" type="text" placeholder="Type here" className="input w-full" />
                </div>
                <div>
                    <p>Photo</p>
                    <input name="photo" type="text" placeholder="Type here" className="input w-full" />
                </div>
                <div>
                    <p>Email</p>
                    <input name="email" type="email" placeholder="Type here" className="input w-full" />
                </div>
                <div>
                    <p>Password</p>
                    <input name="password" type="password" placeholder="Type here" className="input w-full" />
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input name="confirmPassword" type="password" placeholder="Type here" className="input w-full" />
                </div>
                {
                    error && <small className="font-semibold text-red-500">{error}</small>
                }
                <button type="submit" className="btn btn-primary w-full">Register</button>
            </form>
        </div>
    );
};

export default Register;