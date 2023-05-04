import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {

    const { handleLogout, user, setUser } = useContext(AuthContext);

    const handleLogoutButton = () => {
        handleLogout().then(() => console.log("logggggggggged out", user)).catch(error => console.log("error is", error))
    }



    return (
        <div className=' bg-[#FFE382] py-2'>


            <div className="flex items-center justify-between main-container bg-[#FFE382]">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeLink" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeLink" : ""
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>



                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeLink" : ""
                                    }
                                >
                                    About
                                </NavLink>
                            </li>



                            {user && <li className="tooltip tooltip-bottom" data-tip={user.displayName}>{user.photoURL && <Link to="/userprofile"><figure className='w-14 h-fit'><img className='w-full rounded-full' src={user.photoURL && user.photoURL} alt="" /></figure></Link>}</li>}

                            {user && <li>

                                <a>{user.email && user.email}</a>

                            </li>}

                            {user ?



                                <li><button onClick={handleLogoutButton}>Logout</button></li>




                                :


                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "activeLink" : ""
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>

                            }


                            {!user &&

                                <li>
                                    <NavLink
                                        to="/registration"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "activeLink" : ""
                                        }
                                    >
                                        Sign Up
                                    </NavLink>
                                </li>

                            }


                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-bold">SultanTable</Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">


                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeLink" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeLink" : ""
                                }
                            >
                                Blog
                            </NavLink>
                        </li>



                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeLink" : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>



                        {user && <li className="tooltip tooltip-bottom" data-tip={user.displayName}>{user.photoURL ? <Link to="/userprofile"><figure className='w-14 h-fit'><img className='w-full rounded-full' src={user.photoURL && user.photoURL} alt="" /></figure></Link> : <Link to="/userprofile"><figure className='w-14 h-fit'><img className='w-full rounded-full' src="https://i.ibb.co/K798Km5/user.jpg" alt="" /></figure></Link>}</li>}

                        {user && <li>

                            <a>{user.email && user.email}</a>

                        </li>}

                        {user ?



                            <li><button onClick={handleLogoutButton}>Logout</button></li>




                            :


                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeLink" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>

                        }


                        {!user &&

                            <li>
                                <NavLink
                                    to="/registration"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeLink" : ""
                                    }
                                >
                                    Sign Up
                                </NavLink>
                            </li>

                        }




                    </ul>
                </div>

            </div>


        </div>
    );
};

export default Navbar;