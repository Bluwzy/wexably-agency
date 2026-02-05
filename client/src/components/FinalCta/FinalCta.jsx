import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FinalCta.css';

const FinalCta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    rootMargin: '-50px 0px -50px 0px'
  });

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
        <h2 className={`section-title fade-in-up ${isInView ? 'visible' : ''}`}>
          Ready to <span className="gradient-text">upgrade</span> your visuals & website?
        </h2>
        
        <p className={`section-subtitle fade-in-up ${isInView ? 'visible' : ''}`}>
          Wexably creates experiences that are beautiful to watch and easy to use, cinematic content and high‑performing sites for modern GTA brands.
        </p>

        <div className={`cta-buttons fade-in-up ${isInView ? 'visible' : ''}`}>
          <Link to="/contact" className="cta-button primary" aria-label="Start Your Project">
            Start a web or media project
          </Link>
          
          <Link to="/portfolio" className="cta-button secondary" aria-label="View Our Work">
            View web & media work
          </Link>
        </div>

        <div className={`cta-guarantee fade-in-up ${isInView ? 'visible' : ''}`}>
          <div className="guarantee-item">
            <div className="guarantee-icon" aria-hidden="true"></div>
            <span>No-obligation 30-minute call</span>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon" aria-hidden="true"></div>
            <span>Quick review of your current site or media</span>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon" aria-hidden="true"></div>
            <span>Clear, fixed-price next steps</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
