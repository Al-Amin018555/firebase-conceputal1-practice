import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
    const data = useContext(AuthContext);
    return (
        <div className="flex justify-center items-center min-h-screen">   
            {data}         
        </div>
    );
};

export default Home;