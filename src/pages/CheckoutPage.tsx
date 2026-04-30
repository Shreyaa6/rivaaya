import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage: React.FC = () => {
  const { cartItems, getCartTotal } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(getCartTotal());

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your Cart is Empty</h2>
        <Link to="/collections" className="checkout-return-btn">Return to Collections</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        
        {/* Left Side: Forms */}
        <div className="checkout-form-section">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="checkout-title">Checkout</h1>
            
            <div className="checkout-section">
              <h2 className="checkout-subtitle">1. Contact Information</h2>
              <div className="form-group">
                <input type="email" placeholder="Email Address *" required className="luxury-input" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" className="luxury-input" />
              </div>
            </div>

            <div className="checkout-section">
              <h2 className="checkout-subtitle">2. Shipping Address</h2>
              <div className="form-row">
                <div className="form-group half">
                  <input type="text" placeholder="First Name *" required className="luxury-input" />
                </div>
                <div className="form-group half">
                  <input type="text" placeholder="Last Name *" required className="luxury-input" />
                </div>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Street Address *" required className="luxury-input" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="luxury-input" />
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <input type="text" placeholder="City *" required className="luxury-input" />
                </div>
                <div className="form-group half">
                  <input type="text" placeholder="Postal Code *" required className="luxury-input" />
                </div>
              </div>
            </div>

            <div className="checkout-section">
              <h2 className="checkout-subtitle">3. Payment Details</h2>
              <div className="payment-placeholder">
                <p>This is a simulated luxury checkout experience.</p>
                <p>In a production environment, a secure Stripe or Razorpay element would load here.</p>
              </div>
            </div>

            <button className="place-order-btn" onClick={(e) => { e.preventDefault(); alert("Order placed successfully! (Simulation)"); }}>
              Complete Secure Purchase
            </button>
            <p className="checkout-disclaimer">By clicking complete, you agree to our bespoke terms and conditions.</p>
          </motion.div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="checkout-summary-section">
          <motion.div 
            className="summary-sticky"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="summary-title">Order Summary</h2>
            
            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-img">
                    <img src={item.image} alt={item.title} />
                    <span className="summary-item-qty">{item.quantity}</span>
                  </div>
                  <div className="summary-item-info">
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formattedTotal}</span>
              </div>
              <div className="summary-row">
                <span>Insured Shipping</span>
                <span>Complimentary</span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>{formattedTotal}</span>
              </div>
            </div>
            
            <div className="summary-perks">
              <p>✓ Custom Measurements Included</p>
              <p>✓ Insured Global Delivery</p>
              <p>✓ Signature Rivaaya Packaging</p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
