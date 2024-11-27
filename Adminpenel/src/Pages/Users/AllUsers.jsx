import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    // Fetch users from the API
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/user');
            if (response.data.success) {
                setUsers(response.data.data); // Save the user data
            } else {
                console.error("Failed to fetch users:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    // Load data on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <div className="bread">
                <div className="head">
                    <h4>All Users</h4>
                </div>
                <div className="links">
                    {/* Additional links or actions can be placed here */}
                </div>
            </div>

            <section className="main-table">
                <div className="table-responsive mt-4">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr key={user._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role || "User"}</td>
                                        <td>{new Date(user.createdAt).toLocaleString()}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default AllUsers;
