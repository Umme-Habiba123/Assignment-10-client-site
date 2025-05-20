import React from 'react';
import { Link } from 'react-router';
import { SiFreelancermap } from "react-icons/si";

const Navbar = () => {
    const links = <>
        <Link to={'/'}><li><p>HOME</p></li> </Link>
        <Link to={'/addTasks'}><li><p>ADD TASKS</p></li> </Link>
        <Link to={'/brouseTasks'}><li><p>BROUSE TASKS</p></li> </Link>
        <Link to={'/myPostedTasks'}><li><p>MY POSTED TASKS</p></li> </Link>
    </>
    return (
        <div>

            <div className="navbar   tagesschrift-regular mt-5 w-11/12 mx-auto shadow-sm py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">

                            {links}

                        </ul>
                    </div>

                  <Link to={'/'}>
                    <p className="btn btn-ghost text-3xl"><SiFreelancermap />Flexora</p>
                  </Link>

                </div>
                <div className="navbar-center hidden lg:flex dancing-script-font">
                    <ul className="menu menu-horizontal px-1 text-sm">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <img src="" alt="" />
                    <p className="btn">LOG IN</p>
                    <p className="btn">SIGN UP</p>

                </div>

            </div>

         
        </div>
    );
};

export default Navbar;