import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "A RIVAAYA piece is not just an outfit; it's an emotion that stays with you forever. The craftsmanship is breathtaking.",
    author: "Aditi S."
  },
  {
    id: 2,
    quote: "The attention to detail is unparalleled. I felt like absolute royalty walking down the aisle in my bespoke lehenga.",
    author: "Rhea K."
  },
  {
    id: 3,
    quote: "Elegant, timeless, and sophisticated. The perfect blend of heritage artistry and modern runway style.",
    author: "Meera P."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="testimonials-pre-title"
        >
          Kind Words
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="testimonials-main-title"
        >
          Voices of Grace
        </motion.h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="testimonial-card"
          >
            <div className="quote-mark">"</div>
            <p className="testimonial-text">{item.quote}</p>
            <div className="testimonial-divider"></div>
            <span className="testimonial-client">{item.author}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
