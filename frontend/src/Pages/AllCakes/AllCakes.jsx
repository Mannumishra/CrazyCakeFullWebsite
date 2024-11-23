import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./allcakes.css";
import cake1 from "../../images/cake1.jpg";
import cake2 from "../../images/cake2.jpg";
import cake3 from "../../images/cake3.jpg";
import cake4 from "../../images/cake4.jpg";
const AllCakes = () => {
  const [priceOpen, setPriceOpen] = useState(false);
  const [flavourOpen, setFlavourOpen] = useState(false);
  const [cakeTypeOpen, setCakeTypeOpen] = useState(false);
  const [ingredientsOpen, setingredientsOpen] = useState(false);
  const [shapeOpen, setShapeOpen] = useState(false);
  const [weightOpen, setweightOpen] = useState(false);

  const cakesArr = [
    {
      image: cake1,
      title: "Chocolate Truffle Delicious Cake Half Kg",
      price: "599",
    },
    {
      image: cake2,
      title: "Rose Paradise Chocolate Cake Half Kg",
      price: "399",
    },
    {
      image: cake3,
      title: "Fruit Overload Cake Half Kg",
      price: "699",
    },
    {
      image: cake4,
      title: "Chocolate Truffle Delicious Cake Half Kg",
      price: "999",
    },
    {
      image: cake1,
      title: "Chocolate Truffle Delicious Cake Half Kg",
      price: "599",
    },
    {
      image: cake2,
      title: "Rose Paradise Chocolate Cake Half Kg",
      price: "399",
    },
    {
      image: cake3,
      title: "Fruit Overload Cake Half Kg",
      price: "699",
    },
    {
      image: cake4,
      title: "Chocolate Truffle Delicious Cake Half Kg",
      price: "999",
    },
  ];

  return (
    <>
      {/* ----breadCrumb----  */}
      <section className="breadCrumb">
        <div className="breadCrumbContent">
          <h1>Cakes for Every Taste</h1>
          <Link to="/">Home /</Link> <Link to="">Cakes</Link>
        </div>
      </section>
      {/* ----breadCrumb---- end  */}

      <section className="allProducts">
        <div className="mainProducts">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="filter-header">Filters</div>

            {/* Price Filter */}
            <div className="filter-section">
              <div
                className="filter-title"
                onClick={() => setPriceOpen(!priceOpen)}
              >
                Price <span>{priceOpen ? "−" : "+"}</span>
              </div>
              <ul className={`filter-options ${priceOpen ? "open" : ""}`}>
                <li>₹200 - ₹500</li>
                <li>₹500 - ₹1000</li>
                <li>₹1000 - ₹2000</li>
                <li>Above ₹2000</li>
              </ul>
            </div>

            {/* Flavour Filter */}
            <div className="filter-section">
              <div
                className="filter-title"
                onClick={() => setFlavourOpen(!flavourOpen)}
              >
                Flavour <span>{flavourOpen ? "−" : "+"}</span>
              </div>
              <ul className={`filter-options ${flavourOpen ? "open" : ""}`}>
                <li>Chocolate</li>
                <li>Vanilla</li>
                <li>Strawberry</li>
                <li>Red Velvet</li>
              </ul>
            </div>

            {/* Cake Type Filter */}
            <div className="filter-section">
              <div
                className="filter-title"
                onClick={() => setCakeTypeOpen(!cakeTypeOpen)}
              >
                Cake Type <span>{cakeTypeOpen ? "−" : "+"}</span>
              </div>
              <ul className={`filter-options ${cakeTypeOpen ? "open" : ""}`}>
                <li>Birthday Cake</li>
                <li>Wedding Cake</li>
                <li>Anniversary Cake</li>
                <li>Customized Cake</li>
              </ul>
            </div>

            {/* Ingredients Type Filter */}
            <div className="filter-section">
              <div
                className="filter-title"
                onClick={() => setingredientsOpen(!ingredientsOpen)}
              >
                Ingredients <span>{ingredientsOpen ? "−" : "+"}</span>
              </div>
              <ul className={`filter-options ${ingredientsOpen ? "open" : ""}`}>
                <li>With Egg</li>
                <li>Eggless</li>
              </ul>
            </div>
            {/* Shape Type Filter */}
            <div className="filter-section">
              <div
                className="filter-title"
                onClick={() => setShapeOpen(!shapeOpen)}
              >
                Shape <span>{shapeOpen ? "−" : "+"}</span>
              </div>
              <ul className={`filter-options ${shapeOpen ? "open" : ""}`}>
                <li>Round</li>
                <li>Heart</li>
                <li>Other</li>
                <li>Square</li>
              </ul>
            </div>
            {/* Shape Type Filter */}
            <div className="filter-section">
              <div
                className="filter-title"
                onClick={() => setweightOpen(!weightOpen)}
              >
                Weight <span>{weightOpen ? "−" : "+"}</span>
              </div>
              <ul className={`filter-options ${weightOpen ? "open" : ""}`}>
                <li>1/2 Kg</li>
                <li>1 kg</li>
                <li>1.5 Kg</li>
                <li>2 Kg</li>
                <li>3 Kg</li>
                <li>5 Kg</li>
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="allContentSide">
            <h1>All Cakes</h1>
            <div>
              <div className="row">
                {cakesArr.map((item, index) => (
                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <Link to="/all-products/product-details">
                        <img src={item.image} className="w-100" alt="images" />
                        <div className="productDetails">

                        <p className="productTitle">
                        {item.title}
                        </p>
                        <p className="productPrice">Price :  ₹{item.price}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCakes;
