import React, { useEffect } from 'react';
import './Footer.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Footer = () => {
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
          <Link to="#"><i class="bi bi-arrow-right-short"></i> Cakes</Link>
          <Link to="#"><i class="bi bi-arrow-right-short"></i> Candles</Link>
          <Link to="#"><i class="bi bi-arrow-right-short"></i> Flowers</Link>
          <Link to="#"><i class="bi bi-arrow-right-short"></i> Chocolates</Link>
        </div>
        <div className="footer-section">
          <h3>NEED HELP?</h3>
          <Link to="/contact-us"><i class="bi bi-arrow-right-short"></i> Contact Us</Link>
          <Link to="/frequently-asked-questions"><i class="bi bi-arrow-right-short"></i> FAQs</Link>
        </div>
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <Link to="#"><i class="bi bi-arrow-right-short"></i> Instagram</Link>
          <Link to="#"><i class="bi bi-arrow-right-short"></i> Facebook</Link>
          <Link to="#"><i class="bi bi-arrow-right-short"></i> Pinterest</Link>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p className='mb-0'>© 2024 Cake Bakery | Crafted with <span className="heart">❤️</span> by Your Bakery</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
