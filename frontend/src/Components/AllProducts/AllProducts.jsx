import React, { useEffect, useState } from "react";
import "./allproducts.css";
import Slider from "react-slick";
import axios from 'axios'


import { Link } from "react-router-dom";

const AllProducts = () => {
  const [categoryData, setCategoryData] = useState([])
  const [productData, setProductData] = useState([])

  const getApiData = async () => {
    try {
      const res = await axios.get("https://api.cakecrazzy.com/api/get-main-category")
      if (res.status === 200) {
        setCategoryData(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getApiProductData = async () => {
    try {
      const res = await axios.get("https://api.cakecrazzy.com/api/all-product")
      if (res.status === 200) {
        setProductData(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log(productData)
  useEffect(() => {
    getApiData()
    getApiProductData()
  }, [])


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <div className="custom-next-arrow">{">"}</div>,
    prevArrow: <div className="custom-prev-arrow">{"<"}</div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      {/* Cake Section */}
      <div className="allproducts container-fluid">
        {
          categoryData.map((item, index) =>
            <div className="featured-menu">
              <h2 className="featured-menu-title text-uppercase">{item.mainCategoryName}</h2>
              <div className="product-main-category">

                {productData.filter(product => product.categoryName._id === item._id).map((product, productIndex) => (
                  <div key={index} className="product-card">
                    <div className="product-image">
                      <img src={`https://api.cakecrazzy.com/${product.productImage[0]}`} alt={product.productName} loading="lazy" />
                    </div>
                    <h3 className="product-title">{product.productName}</h3>
                    <p className="product-description">{product.productSubDescription}</p>
                    <Link to={`/product-details/${product.productName}`} className="order-button">See Details</Link>
                  </div>
                ))}
              </div>

            </div>
          )
        }
      </div>
    </>
  );
};

export default AllProducts;
