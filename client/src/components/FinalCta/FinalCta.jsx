import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FinalCta.css';

const FinalCta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
  once: true, 
  amount: 0.1, // Reduced from 0.3 to 0.1 for mobile
  rootMargin: '-50px 0px -50px 0px' // Added root margin
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
          Ready to <span className="gradient-text">Transform</span> Your Business?
        </h2>
        
        <p className={`section-subtitle fade-in-up ${isInView ? 'visible' : ''}`}>
          Let's build something amazing together. Get in touch today for a free consultation and project estimate.
        </p>

        <div className={`cta-buttons fade-in-up ${isInView ? 'visible' : ''}`}>
          <Link to="/contact" className="cta-button primary" aria-label="Start Your Project">
            Start Your Project
          </Link>
          
          <Link to="/portfolio" className="cta-button secondary" aria-label="View Our Work">
            View Our Work
          </Link>
        </div>

        <div className={`cta-guarantee fade-in-up ${isInView ? 'visible' : ''}`}>
          <div className="guarantee-item">
            <div className="guarantee-icon" aria-hidden="true">✅</div>
            <span>No obligation, 30-minute consultation</span>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon" aria-hidden="true">✅</div>
            <span>Free website audit and competitive analysis</span>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-icon" aria-hidden="true">✅</div>
            <span>Transparent, fixed-price quotes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;