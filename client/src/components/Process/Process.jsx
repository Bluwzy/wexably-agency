import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Process.css';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business goals, target audience, and competitors to build a winning strategy.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Design & Development",
      description: "We create a stunning, fast, and secure website tailored to convert your visitors into customers.",
      icon: "💻"
    },
    {
      number: "03",
      title: "Launch & Grow",
      description: "We deploy your site and implement marketing strategies to drive traffic and generate leads.",
      icon: "🚀"
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
    <section className="process-section" ref={ref}>
      <div className="section-background">
        <div className="process-grid-overlay"></div>
      </div>
      
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Our <span className="gradient-text">3-Step Process</span>
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          From concept to conversion, we make it seamless and stress-free.
        </motion.p>

        <motion.div 
          className="process-steps"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="process-step"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-connector"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;