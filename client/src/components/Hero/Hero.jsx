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
  
  // State for device optimization
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // REMOVED: Problematic scrollY state that causes vibrations

  // Detect device type and optimize accordingly
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Start animations when in view - NO SCROLL LISTENERS
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Optimized particle count based on device
  const particleCount = isMobile ? 15 : isTablet ? 30 : 40;

  // Smooth container variants without scroll dependencies
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
        delayChildren: isMobile ? 0.1 : 0.3
      }
    }
  };

  // Stable item variants without scroll jitter
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
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // REMOVED: Parallax effects that cause up/down movement

  return (
    <section className="hero performance-optimized" ref={ref}>
      {/* Static background - NO PARALLAX */}
      <div className="hero-background">
        <div className="particles">
          {[...Array(particleCount)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 15 + 15}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Gradient orbs with reduced motion */}
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          {!isMobile && <div className="orb orb-3"></div>}
        </div>
        
        <div className="grid-overlay"></div>
      </div>
      
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
          The Secure Growth Partner for <span className="gradient-text">GTA Businesses</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
        >
          We build fast, secure websites and marketing engines for Toronto-area plumbers, roofers, and dentists—so you can generate leads confidently without worrying about hackers, downtime, or missed opportunities.
        </motion.p>

        <motion.div 
          className="cta-container"
          variants={itemVariants}
        >
          <motion.button 
            className="primary-cta"
            whileHover={{ 
              scale: isMobile ? 1.02 : 1.05,
              boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: isMobile ? 20 : 17 
            }}
            aria-label="Get Your Free Security Audit"
          >
            <Link to="/contact" className="cta-link">
              <span>Get Your Free Security Audit</span>
              <div className="cta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <div className="cta-hover-effect" aria-hidden="true"></div>
          </motion.button>
          
          <motion.button 
            className="secondary-cta"
            whileHover={{ 
              scale: isMobile ? 1.02 : 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.8)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: isMobile ? 20 : 17 
            }}
          >
            <Link to="/services" className="cta-link">
              <span>See Our Packages</span>
              <div className="arrow-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Stable scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        style={{ marginTop: isMobile ? '1rem' : '2rem' }}
      >
        <div className="scroll-text">Explore</div>
        <div className="scroll-line"></div>
      </motion.div>

      {/* Floating elements with stable animations */}
      <div className="floating-elements">
        <div className="floating-element element-1">⚡</div>
        <div className="floating-element element-2">🔒</div>
        {!isMobile && <div className="floating-element element-3">🚀</div>}
      </div>
    </section>
  );
};

export default Hero;