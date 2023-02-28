import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-brown-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-purple-400">
                            <li><Link to='/home'><FaHome></FaHome>Home</Link></li>
                            <li><Link to='/login'><FaSignInAlt></FaSignInAlt>Log-In</Link></li>
                            <li><Link to='/register'><FaUserPlus></FaUserPlus>Register</Link></li>
                        </ul>
                    </div>
                    <h1 className="text-3xl font-extrabold text-red-700">Super Shop</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-purple-600">
                        <li><Link to='/home'><FaHome></FaHome>Home</Link></li>
                        <li><Link to='/login'><FaSignInAlt></FaSignInAlt>Log-In</Link></li>
                        <li><Link to='/register'><FaUserPlus></FaUserPlus>Register</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;