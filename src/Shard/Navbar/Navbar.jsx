import { Link } from "react-router-dom";

const Navbar = () => {


    const navLink = <>

        <li className="text-white font-bold"><Link to={'/'}>HOME</Link></li>
        <li className="text-white font-bold"><Link to={'/contact'}>CONTACT US</Link></li>
        <li className="text-white font-bold"><Link to={'/dashboard'}>DASHBOARD</Link></li>
        <li className="text-white font-bold"><Link to={'/meno'}>OUR MENU</Link></li>
        <li className="text-white font-bold"><Link to={'/shop/salad'}>OUR SHOP</Link></li>




    </>


    return (
        <div>
            <div className="navbar fixed z-10 bg-[#1515159f] max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#1515159f]">
                         {navLink}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost w-52"><img src="https://i.ibb.co/7QYKjzQ/Group-1.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;