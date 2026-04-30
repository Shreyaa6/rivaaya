import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Heritage from '../components/sections/Heritage/Heritage';
import Founders from '../components/sections/Founders/Founders';
import './HeritagePage.css';

const HeritagePage: React.FC = () => {
  // Ensure the page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-heritage">
      {/* Cinematic Banner */}
      <div className="heritage-banner">
        <div className="heritage-banner-overlay"></div>
        <div className="heritage-banner-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The Legacy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A century of craftsmanship, woven into every thread.
          </motion.p>
        </div>
      </div>

      {/* The Founders Story */}
      <Founders />

      {/* The Craft Details */}
      <Heritage />
    </div>
  );
};

export default HeritagePage;
