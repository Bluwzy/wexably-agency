import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './AirportLimoTorontoCaseStudy.module.css';

const AirportLimoTorontoCaseStudy = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.title}
          >
            Airport Limo Toronto: <span className={styles.gradientText}>Premium Transportation WordPress Solution</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Modern WordPress website with booking system for luxury airport transportation services in the GTA
          </motion.p>
          <motion.div 
            className={styles.meta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className={styles.metaItem}>Industry: Luxury Transportation & Airport Services</span>
            <span className={styles.metaItem}>Location: Greater Toronto Area, Ontario</span>
            <span className={styles.metaItem}>Platform: WordPress with Custom Booking System</span>
          </motion.div>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/Airport-Limo.jpg" alt="Airport Limo Toronto Website Preview" />
        </div>
      </section>

      {/* Results Summary */}
      <section className={styles.resultsSummary}>
        <div className={styles.resultsGrid}>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>25%</h3>
            <p>Higher conversion rate</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>25%</h3>
            <p>Reduction in bounce rate</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>25%</h3>
            <p>Faster booking process</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>40%</h3>
            <p>More online bookings</p>
          </motion.div>
        </div>
      </section>

      {/* Client Background */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Client <span className={styles.gradientText}>Background</span>
          </motion.h2>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>Airport Limo Toronto is a premium transportation service provider specializing in airport transfers, corporate travel, and special event transportation throughout the Greater Toronto Area. They needed a modern WordPress website that could:</p>
            <ul>
              <li>Showcase their luxury fleet of vehicles including sedans, SUVs, and stretch limousines</li>
              <li>Implement a seamless online booking system for instant reservations</li>
              <li>Provide real-time flight tracking for pickups</li>
              <li>Offer multilingual support for international clients</li>
              <li>Maintain GTAA (Greater Toronto Airport Authority) compliance</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionContent}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            The <span className={styles.gradientText}>Challenge</span>
          </motion.h2>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>As a premium transportation service operating in a competitive market, Airport Limo Toronto needed a website that could convert visitors into booked clients while handling complex scheduling requirements. Key challenges included:</p>
            <div className={styles.challengeGrid}>
              <div className={styles.challengeCard}>
                <h4>📱 Complex Booking System</h4>
                <p>Creating an intuitive booking flow that handles multiple vehicle types, pricing tiers, and special requests</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>⚡ Real-time Integration</h4>
                <p>Integrating flight tracking APIs to monitor arrival times and adjust pickup schedules automatically</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>🎨 Luxury Brand Presentation</h4>
                <p>Designing a premium experience that reflects their high-end service standards and vehicle quality</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>📱 Mobile-First Experience</h4>
                <p>Ensuring seamless booking and browsing for travelers using mobile devices on-the-go</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Solution */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Our <span className={styles.gradientText}>Solution</span>
          </motion.h2>
          <motion.div 
            className={styles.solutionGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>🚗</div>
              <h4>Custom Booking Engine</h4>
              <p>Developed a sophisticated WordPress booking system with real-time availability, vehicle selection, and instant confirmation</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>✈️</div>
              <h4>Flight Tracking Integration</h4>
              <p>Implemented real-time flight status monitoring to automatically adjust pickup times for arriving passengers</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>💎</div>
              <h4>Luxury WordPress Design</h4>
              <p>Created a premium, mobile-responsive design showcasing their luxury fleet and professional services</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>🛡️</div>
              <h4>Secure Payment System</h4>
              <p>Integrated PCI-compliant payment processing with multiple payment options and encryption</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionContent}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Technical <span className={styles.gradientText}>Implementation</span>
          </motion.h2>
          <motion.div 
            className={styles.techGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.techColumn}>
              <h4>Platform & Stack</h4>
              <ul>
                <li>WordPress CMS</li>
                <li>Custom PHP Theme Development</li>
                <li>MySQL Database</li>
                <li>JavaScript/jQuery</li>
                <li>REST API Integration</li>
              </ul>
            </div>
            <div className={styles.techColumn}>
              <h4>Booking Features</h4>
              <ul>
                <li>Real-time Vehicle Availability</li>
                <li>Flight Status Tracking</li>
                <li>Dynamic Pricing Calculator</li>
                <li>Email & SMS Notifications</li>
                <li>Multi-language Support</li>
              </ul>
            </div>
            <div className={styles.techColumn}>
              <h4>Business Features</h4>
              <ul>
                <li>Service Areas: GTA, Niagara, Southern Ontario</li>
                <li>Vehicle Types: Sedans, SUVs, Limousines</li>
                <li>Special Services: Weddings, Corporate:</li>
                <li>Meet & Greet Service</li>
                <li>Child Safety Seats</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Results & <span className={styles.gradientText}>Impact</span>
          </motion.h2>
          <motion.div 
            className={styles.resultsContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.resultItem}>
              <h4>📈 25% Higher Conversion Rate</h4>
              <p>The intuitive booking process and professional design significantly improved visitor-to-client conversion, with more qualified bookings from serious customers.</p>
            </div>
            <div className={styles.resultItem}>
              <h4>📱 25% Reduced Bounce Rate</h4>
              <p>Improved user experience and mobile optimization kept visitors engaged longer, dramatically reducing bounce rates across all device types.</p>
            </div>
            <div className={styles.resultItem}>
              <h4>⚡ 25% Faster Booking Process</h4>
              <p>Streamlined booking workflow reduced the time required to complete reservations, improving customer satisfaction and reducing abandoned bookings.</p>
            </div>
            <div className={styles.resultItem}>
              <h4>💰 40% More Online Bookings</h4>
              <p>The convenience of online booking and real-time availability led to a significant increase in direct online reservations, reducing phone inquiries.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className={styles.testimonialSection}>
        <div className={styles.sectionContent}>
          <motion.div 
            className={styles.testimonial}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className={styles.quote}>"</div>
            <p className={styles.testimonialText}>
              Wexably transformed our online booking experience with a WordPress website that not only looks premium but handles our complex scheduling needs perfectly. The 25% increase in conversion rate has directly impacted our revenue growth and operational efficiency.
            </p>
            <div className={styles.clientInfo}>
              <h4>Airport Limo Toronto Management</h4>
              <p>Premium Transportation Services</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Ready to Transform Your <span className={styles.gradientText}>Transportation Business</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Let's discuss how we can create a high-converting WordPress website that drives bookings and growth for your business.
          </motion.p>
          <motion.div 
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Link to="/contact" className={styles.primaryButton}>
              Start Your Project
            </Link>
            <Link to="/portfolio" className={styles.secondaryButton}>
              View More Work
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AirportLimoTorontoCaseStudy;