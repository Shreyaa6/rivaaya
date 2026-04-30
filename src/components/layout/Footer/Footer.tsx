import React from 'react';
import './Footer.css';
import logo from '../../../assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer-minimal">
      <div className="footer-minimal-container">
        <div className="footer-logo-wrap">
          <img src={logo} alt="RIVAAYA" className="footer-logo" />
        </div>

        <nav className="footer-nav-horizontal">
          <a href="#">Bridal</a>
          <a href="#">Festive</a>
          <a href="#">Couture</a>
          <a href="#">Heritage</a>
          <a href="#">Bespoke</a>
        </nav>

        <div className="footer-social-horizontal">
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">Journal</a>
        </div>

        <div className="footer-minimal-bottom">
          <p className="footer-motto">Not made for trends. Made for generations.</p>
          <div className="footer-legal-flex">
            <span>&copy; 2024 Rivaaya</span>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
