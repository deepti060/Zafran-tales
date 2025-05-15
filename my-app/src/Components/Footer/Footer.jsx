import React from 'react';
import './Footer.css';
import { FaFacebookF, FaBehance, FaInstagram, FaVk, FaMapMarkerAlt, FaPhoneAlt, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col logo-col">
          <h2 className="footer-logo">MOHANTY</h2>
          <p>
            At MOHANTY, we specialize in restaurant consulting, Coca-Cola distribution, and branding solutions that put your business on the map. From modern eateries to branded water bottles—our strategies make your presence unforgettable.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaBehance />
            <FaInstagram />
            <FaVk />
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Link</h3>
          <ul>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Support Policy</li>
            <li>Terms & Conditions</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Recent Post</h3>
          <ul>
            <li>
              <strong>How to open a modern restaurant</strong><br />
              <span>April 20, 2025</span>
            </li>
            <li>
              <strong>Coca-Cola & water branding tips</strong><br />
              <span>March 15, 2025</span>
            </li>
            <li>
              <strong>Boosting brand with bottle strategy</strong><br />
              <span>Jan 2, 2025</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt /> Address: Gouri Market Complex plot No-6/2756 , Nilakantha Nagar , CRP Square , Nayapalli,BHubaneswar-751012
            </li>
            <li>
              <FaPhoneAlt /> Support: +91 9439180180
            </li>
            <li>
              <FaGlobe style={{ marginRight: "8px" }} />
              <a
                href="https://www.mohantytradeventure.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                www.mohantytradeventures.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © All rights reserved by <span>MOHANTY Group</span>
      </div>
    </footer>
  );
};

export default Footer;
