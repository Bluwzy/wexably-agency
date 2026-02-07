import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    rootMargin: '-50px 0px -50px 0px'
  });
  const controls = useAnimation();
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: isMobile ? 10 : 30, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: isMobile ? 0.6 : 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="hero performance-optimized" ref={ref}>
      <div className="hero-background" />

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          Premium visuals & high performance websites for modern brands
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
        >
          <span className="gradient-text">Beautiful to watch, Easy to use</span>
        </motion.p>

        <motion.div 
          className="cta-container"
          variants={itemVariants}
        >
          <motion.button 
            className="primary-cta"
            whileHover={{ 
              scale: isMobile ? 1.02 : 1.05,
              boxShadow: '0 10px 30px rgba(37, 99, 235, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: isMobile ? 20 : 17 
            }}
            aria-label="Get Your Free Security Audit"
          >
            <Link to="/contact" className="cta-link">
              <span>Get Your Free Security Audit</span>
              <div className="cta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
            <div className="cta-hover-effect" aria-hidden="true" />
          </motion.button>
          
          <motion.button 
            className="secondary-cta"
            whileHover={{ 
              scale: isMobile ? 1.02 : 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.8)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: isMobile ? 20 : 17 
            }}
          >
            <Link to="/services" className="cta-link">
              <span>See Our Packages</span>
              <div className="arrow-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <div className="scroll-text">Explore</div>
        <div className="scroll-dot" />
      </motion.div>
    </section>
  );
};

export default Hero;
