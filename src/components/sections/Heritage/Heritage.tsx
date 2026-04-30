import React from 'react';
import { motion } from 'framer-motion';
import legacyVideo from '../../../assets/legacy.mp4';
import './Heritage.css';

const Heritage: React.FC = () => {
  return (
    <section id="heritage" className="heritage">
      <div className="heritage-container">
        <div className="heritage-content">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="heritage-text"
          >
            <span className="section-script-subtitle">The Craft</span>
            <h2 className="section-title">Woven by Legacy</h2>
            <p>
              In the quiet rhythm of the hand-loom, stories of a thousand years 
              are meticulously woven. Our master artisans breathe life into 
              forgotten techniques, where every thread is an heirloom, 
              and every stitch is a testament to the soul of India.
            </p>
            <button className="link-underline">The Art of Rivaaya</button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="heritage-image"
          >
            <div className="image-wrapper">
              <video 
                src={legacyVideo} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="heritage-video"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
