import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllColor = () => {
    const [colors, setColors] = useState([]); // State to store color data
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        const fetchColors = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/get-color');
                if (response.data && response.data.data) {
                    setColors(response.data.data); // Set the fetched colors
                } else {
                    toast.error('No colors found');
                }
            } catch (error) {
                toast.error(error.response ? error.response.data.message : 'Error fetching colors');
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchColors(); // Call the fetch function
    }, []); // Empty dependency array to run once on mount

    const handleDelete = async (id) => {
        const confirmed = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        });

        if (confirmed.isConfirmed) {
            try {
                const response = await axios.delete(`http://localhost:8000/api/delete-color/${id}`); // Adjust the delete URL
                toast.success(response.data.message);
                setColors(colors.filter(color => color._id !== id)); // Remove deleted color from state
            } catch (error) {
                toast.error(error.response ? error.response.data.message : 'Error deleting color');
            }
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Color </h4>
                </div>
                <div className="links">
                    <Link to="/add-color" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>

            <div className="filteration">
                <div className="selects">
                    {/* Add sorting options here if needed */}
                </div>
                <div className="search">
                    <label htmlFor="search">Search </label> &nbsp;
                    <input type="text" name="search" id="search" />
                </div>
            </div>

            <section className="main-table ">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Color</th>
                            <th scope="col">Color Status</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5" className="text-center">Loading...</td>
                            </tr>
                        ) : colors.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center">No colors available</td>
                            </tr>
                        ) : (
                            colors.map((color, index) => (
                                <tr key={color._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{color.colorName}</td>
                                    <td>
                                        <div className="circle-color" style={{ backgroundColor: color.colorName }}></div>
                                    </td>
                                    <td>{color.colorStatus}</td>
                                    <td>
                                        <Link to={`/edit-color/${color._id}`} className="bt edit">Edit <i className="fa-solid fa-pen-to-square"></i></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(color._id)} className="bt delete">Delete <i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default AllColor;