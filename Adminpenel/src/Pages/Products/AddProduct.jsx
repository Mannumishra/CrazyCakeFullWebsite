import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        categoryName: '',
        subcategoryName: '',
        productName: '',
        productDescription: '',
        productSubDescription: '',
        productTag: '',
        Variant: [{
            color: '',
            weight: '',
            flover: '',
            price: '',
            discountPrice: '',
            finalPrice: '',
            stock: '',
        }],
        productImage: [],
    });

    // State to store categories, subcategories, colors, flowers, weights, and tags
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [allSubcategories, setAllSubcategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [flowers, setFlowers] = useState([]);
    const [weights, setWeights] = useState([]);
    const [tag, setTag] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryResponse = await axios.get('http://localhost:8000/api/get-main-category');
                const subcategoryResponse = await axios.get('http://localhost:8000/api/get-subcategory');
                const colorResponse = await axios.get('http://localhost:8000/api/get-color');
                const flowerResponse = await axios.get('http://localhost:8000/api/get-flover');
                const weightResponse = await axios.get('http://localhost:8000/api/get-size');
                const tagResponse = await axios.get('http://localhost:8000/api/get-tags');

                setCategories(categoryResponse.data.data);
                setAllSubcategories(subcategoryResponse.data.data); // Keep all subcategories
                setColors(colorResponse.data.data);
                setFlowers(flowerResponse.data.data);
                setWeights(weightResponse.data.data);
                setTag(tagResponse.data.data);
            } catch (error) {
                console.error('Error fetching data', error);
                toast.error('Error loading data!');
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        // Dynamically filter subcategories
        if (name === "categoryName") {
            const filteredSubcategories = allSubcategories.filter(
                (subcategory) => subcategory.categoryName._id === value
            );
            setSubcategories(filteredSubcategories); // Update subcategories for the dropdown
        }
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            productImage: e.target.files,
        });
    };

    const handleVariantChange = (index, e) => {
        const { name, value } = e.target;
        const updatedVariants = [...formData.Variant];
        updatedVariants[index][name] = value;

        // Automatically calculate finalPrice when price or discountPrice changes
        if (name === 'price' || name === 'discountPrice') {
            const price = parseFloat(updatedVariants[index].price) || 0;
            const discount = parseFloat(updatedVariants[index].discountPrice) || 0;
            updatedVariants[index].finalPrice = price - (price * (discount / 100));
        }

        setFormData({
            ...formData,
            Variant: updatedVariants,
        });
    };

    const handleAddVariant = () => {
        setFormData({
            ...formData,
            Variant: [
                ...formData.Variant,
                {
                    color: '',
                    weight: '',
                    flover: '',
                    price: '',
                    discountPrice: '',
                    finalPrice: '',
                    stock: '',
                }
            ],
        });
    };

    const handleRemoveVariant = (index) => {
        const updatedVariants = formData.Variant.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            Variant: updatedVariants,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const form = new FormData();
        form.append('categoryName', formData.categoryName);
        form.append('subcategoryName', formData.subcategoryName);
        form.append('productName', formData.productName);
        form.append('productDescription', formData.productDescription);
        form.append('productSubDescription', formData.productSubDescription);
        form.append('productTag', formData.productTag);
        form.append('Variant', JSON.stringify(formData.Variant));

        // Append images to FormData
        for (let i = 0; i < formData.productImage.length; i++) {
            form.append('productImage', formData.productImage[i]);
        }

        try {
            await axios.post('http://localhost:8000/api/create-product', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Product added successfully!');
            navigate("/all-products");
        } catch (err) {
            console.log(err)
            // toast.error(err.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Product</h4>
                </div>
                <div className="links">
                    <Link to="/all-products" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-3">
                        <label htmlFor="categoryName" className="form-label">Category Name<sup className='text-danger'>*</sup></label>
                        <select name='categoryName' className="form-select" id="categoryName" value={formData.categoryName} onChange={handleChange} required>
                            <option value="">Select Category</option>
                            {categories.map((item, index) =>
                                <option key={index} value={item._id}>{item.mainCategoryName}</option>
                            )}
                        </select>
                    </div>

                    <div className="col-md-3">
                        <label htmlFor="subcategoryName" className="form-label">Subcategory Name<sup className='text-danger'>*</sup></label>
                        <select
                            name="subcategoryName"
                            className="form-select"
                            id="subcategoryName"
                            value={formData.subcategoryName}
                            onChange={handleChange}
                            disabled={!formData.categoryName}
                            required
                        >
                            <option value="" disabled>Select Subcategory</option>
                            {subcategories.map((item, index) => (
                                <option key={index} value={item._id}>{item.subcategoryName}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="productName" className="form-label">Product Name<sup className='text-danger'>*</sup></label>
                        <input type="text" name='productName' className="form-control" id="productName" value={formData.productName} onChange={handleChange} required placeholder='Product Name' />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="productSubDescription" className="form-label">Product Sub Description<sup className='text-danger'>*</sup></label>
                        <textarea name='productSubDescription' rows={2} className="form-control" id="productSubDescription" placeholder='Product Sub Description' value={formData.productSubDescription} onChange={handleChange} required />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="productDescription" className="form-label">Product Description<sup className='text-danger'>*</sup></label>
                        <textarea name='productDescription' rows={6} className="form-control" id="productDescription" placeholder='Product Description' value={formData.productDescription} onChange={handleChange} required />
                    </div>



                    <div className="col-md-4">
                        <label htmlFor="productTag" className="form-label">Product Tag<sup className='text-danger'>*</sup></label>
                        <select name='productTag' className="form-select" id="productTag" value={formData.productTag} onChange={handleChange}>
                            <option value=""selected disabled>Select Tag</option>
                            {tag.map((item, index) =>
                                <option key={index} value={item._id}>{item.tagName}</option>
                            )}
                        </select>
                    </div>

                    <div className="col-md-8">
                        <label htmlFor="productImage" className="form-label">Product Image<sup className='text-danger'>*</sup></label>
                        <input type="file" name="productImage" className="form-control" id="productImage" multiple onChange={handleFileChange} required />
                    </div>

                    {/* Variant Details */}
                    {formData.Variant.map((variant, index) => (
                        <div key={index} className="variant-container">

                            <div className="row">
                                <div className="col-md-3 mb-1">
                                    <label htmlFor={`variantColor-${index}`} className="form-label">Color<sup className='text-danger'>*</sup></label>
                                    <select name="color" className="form-select" id={`variantColor-${index}`} value={variant.color} onChange={(e) => handleVariantChange(index, e)} >
                                        <option value="">Select Color</option>
                                        {colors.map((color, i) => (
                                            <option key={i} value={color._id}>{color.colorName}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-md-3 mb-1">
                                    <label htmlFor={`variantWeight-${index}`} className="form-label">Weight<sup className='text-danger'>*</sup></label>
                                    <select name="weight" className="form-select" id={`variantWeight-${index}`} value={variant.weight} onChange={(e) => handleVariantChange(index, e)} >
                                        <option value="">Select Weight</option>
                                        {weights.map((weight, i) => (
                                            <option key={i} value={weight._id}>{weight.sizeweight}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-md-3 mb-1">
                                    <label htmlFor={`variantFlower-${index}`} className="form-label">Flower<sup className='text-danger'>*</sup></label>
                                    <select name="flover" className="form-select" id={`variantFlower-${index}`} value={variant.flover} onChange={(e) => handleVariantChange(index, e)} >
                                        <option value="">Select Flower</option>
                                        {flowers.map((flower, i) => (
                                            <option key={i} value={flower._id}>{flower.floverName}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor={`variantStock-${index}`} className="form-label">Stock<sup className='text-danger'>*</sup></label>
                                    <input type="number" name="stock" className="form-control" id={`variantStock-${index}`} placeholder='Stock' value={variant.stock} onChange={(e) => handleVariantChange(index, e)}  />
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor={`variantPrice-${index}`} className="form-label">Price<sup className='text-danger'>*</sup></label>
                                    <input type="number" name="price" className="form-control" id={`variantPrice-${index}`} placeholder='Price' value={variant.price} onChange={(e) => handleVariantChange(index, e)} required />
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor={`variantDiscountPrice-${index}`} className="form-label">Discount %<sup className='text-danger'>*</sup></label>
                                    <input type="number" name="discountPrice" className="form-control" id={`variantDiscountPrice-${index}`} placeholder='Discount %' value={variant.discountPrice} onChange={(e) => handleVariantChange(index, e)} required />
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor={`variantFinalPrice-${index}`} className="form-label">Final Price<sup className='text-danger'>*</sup></label>
                                    <input type="number" name="finalPrice" className="form-control" id={`variantFinalPrice-${index}`} placeholder='Final Price' value={variant.finalPrice} readOnly />
                                </div>


                            </div>

                            {/* Remove Variant Button */}
                            {index > 0 && (
                                <button type="button" onClick={() => handleRemoveVariant(index)} className="btn btn-danger mt-1">Remove Variant</button>
                            )}
                        </div>
                    ))}

                    <button type="button" onClick={handleAddVariant} className="btn btn-primary col-md-3">Add Variant</button>


                    <div className="col-md-12">
                        <button type="submit" className="btn btn-success" disabled={isLoading}>
                            {isLoading ? 'Saving...' : 'Add Product'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProduct;
