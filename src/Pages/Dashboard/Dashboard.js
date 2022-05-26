import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-4xl text-cyan-700 font-bold text-center lg:text-left'>Welcome to dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {!admin && <li><Link to='/dashboard/add-review'>Add Review</Link></li>}
                    {!admin && <li><Link to='/dashboard/my-order'>My Orders</Link></li>}
                    {admin && <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>}
                    {admin && <li><Link to='/dashboard/add-tools'>Add Tools</Link></li>}
                    {admin && <li><Link to='/dashboard/manage-product'>Manage Products</Link></li>}
                    {admin && <li><Link to='/dashboard/manage-orders'>Manage All Orders</Link></li>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;