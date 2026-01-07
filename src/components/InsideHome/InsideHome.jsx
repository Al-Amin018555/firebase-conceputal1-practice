import { useContext } from "react";
import { HomeContext } from "../Home/Home";

const InsideHome = () => {
    const data = useContext(HomeContext);
    console.log(data)
    return (
        <div>
            <h2>This is inside home</h2>            
        </div>
    );
};

export default InsideHome;