import React, { useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    rootMargin: '-50px 0px -50px 0px'
  });

  const services = useMemo(() => [
    {
      icon: '🎥',
      title: 'Content & Media Production',
      description:
        'Cinematic visuals for food, events, and brands. High-impact video and photography that stops the scroll and drives engagement.',
      features: ['Food & product photography', 'Event & brand video', 'Social content creation', 'Reels & promo edits']
    },
    {
      icon: '✨',
      title: 'Web Design & Development',
      description:
        'Beautiful, fast websites built to convert. From portfolios to full e-commerce, we design and code sites that work as hard as they look.',
      features: ['Custom responsive design', 'E-commerce & booking systems', 'SEO & performance optimization', 'Secure hosting & SSL']
    },
    {
      icon: '🚀',
      title: 'Growth & Maintenance',
      description:
        'Ongoing support to keep your site fast, secure, and your content fresh. We handle updates so you can focus on your business.',
      features: ['Monthly content updates', 'Security & performance monitoring', 'Analytics & optimization', 'Priority support']
    }
  ], []);

  return (
    <section className="services-section" ref={ref}>
      <div className="section-background">
        <div className="services-grid-overlay"></div>
      </div>
      
      <div className="container">
        <h2 className={`section-title fade-in-up ${isInView ? 'visible' : ''}`}>
          Premium Visuals & <span className="gradient-text">High-Performance Sites</span>
        </h2>
        
        <p className={`section-subtitle fade-in-up ${isInView ? 'visible' : ''}`}>
          We create content that captivates and websites that convert—built for GTA brands ready to stand out.
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
