import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hero-text-wrapper"
        >
          <span className="hero-pretitle minimal-text">The Heritage Collection</span>
          <h2 className="hero-title">Timeless <br /> <i>Couture</i></h2>
          <p className="hero-description">
            The pinnacle of Indian craftsmanship.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Explore</button>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
