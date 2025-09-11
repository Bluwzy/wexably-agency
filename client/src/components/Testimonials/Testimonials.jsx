import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      quote: "Wexably transformed our online presence. Our website is not only beautiful but finally generates real leads every week.",
      author: "Sarah K.",
      company: "Toronto Dental Clinic",
      results: "+40% lead conversion rate"
    },
    {
      quote: "The security and speed improvements were noticeable immediately. Our customers feel safe shopping with us now.",
      author: "Michael B.",
      company: "Oakville Roofing Co.",
      results: "2.5x faster load time"
    },
    {
      quote: "As a small business owner, I was overwhelmed by tech. Ali made it simple and delivered beyond our expectations.",
      author: "Jennifer L.",
      company: "Mississauga Spa & Wellness",
      results: "3x ROI in first 6 months"
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
    <section className="testimonials-section" ref={ref}>
      <div className="section-background">
        <div className="testimonials-grid-overlay"></div>
      </div>
      
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          What Our <span className="gradient-text">Clients Say</span>
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Don't just take our word for it. Here's what our clients have to say about their experience working with us.
        </motion.p>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="quote-icon">"</div>
              <div className="testimonial-content">
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.company}</span>
                </div>
                <div className="testimonial-results">
                  {testimonial.results}
                </div>
              </div>
              <div className="card-hover-effect"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;