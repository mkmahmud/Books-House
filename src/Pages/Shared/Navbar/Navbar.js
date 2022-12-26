import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assetes/book.png'
import { UserAuth } from '../../../Context/AuthContext/AuthContext';
import useMyAdded from '../../../Hooks/useMyAdded';

const Navbar = () => {

    const { user, logOut, databaseUserInfo } = useContext(UserAuth);


    const menus = <>

        <li>
            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
        </li>
        <li>
            <button className="mx-2 border border-2"> <Link to='/cart'>Buscket</Link>
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">8</span>
                </div>
            </button>
        </li>
        {
            user ?
                <>
                    {
                        databaseUserInfo?.role === 0 ? <li><button className="mx-2 border border-2 bg-green-400" ><Link to='/pendingaproval'>Pending Aproval</Link></button></li> : ''
                    }
                    <li><button className="mx-2 border border-2" ><Link to='/myaccount'>My Account</Link></button></li>
                    {
                        databaseUserInfo?.role === 1 ? <li><button className="mx-2 border border-2 bg-green-400" ><Link to='/sellbook'>Sell Book</Link></button></li> : ''
                    }
                     {
                        databaseUserInfo?.role === 1 ? <li><button className="mx-2 border border-2 " ><Link to='/myAdded'>My Added</Link></button></li> : 
                        <li><button className="mx-2 border border-2 " > <Link to='mybooked'>My Booked</Link> </button></li>
                    }
                    <li><button className="mx-2 border border-2 bg-red-400" onClick={() => logOut()}>Log Out</button></li>
                </>
                :
                <>
                    <li><button className="mx-2 border border-2"><Link to='/login'>Sign In</Link> </button></li>
                    <li><button className="mx-2 border border-2"><Link to=''>Help</Link> </button></li>
                </>
        }
    </>




    return (
        <div className="navbar px-2 md:px-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                        {
                            menus
                        }
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl flex items-center font-bold text-2xl"><img src={logo} className='h-16' alt="" /> BooksHouse</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    {
                        menus
                    }
                </ul>
            </div>

        </div>
    );
};

export default Navbar;