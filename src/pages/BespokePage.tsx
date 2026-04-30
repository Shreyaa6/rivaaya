import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './BespokePage.css';

const BespokePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bespoke-page">
      <div className="bespoke-container">
        
        {/* Left Side: Imagery & Vibe */}
        <div className="bespoke-image-section">
          <motion.div 
            className="bespoke-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1583939411023-14783179e581?q=80&w=2000&auto=format&fit=crop" 
              alt="Rivaaya Bespoke Bridal" 
            />
          </motion.div>
        </div>

        {/* Right Side: The Inquiry Form */}
        <div className="bespoke-form-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bespoke-form-content"
          >
            <span className="bespoke-subtitle">The Atelier</span>
            <h1 className="bespoke-title">Bespoke Couture</h1>
            <p className="bespoke-description">
              Every masterpiece begins with a conversation. We invite you to commission a custom Rivaaya 
              heirloom tailored exclusively to your measurements and vision. 
            </p>

            <form className="luxury-form" onSubmit={(e) => { e.preventDefault(); alert("Inquiry Sent. A stylist will contact you within 24 hours."); }}>
              <div className="form-group">
                <input type="text" placeholder="Full Name" required className="luxury-input" />
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <input type="email" placeholder="Email Address" required className="luxury-input" />
                </div>
                <div className="form-group half">
                  <input type="tel" placeholder="Phone Number" className="luxury-input" />
                </div>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Date of the Event (DD/MM/YYYY)" className="luxury-input" />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Tell us about your dream vision, the occasion, and any specific embroidery styles or colors you desire..." 
                  rows={6} 
                  required 
                  className="luxury-input textarea"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Request Private Consultation</button>
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default BespokePage;
