import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: '⚡',
      title: 'Lightning Fast Websites',
      description: 'We build performant websites with blazing fast load times that reduce bounce rates and improve conversions.',
      features: ['Next.js Optimization', 'CDN Integration', 'Image Optimization', 'Lazy Loading']
    },
    {
      icon: '🛡️',
      title: 'Enterprise-Grade Security',
      description: 'Protect your business and customer data with comprehensive security solutions and best practices.',
      features: ['SSL Encryption', 'DDoS Protection', 'Regular Audits', 'Secure Authentication']
    },
    {
      icon: '📈',
      title: 'Data-Driven Marketing',
      description: 'Advanced analytics and SEO strategies to maximize your online visibility and conversion rates.',
      features: ['SEO Optimization', 'Conversion Tracking', 'A/B Testing', 'Performance Analytics']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="services-section" ref={ref}>
      <div className="section-background">
        <div className="services-grid-overlay"></div>
      </div>
      
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          How We Drive Your <span className="gradient-text">Digital Growth</span>
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We combine cutting-edge technology with strategic marketing to deliver exceptional results
        </motion.p>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
                <div className="icon-glow"></div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              
              <div className="service-cta">
                <Link to="/services" className="service-link">
                  <span>Learn more</span>
                  <div className="arrow-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              </div>
              
              <div className="card-hover-effect"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;