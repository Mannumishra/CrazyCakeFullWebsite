import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "./productDetails.css";
import AllProducts from "../../Components/AllProducts/AllProducts";
import axios from 'axios';

const ProductDetails = () => {
  const { name } = useParams();
  const [data, setData] = useState({});
  const [activeWeight, setActiveWeight] = useState(null);
  const [price, setPrice] = useState(0);

  const getApiData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/get-product-by-name/" + name);
      setData(res.data.data);
      if (res.data.data?.Variant?.length > 0) {
        setPrice(res.data.data.Variant[0].finalPrice);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, [name]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleWeightSelection = (weight) => {
    setActiveWeight(weight);
    // Update price based on selected weight
    const selectedVariant = data.Variant.find((v) => v?.weight?.sizeweight === weight);
    if (selectedVariant) {
      setPrice(selectedVariant.finalPrice);
    }
  };

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={`http://localhost:8000/${data.productImage[i]}`}
            className="w-100"
            style={{ borderRadius: "1rem" }}
            alt={`Thumbnail ${i + 1}`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "miniImage",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Breadcrumb Section */}
      <section className="breadCrumb">
        <div className="breadCrumbContent">
          <h1>Product Details</h1>
          <Link to="/">Home /</Link> <Link to="">{data?.categoryName?.mainCategoryName} /</Link>{" "}
          <Link to="">{data.productName}</Link>
        </div>
      </section>

      {/* Product Image and Details Section */}
      <section className="productDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="slider-container">
                <Slider {...settings}>
                  {data.productImage?.map((image, index) => (
                    <div key={index} className="d-flex justify-content-end">
                      <img
                        src={`http://localhost:8000/${image}`}
                        style={{ borderRadius: "1rem" }}
                        alt={`Product Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detailSection">
                <h5 className="detailsHeading">{data.productName}</h5>
                <p className="detailPrice">
                  ₹ <span>{price}</span>
                </p>
                <div className="select_weight">
                  {data.Variant?.some(variant => variant?.weight?.sizeweight) && (
                    <>
                      <p>Select Weight :</p>
                      {data.Variant?.map((variant) => (
                        variant?.weight?.sizeweight && (
                          <button
                            key={variant._id}
                            className={`weight_button ${activeWeight === variant?.weight?.sizeweight ? "active" : ""}`}
                            onClick={() => handleWeightSelection(variant?.weight?.sizeweight)}
                          >
                            {variant?.weight?.sizeweight}
                          </button>
                        )
                      ))}
                    </>
                  )}
                </div>


                <div className="calander mt-2">
                  <div>
                    <label htmlFor="deliveryDate">Select Delivery Date</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="deliveryDate"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="withEgg" className="custom-radio">
                      <input
                        type="radio"
                        name="eggOption"
                        id="withEgg"
                        className="me-1"
                      />
                      With Egg
                    </label>
                    <label htmlFor="eggless" className="custom-radio ms-3">
                      <input
                        type="radio"
                        name="eggOption"
                        id="eggless"
                        className="me-1"
                      />
                      Eggless
                    </label>
                  </div>
                </div>

                <div className="productDetail_buttons mt-3">
                  <button className="add_to_cart">
                    <i className="bi bi-cart3"></i> Add To Cart
                  </button>
                  <button className="by_now">
                    <i className="bi bi-lightning-fill"></i> Buy Now
                  </button>
                </div>

                <div className="message">
                  <textarea
                    className="form-control"
                    placeholder="Enter Message Related To Category..."
                  />
                </div>

                <div className="productDescription">
                  <div className="descrip">
                    <b>Description :</b>
                    <hr />
                    <p>{data.productDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="relatedProducts">
        <hr />
        <div className="container">
          <h2 className="mb-0">Related Products</h2>
        </div>
        <AllProducts />
      </section>
    </>
  );
};

export default ProductDetails;
