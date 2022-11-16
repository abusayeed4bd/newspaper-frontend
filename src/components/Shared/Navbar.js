import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/image/news-logo.png"
import auth from './../../firebase.init';
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
    }

    const navIteam = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Internationl</Link></li>
        <li><Link to="/">National</Link></li>
        <li><Link to="/">Sports</Link></li>
        <li><Link to="/archive">Archive</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}

    </>
    return (
        <div>
            {/* logo  */}
            <div className="navbar bg-base-100 md:px-24 items-center">
                <div className="flex-1">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="flex-none">
                    {
                        user ? <button onClick={handleSignout} className="btn  btn-ghost">
                            sign out
                        </button> :
                            <Link to="/login" className="btn  btn-ghost">
                                Login
                            </Link>
                    }
                </div>
            </div>

            {/* menu bar */}
            <div className="sticky top-0 z-30 navbar bg-primary text-white !py-2 md:px-24  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a>
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-neutral text-neutral-content">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>

                        </ul>
                    </div>

                    {/* hamburger icon========================= */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    {/* hamburger icon========================= */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navIteam}

                    </ul>
                </div>
                <div className="navbar-end">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>



                </div>
            </div>
        </div>
    );
};

export default Navbar;