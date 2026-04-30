import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="cta-card"
        >
          <span className="cta-script">Step Into Elegance</span>
          <h2 className="cta-title">Begin Your Legacy</h2>
          <button className="cta-explore-link">Explore Now</button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
