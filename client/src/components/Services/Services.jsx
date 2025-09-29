import React, { useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
  once: true, 
  amount: 0.1, // Reduced from 0.3 to 0.1 for mobile
  rootMargin: '-50px 0px -50px 0px' // Added root margin
});

  const services = useMemo(() => [
    {
      icon: '🛡️',
      title: 'Hacker-Proof Websites',
      description: 'Beyond just great design. We build on secure, modern code with SSL, firewalls, and proactive monitoring to protect your business and customer data from day one.',
      features: ['SSL Encryption', 'Firewall Protection', 'Proactive Monitoring', 'Secure Hosting']
    },
    {
      icon: '📈',
      title: 'Lead-Generation Machines',
      description: 'Websites that work 24/7. Optimized for local SEO and designed to convert visitors into calls, quotes, and bookings for your service business.',
      features: ['Local SEO', 'Conversion Optimization', 'Contact Forms', 'Booking Systems']
    },
    {
      icon: '🔧',
      title: 'Stress-Free Maintenance',
      description: 'Sleep easy knowing your website is always online, always fast, and always secure with our monthly care plans. We handle the tech, you run your business.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Performance Optimization', 'Backups']
    }
  ], []);

  return (
    <section className="services-section" ref={ref}>
      <div className="section-background">
        <div className="services-grid-overlay"></div>
      </div>
      
      <div className="container">
        <h2 className={`section-title fade-in-up ${isInView ? 'visible' : ''}`}>
          How We Drive Your <span className="gradient-text">Digital Growth</span>
        </h2>
        
        <p className={`section-subtitle fade-in-up ${isInView ? 'visible' : ''}`}>
          We combine cutting-edge technology with strategic marketing to deliver exceptional results
        </p>

        <div className={`services-grid stagger-children ${isInView ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;