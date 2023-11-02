import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="font-jost">
            <Navbar></Navbar>
            <Outlet></Outlet>
            root
        </div>
    );
};

export default Root;