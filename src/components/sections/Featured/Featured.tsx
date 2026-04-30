import React from 'react';
import { motion } from 'framer-motion';
import './Featured.css';

const featuredItems = [
  {
    id: 1,
    name: "The Velvet Heirloom",
    price: "Bridal Couture",
    image: "https://i.pinimg.com/1200x/27/24/33/272433962c88ab2063242827ed4ce579.jpg",
  },
  {
    id: 2,
    name: "Golden Petal Lehanga",
    price: "Festive Edit",
    image: "https://i.pinimg.com/webp85/1200x/4e/e9/b6/4ee9b6282aba474de3402ab2784697fd.webp",
  },
  {
    id: 3,
    name: "Vintage Silk Sherwani",
    price: "Menswear",
    image: "https://i.pinimg.com/webp85/1200x/c0/f0/88/c0f088fe33dbdaa8dd30797bbd3f5f39.webp",
  },
  {
    id: 4,
    name: "Zardozi Masterpiece",
    price: "Bespoke Details",
    image: "https://i.pinimg.com/1200x/8a/43/59/8a435906a00e50b2cdba16befd6183f8.jpg",
  },
  {
    id: 5,
    name: "Crimson Silk Anarkali",
    price: "Heritage Collection",
    image: "https://i.pinimg.com/1200x/b1/d7/27/b1d727c8ae8ac42ac19a513fe0a3fcd6.jpg",
  },
  {
    id: 6,
    name: "Ivory Noor Sari",
    price: "Classic Whites",
    image: "https://i.pinimg.com/736x/78/19/df/7819dfe4652f68e127b2999ef13d67f2.jpg",
  }
];

const Featured: React.FC = () => {
  return (
    <section className="featured">
      <div className="featured-header-centered">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="featured-pre-title"
        >
          Curated For You
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="featured-main-title"
        >
          FEATURED CREATIONS
        </motion.h2>
      </div>

      <div className="featured-grid-3x2">
        {featuredItems.map((item, index) => (
          <motion.a 
            href={`#product-${item.id}`}
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="featured-item-card"
          >
            <div className="featured-item-image">
              <img src={item.image} alt={item.name} />
              <div className="featured-item-overlay">
                <span className="explore-text">Explore</span>
              </div>
            </div>
            <div className="featured-item-info">
              <h3 className="featured-item-name">{item.name}</h3>
              <p className="featured-item-price">{item.price}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Featured;
