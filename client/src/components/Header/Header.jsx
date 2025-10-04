import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efficient preloading map
  const preloadMap = {
    home: () => import('../../pages/HomePage'),
    services: () => import('../../pages/ServicesPage'),
    portfolio: () => import('../../pages/PortfolioPage'),
    contact: () => import('../../pages/ContactPage'),
    'lasani-enterprise': () => import('../../CaseStudies/LasaniEnterprise/LasaniEnterpriseCaseStudy')
  };

  const preloadComponent = (componentName) => {
    const preloadFn = preloadMap[componentName];
    if (preloadFn) {
      preloadFn().catch(error => console.warn(`Preload failed for ${componentName}:`, error));
    }
  };

  const handleNavigation = (path, name) => {
    setIsMobileMenuOpen(false);
    preloadComponent(name.toLowerCase().replace(' ', '-'));
  };

  const menuItems = [
    { name: 'Home', path: '/', preloadKey: 'home' },
    { name: 'Services', path: '/services', preloadKey: 'services' },
    { name: 'Portfolio', path: '/portfolio', preloadKey: 'portfolio' },
    { name: 'Contact', path: '/contact', preloadKey: 'contact' }
  ];

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" onClick={() => handleNavigation('/', 'home')}>
            <span style={{
              fontSize: '32px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Wexably
            </span>
          </Link>
        </motion.div>


        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            {menuItems.map((item, index) => (
              <motion.li 
                key={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={item.path}
                  className="nav-link"
                  onMouseEnter={() => preloadComponent(item.preloadKey)}
                  onClick={() => handleNavigation(item.path, item.name)}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.button 
          className="cta-button"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(37, 99, 235, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => preloadComponent('contact')}
        >
          <Link to="/contact" onClick={() => handleNavigation('/contact', 'contact')}>
            Get Started
          </Link>
        </motion.button>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-nav"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ul>
              {menuItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={item.path}
                    onClick={() => handleNavigation(item.path, item.name)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
              >
                <Link 
                  to="/contact" 
                  className="mobile-cta"
                  onClick={() => handleNavigation('/contact', 'contact')}
                >
                  Get Started
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;