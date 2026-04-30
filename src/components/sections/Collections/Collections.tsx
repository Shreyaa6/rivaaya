import React from 'react';
import { motion } from 'framer-motion';
import './Collections.css';

const collectionItems = [
  {
    id: 1,
    title: "SHOP BRIDAL",
    image: "https://i.pinimg.com/1200x/ee/9e/54/ee9e5428f327de61eb9d6e0b341f961f.jpg",
  },
  {
    id: 2,
    title: "SHOP FESTIVE",
    image: "https://i.pinimg.com/736x/dc/06/f1/dc06f1cf5b8f41b95179419018f1debf.jpg",
  },
  {
    id: 3,
    title: "SHOP COUTURE",
    image: "https://i.pinimg.com/1200x/e0/6b/2c/e06b2c31bde072044b57089cc4412198.jpg",
  }
];

const Collections: React.FC = () => {
  return (
    <section id="collections" className="collections">
      <div className="collections-header-reference">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ref-pre-title"
        >
          THE
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="ref-main-title"
        >
          SIGNATURE COLLECTIONS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="ref-description"
        >
          We've curated a selection of our finest heritage designs to celebrate your journey. 'Tis the season to indulge, from hand-embroidered silks to the perfect bespoke heirlooms, it's time to celebrate it real good.
        </motion.p>
      </div>

      <div className="collections-grid-reference">
        {collectionItems.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="ref-collection-card"
          >
            <div className="ref-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="ref-card-info">
              <div className="ref-card-line"></div>
              <h3 className="ref-card-title">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
