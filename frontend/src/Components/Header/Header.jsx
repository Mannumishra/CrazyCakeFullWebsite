import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div>
      <header className="custom-navbar navbar navbar-expand-lg navbar-light py-2">
        <div className="container-fluid">
          <div className="navbar-container">
            <div className="logo-container">
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <h1 style={{ fontFamily: "var(--font-family-design)", color: "var(--color-pink)" }}>Cake Crazzy</h1>
              </Link>
            </div>

            <div className="search-container">
              <form action="">
                <div className="d-flex">
                  <input
                    className="form-control searchInput"
                    type="search"
                    placeholder="Search"
                  />
                  <button className="searchBtn">Search</button>
                </div>
              </form>
            </div>

            {/* Cart & Login */}
            <div className="cart-login-container">
              <Link to="/cart">
                <i className="bi bi-bag"></i>
              </Link>
              <span className="mx-2">|</span>
              <Link to="/login" className="me-2">
                <i className="bi bi-person-fill"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="navbar position-sticky navbar-expand-lg navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/all-products">All Products</Link>
              </li>

              {/* Cake Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#cake"
                  id="cakeDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Cake
                </Link>
                <ul className="dropdown-menu" aria-labelledby="cakeDropdown">
                  <li><Link className="dropdown-item" to="/cake/all-cake">All Cake</Link></li>
                  <li><Link className="dropdown-item" to="#birthday-cake">Birthday Cake</Link></li>
                  <li><Link className="dropdown-item" to="#wedding-cake">Wedding Cake</Link></li>
                  <li><Link className="dropdown-item" to="#custom-cake">Custom Cake</Link></li>
                </ul>
              </li>

              {/* Candle Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#candle"
                  id="candleDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Candle
                </Link>
                <ul className="dropdown-menu" aria-labelledby="candleDropdown">
                  <li><Link className="dropdown-item" to="/candle/all-candles">All Candles</Link></li>
                  <li><Link className="dropdown-item" to="#scented-candle">Scented Candle</Link></li>
                  <li><Link className="dropdown-item" to="#pillar-candle">Pillar Candle</Link></li>
                  <li><Link className="dropdown-item" to="#tea-light-candle">Tea Light Candle</Link></li>
                </ul>
              </li>

              {/* Flowers Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#flowers"
                  id="flowersDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Flowers
                </Link>
                <ul className="dropdown-menu" aria-labelledby="flowersDropdown">
                  <li><Link className="dropdown-item" to="#roses">Roses</Link></li>
                  <li><Link className="dropdown-item" to="#tulips">Tulips</Link></li>
                  <li><Link className="dropdown-item" to="#lilies">Lilies</Link></li>
                </ul>
              </li>

              {/* Chocolate Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#chocolate"
                  id="chocolateDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Chocolate
                </Link>
                <ul className="dropdown-menu" aria-labelledby="chocolateDropdown">
                  <li><Link className="dropdown-item" to="#dark-chocolate">Dark Chocolate</Link></li>
                  <li><Link className="dropdown-item" to="#milk-chocolate">Milk Chocolate</Link></li>
                  <li><Link className="dropdown-item" to="#white-chocolate">White Chocolate</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
