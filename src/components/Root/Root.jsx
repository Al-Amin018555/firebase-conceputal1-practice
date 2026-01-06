import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="border-amber-300">
            <Navbar></Navbar>
            <Outlet></Outlet>            
        </div>
    );
};

export default Root;