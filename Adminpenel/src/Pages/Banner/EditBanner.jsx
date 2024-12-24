import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBanner = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        bannerName: '',
        bannerImage: null,
        bannerType: '',
        bannerStatus: false,
    });
    const [previewImage, setPreviewImage] = useState('');
    const [btnLoading, setBtnLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const response = await axios.get(`https://api.cakecrazzy.com/api/get-single-banner/${id}`);
                const banner = response.data.data;
                setFormData({
                    bannerName: banner.bannerName,
                    bannerImage: null,
                    bannerType: banner.bannerType,
                    bannerStatus: banner.bannerStatus === 'True',
                });
                setPreviewImage(`https://api.cakecrazzy.com/${banner.bannerImage}`);
            } catch (error) {
                console.error("Failed to fetch banner data:", error);
                toast.error("Failed to load banner data");
            }
        };

        fetchBannerData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            bannerImage: file,
        });
        setPreviewImage(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.bannerName || !formData.bannerType) {
            toast.error("All fields except image are required");
            return;
        }

        const submitData = new FormData();
        submitData.append('bannerName', formData.bannerName);
        if (formData.bannerImage) submitData.append('bannerImage', formData.bannerImage);
        submitData.append('bannerType', formData.bannerType);
        submitData.append('bannerStatus', formData.bannerStatus ? "True" : "False");

        try {
            setBtnLoading(true);
            const response = await axios.put(`https://api.cakecrazzy.com/api/update-banner/${id}`, submitData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                toast.success("Banner updated successfully");
                navigate('/all-banners');
            }
        } catch (error) {
            console.error("Failed to update banner:", error);
            toast.error("Failed to update banner");
        } finally {
            setBtnLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Shop Banner</h4>
                </div>
                <div className="links">
                    <Link to="/all-banners" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="bannerName" className="form-label">Banner Name</label>
                        <input
                            type="text"
                            name="bannerName"
                            value={formData.bannerName}
                            onChange={handleChange}
                            className="form-control"
                            id="bannerName"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="bannerImage" className="form-label">Banner Image</label>
                        <input
                            type="file"
                            name="bannerImage"
                            className="form-control"
                            id="bannerImage"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="col-md-6">
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Banner Preview"
                                style={{ width: '100px', height: '100px' }}
                            />
                        )}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="bannerType" className="form-label">Banner Type</label>
                        <select
                            name="bannerType"
                            className="form-select"
                            id="bannerType"
                            value={formData.bannerType}
                            onChange={handleChange}
                            required
                        >
                            <option value="" selected disabled>Select Banner Type</option>
                            <option value="Desktop">Desktop</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Both">Both</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="bannerStatus"
                                id="bannerStatus"
                                checked={formData.bannerStatus}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="bannerStatus">
                                Active
                            </label>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <button
                            type="submit"
                            disabled={btnLoading}
                            className={`btn ${btnLoading ? 'not-allowed' : 'allowed'}`}
                        >
                            {btnLoading ? "Please Wait..." : "Update Banner"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditBanner;
