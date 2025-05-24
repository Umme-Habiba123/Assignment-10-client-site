import React, { use } from 'react';
import { Link } from 'react-router';
import { SiFreelancermap } from "react-icons/si";
import userPhoto from '../assets/user.png'
import { AuthContext } from '../Provider/AuthContext';
import { NavLink } from 'react-router';
import ThemeControler from './ThemeControler';

const Navbar = () => {

    const { user, logOutUser } = use(AuthContext)
 

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log('sign out successfully')
            }).catch(error => {
                console.log(error)
            })
    }

    const links = <>

        <NavLink to={'/'}><li><p>HOME</p></li> </NavLink>
        <NavLink to={'/addTasks'}><li><p>ADD TASKS</p></li> </NavLink>
       
        {user &&
            <>

                 <NavLink to={'/brouseTasks'}><li><p>BROUSE TASKS</p></li> </NavLink>

                <NavLink to={'/myPostedTasks'}><li><p>MY POSTED TASKS</p></li> </NavLink>
            </>
        }

        <NavLink to={'/services'}><li><p>SERVICES</p></li> </NavLink>




    </>
    return (
        <div>
            <div className="navbar  tagesschrift-regular w-11/12 mx-auto shadow-sm py-5 sticky top-0 z-50  ">
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
                        <p className="btn btn-ghost                      text-xs md:text-2xl">💻Flexora</p>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex dancing-script-font">
                    <ul className="menu menu-horizontal gap-4 px-1 text-sm">

                        {links}

                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    <div className='relative group'>

                        {
                            user?.displayName && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                                    {user.displayName}
                                </div>
                            )
                        }

                        <img className='w-15 rounded-full border-2 border-teal-500 transition-transform duration-300 group-hover:scale-110' src={`${user ? user.photoURL : userPhoto}`} alt="user" />

                    </div>

                    {
                        user ?
                            <>
                                <span className='text-xs lg:text-sm'>
                                    {user.email}
                                </span>

                                <p onClick={handleLogOut} className="btn text-xs md:text-xl lg:text-sm   bg-black text-white border  hover:bg-white hover:text-black">LOG OUT</p>
                            </>

                            :
                            (
                                <Link to={'/logIn'}>
                                    <p className="btn text-xs md:text-xl lg:text-sm   bg-black text-white border border-black hover:bg-white hover:text-black">LOG IN</p>
                                </Link>
                            )
                    }

                    <Link to={'/signUp'}>
                        <p className="btn text-xs md:text-xl lg:text-sm   bg-pink-200 border border-pink-200  hover:bg-white">SIGN UP</p>
                    </Link>
                </div>
                    <div className='ml-5'>
                         <ThemeControler></ThemeControler>
                    </div>
            </div>
       
        </div>
    );
};

export default Navbar;