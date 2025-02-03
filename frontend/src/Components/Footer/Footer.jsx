import React, { useEffect, useState } from 'react';
import './Footer.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    axios.get("https://api.cakecrazzy.com/api/get-category-with-subcategory")
      .then((response) => {
        setCategories(response.data); // Set categories from API response
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(()=>{
    window.scrollTo({
      top:'0',
      behavior:'smooth'
    },[])
  })
  return (
    <footer className="footer">
      <div className="Footeroverlay">
      <div className="footer-content container-fluid">
        <div className="footer-section">
          <h3>POLICY INFO</h3>
          <Link to="/terms-&-conditions"><i class="bi bi-arrow-right-short"></i> Terms & Conditions</Link>
          <Link to="/privacy-policy"><i class="bi bi-arrow-right-short"></i> Privacy Policy</Link>
        </div>
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <Link to="/about-us"><i class="bi bi-arrow-right-short"></i> Our Story</Link>
          <Link to="/frequently-asked-questions"><i class="bi bi-arrow-right-short"></i> FAQs</Link>
        </div>
        <div className="footer-section">
      <h3>OUR BAKERY</h3>
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <Link key={index} to={`/category/${category.slug}`}>
            <i className="bi bi-arrow-right-short"></i> {category.name}
          </Link>
        ))
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
        <div className="footer-section">
          <h3>NEED HELP?</h3>
          <Link to="/contact-us"><i class="bi bi-arrow-right-short"></i> Contact Us</Link>
          <Link to="/frequently-asked-questions"><i class="bi bi-arrow-right-short"></i> FAQs</Link>
        </div>
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <Link to="https://www.instagram.com/p/DCTnSTiPzrp/?igsh=MTA1YXpubGVlOXhjZg==" target='_blank'><i class="bi bi-arrow-right-short"></i> Instagram</Link>
          <Link to="https://wa.me/919508080807" target='_blank'><i class="bi bi-arrow-right-short"></i> Whatsapp</Link>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p className='mb-0'>© 2024 Cake Bakery | Crafted with by  <a href='https://www.digiindiasolutions.com' className="heart">Digi India Solution</a></p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
