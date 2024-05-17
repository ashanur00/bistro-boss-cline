import { Outlet } from "react-router-dom";
import Navbar from "../Shard/Navbar/Navbar";


const Root = () => {
    return (
        <div className="">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;