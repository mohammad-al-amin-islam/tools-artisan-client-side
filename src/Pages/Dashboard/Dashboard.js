import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-4xl text-cyan-700 font-bold text-center lg:text-left'>Welcome to dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && <li><Link to='/dashboard'>My Orders</Link></li>}
                    {!admin && <li><Link to='/dashboard/add-review'>Add Review</Link></li>}
                    <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                    {admin && <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;