import { Outlet } from "react-router";

const Root = () => {
    return (
        <div className="border-amber-300">
            <Outlet></Outlet>            
        </div>
    );
};

export default Root;