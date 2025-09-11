import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Web Development', path: '/services#web-dev' },
      { name: 'Security Solutions', path: '/services#security' },
      { name: 'SEO Optimization', path: '/services#seo' },
      { name: 'E-commerce', path: '/services#ecommerce' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'Contact', path: '/contact' }
    ],
    connect: [
      { name: 'LinkedIn', path: 'https://linkedin.com', external: true },
      { name: 'Twitter', path: 'https://twitter.com', external: true },
      { name: 'GitHub', path: 'https://github.com', external: true },
      { name: 'Email', path: 'mailto:hello@wexably.com' }
    ]
  };

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
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-grid-overlay"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="footer-brand" variants={itemVariants}>
            <h3>Wexably</h3>
            <p>Transforming businesses through cutting-edge digital solutions and unparalleled security.</p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <span>Twitter</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div className="footer-links" variants={itemVariants}>
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-links" variants={itemVariants}>
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-links" variants={itemVariants}>
            <h4>Connect</h4>
            <ul>
              {footerLinks.connect.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p>© {currentYear} Wexably. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;