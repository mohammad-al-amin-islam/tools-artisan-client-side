import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const navItem = <>
        <li><Link className='mr-2 text-xl' to='/'>Home</Link></li>
        <li>{user ? <button onClick={logout} class="btn btn-ghost text-xl font-normal">Sign Out</button>
            :
            <Link className='mr-2 text-xl' to='/login'>Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-200 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link className="btn btn-ghost  text-3xl uppercase font-bold" to='/'>Tools Artisan</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link className="btn" to='/'>Get started</Link>
            </div> */}
        </div>
    );
};

export default Navbar;