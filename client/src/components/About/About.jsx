import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const expertise = [
    "Full-Stack Web Development",
    "Cybersecurity & Data Protection",
    "Search Engine Optimization (SEO)",
    "Conversion Rate Optimization",
    "Responsive Design",
    "E-commerce Solutions"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="about-section" ref={ref}>
      <div className="section-background">
        <div className="about-grid-overlay"></div>
      </div>
      
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">
              Your Expert Guide in the <span className="gradient-text">Digital World</span>
            </h2>
            
            <p>
              Hi, I'm Ali. I started Wexably with one simple mission: to provide small businesses with the <strong>same high-quality web development and security</strong> that large corporations enjoy, but at a fraction of the cost.
            </p>
            
            <p>
              With a unique background in both <strong>cybersecurity and development</strong>, I don't just build beautiful websites—I build <strong>secure, fast, and reliable</strong> assets that protect your business and drive growth.
            </p>
            
            <motion.div 
              className="expertise-list"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {expertise.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="expertise-item"
                  variants={itemVariants}
                >
                  <div className="expertise-icon">→</div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="image-container">
              <div className="main-image">
                <div className="image-placeholder">Professional Photo</div>
              </div>
              <div className="floating-element element-1">🚀</div>
              <div className="floating-element element-2">🔒</div>
              <div className="floating-element element-3">⭐</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;