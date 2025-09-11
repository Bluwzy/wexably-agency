import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './FinalCta.css';

const FinalCta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="final-cta-section" ref={ref}>
      <div className="section-background">
        <div className="cta-grid-overlay"></div>
        <div className="cta-gradient-orbs">
          <div className="cta-orb cta-orb-1"></div>
          <div className="cta-orb cta-orb-2"></div>
        </div>
      </div>
      
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Ready to <span className="gradient-text">Transform</span> Your Business?
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Let's build something amazing together. Get in touch today for a free consultation and project estimate.
        </motion.p>

        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.a 
            href="/contact" 
            className="cta-button primary"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Start Your Project
          </motion.a>
          
          <motion.a 
            href="/portfolio" 
            className="cta-button secondary"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.8)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View Our Work
          </motion.a>
        </motion.div>

        <motion.div 
          className="cta-guarantee"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="guarantee-item">
            <div className="guarantee-icon">✅</div>
            <span>No obligation, 30-minute consultation</span>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon">✅</div>
            <span>Free website audit and competitive analysis</span>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon">✅</div>
            <span>Transparent, fixed-price quotes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;