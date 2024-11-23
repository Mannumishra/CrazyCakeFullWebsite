import React, { useEffect } from "react";
import "./allproducts.css";
import Slider from "react-slick";

// Cake images
import cake1 from "../../images/cake1.jpg";
import cake2 from "../../images/cake2.jpg";
import cake3 from "../../images/cake3.jpg";
import cake4 from "../../images/cake4.jpg";

// Candle images
import candle1 from '../../images/candles/candle1.jpg';
import candle2 from '../../images/candles/candle2.jpg';
import candle3 from '../../images/candles/candle3.jpg';
import candle4 from '../../images/candles/candle4.jpg';
import candle5 from '../../images/candles/candle5.jpg';
import candle6 from '../../images/candles/candle6.jpg';

// Chocolate images
import chocolate1 from '../../images/chocolate/chocolate1.jpg';
import chocolate2 from '../../images/chocolate/chocolate2.jpg';
import chocolate3 from '../../images/chocolate/chocolate3.jpg';
import chocolate4 from '../../images/chocolate/chocolate4.jpg';
import chocolate5 from '../../images/chocolate/chocolate5.jpg';
import chocolate6 from '../../images/chocolate/chocolate6.jpg';

// Flower images
import flower1 from '../../images/flowers/flower1.webp';
import flower2 from '../../images/flowers/flower2.jpg';
import flower3 from '../../images/flowers/flower3.webp';
import flower4 from '../../images/flowers/flower4.webp';
import flower5 from '../../images/flowers/flower5.webp';
import flower6 from '../../images/flowers/flower6.webp';

import { Link } from "react-router-dom";

const AllProducts = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const cake = [
    { title: "Cake 1", description: "Crafted to perfection to make your special day unforgettable.", imageUrl: cake1, buttonLabel: "Order Now" },
    { title: "Cake 2", description: "Fulfill your chocolate indulgence, try our delicious brownies.", imageUrl: cake2, buttonLabel: "Order Now" },
    { title: "Cake 3", description: "Crafted to perfection to make your special day unforgettable.", imageUrl: cake3, buttonLabel: "Order Now" },
    { title: "Cake 4", description: "Fulfill your chocolate indulgence, try our delicious brownies.", imageUrl: cake4, buttonLabel: "Order Now" }
  ];

  const candles = [
    { title: "Candle 1", description: "Crafted to perfection to make your special day unforgettable.", imageUrl: candle1, buttonLabel: "Order Now" },
    { title: "Candle 2", description: "Fulfill your chocolate indulgence, try our delicious brownies.", imageUrl: candle2, buttonLabel: "Order Now" },
    { title: "Candle 3", description: "Crafted to perfection to make your special day unforgettable.", imageUrl: candle3, buttonLabel: "Order Now" },
    { title: "Candle 4", description: "Fulfill your chocolate indulgence, try our delicious brownies.", imageUrl: candle4, buttonLabel: "Order Now" },
    { title: "Candle 5", description: "Fulfill your chocolate indulgence, try our delicious brownies.", imageUrl: candle5, buttonLabel: "Order Now" },
    { title: "Candle 6", description: "Fulfill your chocolate indulgence, try our delicious brownies.", imageUrl: candle6, buttonLabel: "Order Now" }
  ];

  const chocolate = [
    { title: "Chocolate 1", description: "Crafted to perfection to make your special day unforgettable.", imageUrl: chocolate1, buttonLabel: "Order Now" },
    { title: "Chocolate 2", description: "Fulfill your chocolate indulgence, try our delicious brownies.", imageUrl: chocolate2, buttonLabel: "Order Now" },
    { title: "Chocolate 3", description: "Crafted to perfection to make your special day unforgettable.", imageUrl: chocolate3, buttonLabel: "Order Now" },
    { title: "Chocolate 4", description: "Fulfill your chocolate indulgence, try our delicious brownies.", imageUrl: chocolate4, buttonLabel: "Order Now" },
    { title: "Chocolate 5", description: "Fulfill your chocolate indulgence, try our delicious brownies.", imageUrl: chocolate5, buttonLabel: "Order Now" },
    { title: "Chocolate 6", description: "Fulfill your chocolate indulgence, try our delicious brownies.", imageUrl: chocolate6, buttonLabel: "Order Now" }
  ];

  const flowers = [
    { title: "Flower 1", description: "Crafted to perfection to make your special day unforgettable.", imageUrl: flower1, buttonLabel: "Order Now" },
    { title: "Flower 2", description: "Fulfill your floral indulgence, try our beautiful flowers.", imageUrl: flower2, buttonLabel: "Order Now" },
    { title: "Flower 3", description: "Crafted to perfection to make your special day unforgettable.", imageUrl: flower3, buttonLabel: "Order Now" },
    { title: "Flower 4", description: "Fulfill your floral indulgence, try our beautiful flowers.", imageUrl: flower4, buttonLabel: "Order Now" },
    { title: "Flower 5", description: "Fulfill your floral indulgence, try our beautiful flowers.", imageUrl: flower5, buttonLabel: "Order Now" },
    { title: "Flower 6", description: "Fulfill your floral indulgence, try our beautiful flowers.", imageUrl: flower6, buttonLabel: "Order Now" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
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
        <div className="featured-menu">
          <h2 className="featured-menu-title">Cake Crazy</h2>
          <Slider {...settings}>
            {cake.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={product.imageUrl} alt={product.title} loading="lazy" />
                </div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <Link to={'/all-products/product-details'} className="order-button">{product.buttonLabel}</Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Candle Section */}
      <div className="allproducts">
        <div className="featured-menu">
          <h2 className="featured-menu-title">Candle Collection</h2>
          <Slider {...settings}>
            {candles.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={product.imageUrl} alt={product.title} loading="lazy" />
                </div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <Link to={'/all-products/product-details'} className="order-button">{product.buttonLabel}</Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Chocolate Section */}
      <div className="allproducts">
        <div className="featured-menu">
          <h2 className="featured-menu-title">Chocolate Lovers</h2>
          <Slider {...settings}>
            {chocolate.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={product.imageUrl} alt={product.title} loading="lazy" />
                </div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <Link to={'/all-products/product-details'} className="order-button">{product.buttonLabel}</Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Flower Section */}
      <div className="allproducts">
        <div className="featured-menu">
          <h2 className="featured-menu-title">Flower Blooms</h2>
          <Slider {...settings}>
            {flowers.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={product.imageUrl} alt={product.title} loading="lazy" />
                </div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <Link to={'/all-products/product-details'} className="order-button">{product.buttonLabel}</Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
