import React from 'react';
import { motion } from 'framer-motion';
import './Founders.css';

const Founders: React.FC = () => {
  return (
    <section className="founders-section">
      <div className="founders-container">
        
        <div className="founders-text-column">
          <motion.span 
            className="founders-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            The Visionaries
          </motion.span>
          
          <motion.h2 
            className="founders-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            RIVAAYA by <br/>Manish Kumar & Shreya Narayani
          </motion.h2>

          <motion.div 
            className="founders-narrative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p>
              It began not with a sketch, but with a memory. A shared reverence for the scent of old silk, 
              the rhythmic clatter of the wooden handloom, and the quiet dignity of hands that have woven 
              history for generations. Manish Kumar and Shreya Narayani founded Rivaaya as an act of devotion—a 
              promise to resurrect the forgotten looms of India and elevate them to the pinnacle of global luxury.
            </p>
            <p>
              They saw that true luxury was losing its soul to mass production. In response, Rivaaya was born 
              as a sanctuary for unhurried craftsmanship. Manish’s architectural eye for silhouette and structure, 
              combined with Shreya’s deeply romantic, historically rooted aesthetic, birthed a design language 
              that is at once fiercely modern and achingly nostalgic.
            </p>
            <p>
              "We don't just design garments," says Shreya. "We curate heirlooms. When a woman wears Rivaaya, 
              she is wearing the poetry of a thousand hours of labor, the heritage of a civilization, and a 
              piece of art meant to outlive us all."
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Founders;
