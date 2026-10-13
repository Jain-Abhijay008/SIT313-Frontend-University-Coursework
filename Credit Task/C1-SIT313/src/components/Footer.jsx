import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="footer">
      <Newsletter />
      <div className="footer-main">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#questions">Questions</a></li>
              <li><a href="#articles">Articles</a></li>
              <li><a href="#tutorials">Tutorials</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#help">Help</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Stay connected</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook className="social-icon" size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter className="social-icon" size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram className="social-icon" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            DEV@Deakin 2026
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
            <a href="#code-of-conduct">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
