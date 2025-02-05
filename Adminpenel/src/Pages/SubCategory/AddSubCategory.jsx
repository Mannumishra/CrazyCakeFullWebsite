import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSubCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        categoryName: '',
        subcategoryName: '',
    });
    const [mainCategories, setMainCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMainCategories = async () => {
            try {
                const response = await axios.get('https://api.cakecrazzy.com/api/get-main-category');
                setMainCategories(response.data.data);
            } catch (error) {
                toast.error("Error fetching main categories");
                console.error("Error fetching main categories:", error);
            }
        };
        fetchMainCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('https://api.cakecrazzy.com/api/create-subcategory', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            toast.success(response.data.message);
            navigate('/all-subcategory');
        } catch (error) {
            toast.error(error.response?.data?.message || "Error adding subcategory");
            console.error("Error adding subcategory:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Subcategory</h4>
                </div>
                <div className="links">
                    <Link to="/all-subcategory" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="categoryName" className="form-label">Select Main Category</label>
                        <select
                            name='categoryName'
                            className="form-control"
                            id="categoryName"
                            value={formData.categoryName}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a category</option>
                            {mainCategories.map(category => (
                                <option key={category._id} value={category._id}>
                                    {category.mainCategoryName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="subcategoryName" className="form-label">Subcategory Name</label>
                        <input
                            type="text"
                            name='subcategoryName'
                            className="form-control"
                            id="subcategoryName"
                            value={formData.subcategoryName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" disabled={isLoading} className={`${isLoading ? 'not-allowed' : 'allowed'}`}>
                            {isLoading ? "Please Wait..." : "Add Subcategory"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddSubCategory;
