import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import logo from '../../../assets/images/logo.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems, toggleCart } = useCart();

  const isInnerPage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isInnerPage ? 'inner-page' : ''}`}>
      <div className="navbar-container">
        <div className="nav-left desktop-only">
          <div className="nav-links">
            <Link to="/collections">The Collections</Link>
            <Link to="/heritage">The Heritage</Link>
          </div>
        </div>

        <div className="nav-center">
          <Link to="/" className="brand-link">
            <img src={logo} alt="RIVAAYA" className="brand-logo-img" />
          </Link>
        </div>

        <div className="nav-right">
          <div className="nav-links desktop-only">
            <Link to="/bespoke">Bespoke</Link>
          </div>
          <div className="nav-icons">
            <button className="icon-btn" aria-label="Search">
              <Search size={18} strokeWidth={1} />
            </button>
            <button className="icon-btn cart-btn" aria-label="Cart" onClick={toggleCart}>
              <ShoppingBag size={18} strokeWidth={1} />
              {totalCartItems > 0 && <span className="cart-badge">{totalCartItems}</span>}
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
        <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
        <Link to="/heritage" onClick={() => setIsMobileMenuOpen(false)}>Heritage</Link>
        <Link to="/bespoke" onClick={() => setIsMobileMenuOpen(false)}>Bespoke</Link>
      </div>
    </nav>
  );
};

export default Navbar;
