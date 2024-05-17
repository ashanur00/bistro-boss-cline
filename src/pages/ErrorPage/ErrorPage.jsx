import Lottie from "lottie-react";
import error from "../../../public/Error.json"
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div>
            <div>
                <Lottie animationData={error} className="w-[570px] mx-auto"/>
            </div>
            <Link to={"/"}>
            <button className="btn btn-primary ml-[570px]">Go back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;