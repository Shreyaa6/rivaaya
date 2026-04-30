import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import logo from '../../../assets/images/logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-left desktop-only">
          <div className="nav-links">
            <a href="#collections">The Collections</a>
            <a href="#heritage">The Heritage</a>
          </div>
        </div>

        <div className="nav-center">
          <a href="/" className="brand-link">
            <img src={logo} alt="RIVAAYA" className="brand-logo-img" />
          </a>
        </div>

        <div className="nav-right">
          <div className="nav-links desktop-only">
            <a href="#bespoke">Bespoke</a>
          </div>
          <div className="nav-icons">
            <button className="icon-btn" aria-label="Search">
              <Search size={18} strokeWidth={1} />
            </button>
            <button className="icon-btn" aria-label="Cart">
              <ShoppingBag size={18} strokeWidth={1} />
            </button>
            <button 
              className="icon-btn mobile-only" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</a>
        <a href="#heritage" onClick={() => setIsMobileMenuOpen(false)}>Heritage</a>
        <a href="#bespoke" onClick={() => setIsMobileMenuOpen(false)}>Bespoke</a>
      </div>
    </nav>
  );
};

export default Navbar;
