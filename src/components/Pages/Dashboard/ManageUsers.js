import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/user", {
            method: "GEt",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])



    // make editor api========================================
    const makeEditor = (email) => {
        fetch(`http://localhost:5000/user/editor/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // make admin api==============================

    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('fail to make an admin')
                }
                return res.json()
            })
            .then(data => console.log(data))
    }
    // make super admin role ===================

    const makeSuperAdmin = (email) => {
        fetch(`http://localhost:5000/user/superadmin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {

                if (res.status === 403) {
                    toast.error('failed to make an admin')
                }
                return res.json()
            })
            .then(data => console.log(data))
    }
    return (
        <div>
            <h2 className="text-center text-xl font-semibold py-2">Users ({users?.length})</h2>

            {/* ==================================== */}
            <div className="overflow-x-auto">
                <table className="table w-full rounded-sm">
                    {/* <!-- head --> */}
                    <thead className='rounded-sm'>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users?.map(user => <tr key={user._id}>
                                <th>{users.indexOf(user) + 1}</th>
                                <th>{user.email}</th>
                                <td>{user.role ? user.role : "User"}</td>
                                <td>

                                    {!user.role && <button onClick={() => makeEditor(user.email)} className='btn btn-primary btn-sm rounded-sm'>make Editor</button>}
                                    {
                                        user.role === "editor" && <button onClick={() => makeAdmin(user.email)} className='btn btn-primary btn-sm rounded-sm'>make Admin</button>
                                    }
                                    {
                                        user.role === "admin" && <button onClick={() => makeSuperAdmin(user.email)} className='btn btn-primary btn-sm rounded-sm'>make Super Admin</button>
                                    }


                                </td>

                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;