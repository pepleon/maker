import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Makerble</h3>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy & Cookies</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>ORGANISATIONS</h3>
        <ul>
          <li><a href="#">Control Panel</a></li>
          <li><a href="#">Discover the Marketplace</a></li>
          <li><a href="#">Create Organisation Account</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>YOUR ACCOUNT</h3>
        <ul>
          <li><a href="#">Library</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>EXPLORE</h3>
        <ul>
          <li><a href="#">Metrics</a></li>
          <li><a href="#">Networks</a></li>
          <li><a href="#">Strategies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Studies</a></li>
          <li><a href="#">Surveys</a></li>
          <li><a href="#">Tips</a></li>
          <li><a href="#">Vouchers</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow the Makerble Story</h3>
        <div className="social-icons">
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="YouTube" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="contact-info">
          <p>Email: contact@makerble.com</p>
          <p>Phone: 020 8123 6253</p>
        </div>
        <p className="copyright">© Makerble 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
