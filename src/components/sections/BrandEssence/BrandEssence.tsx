import React from 'react';
import { motion } from 'framer-motion';
import './BrandEssence.css';

const BrandEssence: React.FC = () => {
  return (
    <section className="brand-essence">
      <div className="essence-content">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="essence-script"
        >
          Not made for trends.
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="essence-title"
        >
          Made for generations.
        </motion.h2>
      </div>
    </section>
  );
};

export default BrandEssence;
