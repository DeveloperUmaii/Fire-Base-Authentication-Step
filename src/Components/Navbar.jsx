import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AutheProvidor/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    //   const handleLogOut = () => {
    //       logOut()
    //         .then(() => {
    //     // Sign-out successful.
    //     console.log('Sign-out successful.')
    //         }).catch((error) => {
    //         // An error happened.
    //         });


    // }
    return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/' className="btn btn-ghost text-xl">Home</NavLink></li>
        <li><NavLink to='/register' className="btn btn-ghost text-xl">Register</NavLink></li>
        <li><NavLink to='/login' className="btn btn-ghost text-xl">LogIn</NavLink></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <NavLink to='/' className="btn btn-ghost text-xl">Home</NavLink>
    <NavLink to='/Bangbang' className="btn btn-ghost text-xl">BangBang-HeRO</NavLink>
    <NavLink to='/register' className="btn btn-ghost text-xl">Register</NavLink>
    <NavLink to='/login' className="btn btn-ghost text-xl">LogIn</NavLink>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      {user && user?.email}
    </button>
    {user? <button onClick={()=>logOut()} className="btn btn-error btn-xs">
      Log Out
    </button> : <NavLink to='/login' className="btn btn-ghost text-xl">LogIn</NavLink>}
  </div>
</div>
    );
};

export default Navbar;