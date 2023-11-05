// import Lottie from "lottie-react";
// import { useContext } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
// import logout from '../../../../public/logout.json';
import userLogo from '../../../../public/user.json';
// import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext)
    // const handleSignOut = () => {
    //     logOut()

    // }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Add job</Link></li>
        <li><Link to='/'>My posted jobs</Link></li>
        <li><Link to='/'>My Bids</Link></li>
        <li><Link to='/'>Bid Requests</Link></li>
        {/* {
            user ? <>
                <li><Link to='/addProduct'>Add product</Link></li>
                <li><Link to='/myCart'>My cart</Link></li></> : <></>} */}
    </>


    return (
        <div className=" my-4 ">
            <div className="navbar rounded-xl bg-gradient-to-b from-blue-gray-50 to-blue-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">DigiTalent </Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu text-lg font-semibold menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {user ? <>
                        <p className=" font-semibold"> {user?.displayName ? <p>{user.displayName}</p> : <></>}</p>
                        <img src={user.photoURL} className="w-10 mx-4 rounded-full" alt="" />
                    </> : <></>}
                    {user ? <Lottie animationData={logout} onClick={handleSignOut} className="w-14"  ></Lottie> :
                        <Link to='/login'><Lottie animationData={userLogo} className="w-14"  ></Lottie></Link>
                    } */}
                    <Link to='/login'><Lottie animationData={userLogo} className="w-14"  ></Lottie></Link>
                    
                </div>
              
            </div>
        </div>
    );
};

export default Navbar;