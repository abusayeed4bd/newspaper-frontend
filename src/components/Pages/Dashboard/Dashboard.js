import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='h-screen'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col h-fit overflow-hidden ">
                    {/* <!-- Page content here --> */}

                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side border-r-2">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-50  text-primary-content bg-primary ">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">Add News</Link></li>
                        <li><Link to="/dashboard/manageuser">Manage users</Link></li>
                        <li><Link to="/dashboard/manageuser">Profile</Link></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;