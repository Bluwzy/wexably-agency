import React, { useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';
import './Process.css';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
  once: true, 
  amount: 0.1, // Reduced from 0.3 to 0.1 for mobile
  rootMargin: '-50px 0px -50px 0px' // Added root margin
});

    const steps = useMemo(() => [
      {
        number: "01",
        title: "Discovery & Direction",
        description: "We dig into your brand, audience, and goals to decide what you need in both visuals and web.",
        icon: "🔍"
      },
      {
        number: "02",
        title: "Design, Shoot & Build",
        description: "We create cinematic media and a fast, secure website that feel cohesive and easy to use.",
        icon: "🎥"
      },
      {
        number: "03",
        title: "Launch, Measure & Refine",
        description: "We launch, track performance, and refine your content and site to keep results growing.",
        icon: "🚀"
      }
    ], []);


  return (
    <section className="process-section" ref={ref}>
      <div className="section-background">
        <div className="process-grid-overlay"></div>
      </div>
      
      <div className="container">
        <h2 className={`section-title fade-in-up ${isInView ? 'visible' : ''}`}>
          Our <span className="gradient-text">3-Step Process</span>
        </h2>
        
        <p className={`section-subtitle fade-in-up ${isInView ? 'visible' : ''}`}>
          From concept to conversion, we make it seamless and stress-free.
        </p>

        <div className={`process-steps stagger-children ${isInView ? 'visible' : ''}`}>
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-connector"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;