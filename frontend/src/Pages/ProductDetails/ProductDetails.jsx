import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import productImage from "../../images/cake1.jpg";
import productImage1 from "../../images/cake2.jpg";
import productImage2 from "../../images/cake3.jpg";
import productImage3 from "../../images/cake4.jpg";
import productImage4 from "../../images/cake1.jpg";
import "./productDetails.css";
import AllProducts from "../../Components/AllProducts/AllProducts";

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [activeWeight, setActiveWeight] = useState(null);

  const handleWeightSelection = (weight) => {
    setActiveWeight(weight);
  };

  const settings = {
    customPaging: function (i) {
      const thumbnails = [
        productImage,
        productImage1,
        productImage2,
        productImage3,
        productImage4,
      ];
      return (
        <a>
          <img
            src={thumbnails[i]}
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

  const sliderImages = [
    productImage,
    productImage1,
    productImage2,
    productImage3,
    productImage4,
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <section className="breadCrumb">
        <div className="breadCrumbContent">
          <h1>Product Details</h1>
          <Link to="/">Home /</Link> <Link to="">Product Section Name /</Link>{" "}
          <Link to="">Product Name</Link>
        </div>
      </section>

      {/* Product Image and Details Section */}
      <section className="productDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="slider-container">
                <Slider {...settings}>
                  {sliderImages.map((image, index) => (
                    <div key={index} className="d-flex justify-content-end">
                      <img
                        src={image}
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
                <h5 className="detailsHeading">Lemongrass Dreams Candle</h5>
                <p className="detailPrice">
                  ₹ <span>499</span>
                </p>
                <div className="productDetail_buttons">
                  <button className="add_to_cart">
                    <i className="bi bi-cart3"></i> Add To Cart
                  </button>
                  <button className="by_now">
                    <i className="bi bi-lightning-fill"></i> Buy Now
                  </button>
                </div>
                <div className="calander">
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

                <div className="message">
                  <textarea className="form-control" name="" id="" placeholder="Enter Message Related To Category..." />
                </div>

                <div className="productDescription">
                  <div className="descrip">
                    <b>Description :</b>
                    <hr />
                    <p>
                      Immerse your loved one in a rejuvenating experience with
                      this lemongrass-scented candle. Perfect for the busy bee
                      in your life who deserves a moment of relaxation and
                      serenity.
                    </p>
                  </div>
                  <div className="select_weight">
                    <p>Select Weight :</p>
                    {["1 Kg", "1.5 Kg", "2 Kg", "2.5 Kg", "3 Kg"].map(
                      (weight) => (
                        <button
                          key={weight}
                          className={`weight_button ${
                            activeWeight === weight ? "active" : ""
                          }`}
                          onClick={() => handleWeightSelection(weight)}
                        >
                          {weight}
                        </button>
                      )
                    )}
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
