import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/image/news-logo.png"
import auth from './../../firebase.init';
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth';


const Navbar = () => {

    const [user] = useAuthState(auth);
    const [searchField, setSearchField] = useState(false);

    const navigate = useNavigate();


    const handleSignout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken")
    }

    const handleSearch = e => {
        e.preventDefault();

        if (e.target.search.value == "") {
            setSearchField(false)
        } else {
            navigate(`/search?query=${e.target.search.value}`)
            e.target.reset();
            setSearchField(false)
        }



    }

    const navIteam = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/international">Internationl</Link></li>
        <li><Link to="/national">National</Link></li>
        <li><Link to="/sports">Sports</Link></li>
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
                            {navIteam}

                        </ul>
                    </div>

                    {/* hamburger icon========================= */}
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:block hidden">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>

                    {/* hamburger icon========================= */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navIteam}

                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <button onClick={()=> setSearchField(true)} className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg></button> */}
                    {
                        searchField ?


                            <form className='' onSubmit={handleSearch}>
                                <div className="flex items-center">
                                    <input className='rounded-l-sm text-primary p-2' type="text" name="search" id="" />

                                    <button className='bg-white text-primary rounded-r-sm p-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg></button>
                                </div>
                            </form>



                            :
                            <button onClick={() => setSearchField(true)} className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg></button>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;