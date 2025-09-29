import React, { useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
  once: true, 
  amount: 0.1, // Reduced from 0.3 to 0.1 for mobile
  rootMargin: '-50px 0px -50px 0px' // Added root margin
});

  const testimonials = useMemo(() => [
    {
      quote: "Wexably didn't just build us a website; they built us a secure booking system that we don't have to worry about. Our leads from the site have increased by 40% and it's always up. For a limo company, that's everything.",
      author: "Michael Chen",
      company: "Owner, Airport Limo Toronto",
      results: "+40% leads from website"
    },
    {
      quote: "I thought our old site was fine until Wexably showed us how vulnerable it was. Their team was professional and now I can honestly tell my customers their data is safe with us. The peace of mind is worth every penny.",
      author: "Sarah Davis",
      company: "Director, Lasani Enterprise",
      results: "100% secure customer data"
    },
    {
      quote: "As a small business owner, I was overwhelmed by tech. Ali made it simple and delivered beyond our expectations.",
      author: "Jennifer L.",
      company: "Mississauga Spa & Wellness",
      results: "3x ROI in first 6 months"
    }
  ], []);

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="section-background">
        <div className="testimonials-grid-overlay"></div>
      </div>
      
      <div className="container">
        <h2 className={`section-title fade-in-up ${isInView ? 'visible' : ''}`}>
          What Our <span className="gradient-text">Clients Say</span>
        </h2>
        
        <p className={`section-subtitle fade-in-up ${isInView ? 'visible' : ''}`}>
          Don't just take our word for it. Here's what our clients have to say about their experience working with us.
        </p>

        <div className={`testimonials-grid stagger-children ${isInView ? 'visible' : ''}`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;