import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditSubCategory = () => {
    const { id } = useParams(); // Get the subcategory ID from the URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        categoryName: '', // This will store the selected main category ID
        subcategoryName: '',
    });
    const [mainCategories, setMainCategories] = useState([]); // For storing fetched categories
    const [isLoading, setIsLoading] = useState(false);

    // Fetch main categories
    useEffect(() => {
        const fetchMainCategories = async () => {
            try {
                const response = await axios.get('https://api.cakecrazzy.com/api/get-main-category'); // Adjust the URL to your API endpoint
                setMainCategories(response.data.data); // Assuming the response structure
            } catch (error) {
                toast.error("Error fetching main categories");
                console.error("Error fetching main categories:", error);
            }
        };

        const fetchSubCategory = async () => {
            try {
                const response = await axios.get(`https://api.cakecrazzy.com/api/get-single-subcategory/${id}`);
                const { categoryName, subcategoryName} = response.data.data;

                setFormData({
                    categoryName: categoryName?._id || categoryName, // Use `_id` if `categoryName` is an object
                    subcategoryName,
                });
            } catch (error) {
                toast.error('Error fetching subcategory data');
                console.error('Error fetching subcategory:', error);
            }
        };
        fetchMainCategories();
        fetchSubCategory();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
            setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.put(`https://api.cakecrazzy.com/api/update-subcategory/${id}`, formData);
            toast.success(response.data.message);
            navigate('/all-subcategory');
        } catch (error) {
            toast.error(error.response?.data?.message || "Error updating subcategory");
            console.error("Error updating subcategory:", error);
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Subcategory</h4>
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
                                    {category.mainCategoryName} {/* Adjust this based on your category field */}
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
                            {isLoading ? "Please Wait..." : "Update Subcategory"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditSubCategory;