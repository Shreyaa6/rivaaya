import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Collections.css';

export type Category = 'All' | 'Bridal' | 'Festive' | 'Couture' | 'Pret';

export const products = [
  {
    id: 1,
    title: "Velvet Heirloom Lehenga",
    price: "₹ 4,50,000",
    category: "Bridal",
    image: "https://i.pinimg.com/1200x/27/24/33/272433962c88ab2063242827ed4ce579.jpg",
  },
  {
    id: 2,
    title: "Golden Petal Ensemble",
    price: "₹ 2,25,000",
    category: "Festive",
    image: "https://i.pinimg.com/1200x/4e/e9/b6/4ee9b6282aba474de3402ab2784697fd.jpg",
  },
  {
    id: 3,
    title: "Vintage Silk Saree",
    price: "₹ 1,80,000",
    category: "Couture",
    image: "https://i.pinimg.com/1200x/c0/f0/88/c0f088fe33dbdaa8dd30797bbd3f5f39.jpg",
  },
  {
    id: 4,
    title: "Royal Zardosi Sherwani",
    price: "₹ 3,20,000",
    category: "Couture",
    image: "https://i.pinimg.com/1200x/8a/43/59/8a435906a00e50b2cdba16befd6183f8.jpg",
  },
  {
    id: 5,
    title: "Crimson Silk Anarkali",
    price: "₹ 2,85,000",
    category: "Bridal",
    image: "https://i.pinimg.com/1200x/b1/d7/27/b1d727c8ae8ac42ac19a513fe0a3fcd6.jpg",
  },
  {
    id: 6,
    title: "Ivory Noor Saree",
    price: "₹ 1,45,000",
    category: "Festive",
    image: "https://i.pinimg.com/1200x/78/19/df/7819dfe4652f68e127b2999ef13d67f2.jpg",
  },
  {
    id: 7,
    title: "Midnight Bloom Kurta",
    price: "₹ 85,000",
    category: "Pret",
    image: "https://i.pinimg.com/1200x/dc/06/f1/dc06f1cf5b8f41b95179419018f1debf.jpg",
  },
  {
    id: 8,
    title: "Emerald Silk Drape",
    price: "₹ 1,10,000",
    category: "Pret",
    image: "https://i.pinimg.com/1200x/e0/6b/2c/e06b2c31bde072044b57089cc4412198.jpg",
  }
];

const categories: Category[] = ['All', 'Bridal', 'Festive', 'Couture', 'Pret'];

const Collections: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProducts = products.filter(product => 
    activeCategory === 'All' ? true : product.category === activeCategory
  );

  return (
    <section id="collections" className="collections">
      <div className="collections-header">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="collections-pre-title"
        >
          The Boutique
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="collections-main-title"
        >
          Curated For You
        </motion.h2>

        {/* Interactive Filter Bar */}
        <motion.div 
          className="collections-filter-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="store-grid">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              key={product.id}
              className="product-card"
            >
              <Link to={`/product/${product.id}`} className="product-link-wrapper">
                <div className="product-image-container">
                  <img src={product.image} alt={product.title} />
                  
                  {/* Shopping Actions Overlay */}
                  <div className="product-overlay">
                    <div className="shopping-actions">
                      <button className="action-btn add-cart-btn" onClick={(e) => { e.preventDefault(); alert('Added to Cart'); }}>Add to Cart</button>
                      <button className="action-btn buy-now-btn" onClick={(e) => { e.preventDefault(); alert('Proceeding to Checkout'); }}>Buy Now</button>
                    </div>
                  </div>
                </div>
                
                <div className="product-details">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">{product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Collections;
