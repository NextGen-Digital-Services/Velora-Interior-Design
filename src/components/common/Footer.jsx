/* FILE: src/components/common/Footer.jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPinterest, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { services } from '../../data/services';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Logo & Socials */}
          <div className="footer-col">
            <h3 className="footer-logo">Velora</h3>
            <p className="footer-tagline">
              Where Vision Meets Elegance. Premium interior designs tailored for residences, corporate offices, and yachts.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" className="footer-social-icon clickable" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://pinterest.com" className="footer-social-icon clickable" aria-label="Pinterest">
                <FaPinterest />
              </a>
              <a href="https://linkedin.com" className="footer-social-icon clickable" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com" className="footer-social-icon clickable" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li className="footer-link-item">
                <Link to="/" className="clickable">Home</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/about" className="clickable">About Us</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/services" className="clickable">Services</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/portfolio" className="clickable">Portfolio</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/process" className="clickable">Our Process</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/testimonials" className="clickable">Testimonials</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/blog" className="clickable">Blog</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/contact" className="clickable">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.id} className="footer-link-item">
                  <Link to="/services" className="clickable">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Details</h4>
            <div className="footer-info">
              <div className="footer-info-item">
                <FaMapMarkerAlt />
                <span>Level 4, prestige corporate towers, Delhi, India</span>
              </div>
              <div className="footer-info-item">
                <FaPhone />
                <a href="tel:+91XXXXXXXXXX" className="clickable">+91-XXXXXXXXXX</a>
              </div>
              <div className="footer-info-item">
                <FaEnvelope />
                <a href="mailto:info@veloradesign.com" className="clickable">info@veloradesign.com</a>
              </div>
              <div className="footer-info-item">
                <FaWhatsapp />
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="clickable"
                >
                  Chat with an Expert
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Velora Interior Design. All rights reserved. Made for luxury spaces.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
