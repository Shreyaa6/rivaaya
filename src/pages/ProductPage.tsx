import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../components/sections/Collections/Collections';
import { useCart } from '../context/CartContext';
import './ProductPage.css';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');
  const { addToCart } = useCart();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-page-container not-found">
        <h2>Product Not Found</h2>
        <Link to="/collections">Return to Collections</Link>
      </div>
    );
  }

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="product-page-container">
      <div className="product-split-layout">
        
        {/* Left Side: Massive Sticky Image */}
        <div className="product-image-section">
          <motion.div 
            className="main-image-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={product.image} alt={product.title} />
          </motion.div>
        </div>

        {/* Right Side: Product Details */}
        <div className="product-info-section">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="breadcrumbs">
              <Link to="/">Home</Link> / <Link to="/collections">Collections</Link> / {product.category}
            </div>

            <span className="product-detail-category">{product.category}</span>
            <h1 className="product-detail-title">{product.title}</h1>
            <p className="product-detail-price">{product.price}</p>

            <div className="product-actions">
              <button className="btn-primary" onClick={handleAddToCart}>Add to Cart</button>
              <Link to="/checkout" className="btn-secondary" onClick={handleAddToCart} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>Buy It Now</Link>
            </div>

            <div className="product-accordion">
              {/* Accordion Item 1 */}
              <div className="accordion-item">
                <button className="accordion-header" onClick={() => toggleAccordion('details')}>
                  The Details
                  <span className="accordion-icon">{openAccordion === 'details' ? '-' : '+'}</span>
                </button>
                {openAccordion === 'details' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    className="accordion-content"
                  >
                    Meticulously handcrafted by our master artisans over 400 hours. 
                    This piece features pure silk woven with genuine zari, adorned with intricate 
                    zardosi work and semi-precious stone embellishments. A true heritage heirloom.
                  </motion.div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className="accordion-item">
                <button className="accordion-header" onClick={() => toggleAccordion('sizing')}>
                  Sizing & Fit
                  <span className="accordion-icon">{openAccordion === 'sizing' ? '-' : '+'}</span>
                </button>
                {openAccordion === 'sizing' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    className="accordion-content"
                  >
                    Custom tailoring is included. Upon purchase, a style consultant will reach out 
                    to schedule a virtual or in-person measurement session. Standard sizing charts 
                    are also available.
                  </motion.div>
                )}
              </div>

              {/* Accordion Item 3 */}
              <div className="accordion-item">
                <button className="accordion-header" onClick={() => toggleAccordion('shipping')}>
                  Shipping & Returns
                  <span className="accordion-icon">{openAccordion === 'shipping' ? '-' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    className="accordion-content"
                  >
                    Complimentary insured global shipping on all couture orders. 
                    Given the bespoke nature of these garments, all sales are final once measurements 
                    have been confirmed.
                  </motion.div>
                )}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
