import React from 'react';
import { motion } from 'framer-motion';

import './Flagship.css';

const Flagship: React.FC = () => {
  return (
    <section className="flagship">
      <div className="flagship-image-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="flagship-video-bg"
        >
          <source src="/videos/bridal.mp4" type="video/mp4" />
        </video>
        <div className="flagship-overlay">
          <div className="flagship-content">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flagship-script-title"
            >
              The Bridal Heirloom
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flagship-main-title"
            >
              For the Queen <br /> You Become
            </motion.h2>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="btn-primary"
            >
              View Collection
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flagship;
