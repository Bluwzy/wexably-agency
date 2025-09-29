import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './LasaniEnterpriseCaseStudy.module.css';

const LasaniEnterpriseCaseStudy = () => {
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
            Lasani Enterprises: <span className={styles.gradientText}>Global Export Solutions</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Secure WordPress website for international trade and distribution company serving Middle East and South Asia
          </motion.p>
          <motion.div 
            className={styles.meta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className={styles.metaItem}>Industry: International Trade & Distribution</span>
            <span className={styles.metaItem}>Location: Karachi, Pakistan & Oakville, Canada</span>
            <span className={styles.metaItem}>Platform: WordPress</span>
          </motion.div>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/lasani-hero.jpg" alt="Lasani Enterprises Website Preview" />
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
            <h3>40%</h3>
            <p>Increase in qualified leads</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>35%</h3>
            <p>Faster load times</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>100%</h3>
            <p>Security compliance</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>25%</h3>
            <p>Reduced bounce rate</p>
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
            <p>Lasani Enterprises Pak Ltd is a established international trade and distribution company with over 18 years of experience connecting global manufacturers with consumers in the Middle East and South Asia. They needed a modern, secure website that could:</p>
            <ul>
              <li>Showcase their diverse product range and services</li>
              <li>Establish credibility with international clients</li>
              <li>Handle sensitive business inquiries securely</li>
              <li>Provide multilingual support capabilities</li>
              <li>Maintain compliance with international trade regulations</li>
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
            <p>As an international trade company dealing with sensitive business information and high-value transactions, Lasani Enterprises needed a website that prioritized security without compromising on user experience. Key challenges included:</p>
            <div className={styles.challengeGrid}>
              <div className={styles.challengeCard}>
                <h4>🌐 Global Security Standards</h4>
                <p>Meeting international compliance requirements for data protection and privacy</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>⚡ Performance Optimization</h4>
                <p>Ensuring fast load times for international visitors across different regions</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>🛡️ Vulnerability Protection</h4>
                <p>Protecting against potential security threats targeting international trade businesses</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>📱 Responsive Design</h4>
                <p>Creating a seamless experience across devices for global clients</p>
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
              <div className={styles.solutionIcon}>🛡️</div>
              <h4>Enterprise-Grade Security</h4>
              <p>Implemented SSL encryption, firewall protection, and regular security audits to protect sensitive business data and client information</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>⚡</div>
              <h4>Performance Optimization</h4>
              <p>Optimized images, implemented caching, and used CDN services to ensure fast loading times for international visitors</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>📱</div>
              <h4>Responsive WordPress Design</h4>
              <p>Created a mobile-first design that works seamlessly across all devices, ensuring accessibility for global clients</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>🌐</div>
              <h4>Multilingual Ready</h4>
              <p>Built with multilingual support capabilities to serve their diverse international client base</p>
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
                <li>Custom Theme Development</li>
                <li>PHP 7.4+</li>
                <li>MySQL Database</li>
                <li>HTML5/CSS3/JavaScript</li>
              </ul>
            </div>
            <div className={styles.techColumn}>
              <h4>Security Features</h4>
              <ul>
                <li>SSL Encryption</li>
                <li>Web Application Firewall</li>
                <li>Regular Security Audits</li>
                <li>Secure Contact Forms</li>
                <li>SPAM Protection</li>
              </ul>
            </div>
            <div className={styles.techColumn}>
              <h4>Performance Features</h4>
              <ul>
                <li>Image Optimization</li>
                <li>Caching Implementation</li>
                <li>CDN Integration</li>
                <li>Database Optimization</li>
                <li>Lazy Loading</li>
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
              <h4>📈 40% Increase in Qualified Leads</h4>
              <p>The new website's clear structure and compelling content significantly improved lead generation, with better-qualified inquiries from serious international clients.</p>
            </div>
            <div className={styles.resultItem}>
              <h4>⚡ 35% Faster Load Times</h4>
              <p>Performance optimizations resulted in dramatically faster page loads, improving user experience and reducing bounce rates.</p>
            </div>
            <div className={styles.resultItem}>
              <h4>🛡️ 100% Security Compliance</h4>
              <p>Implemented security measures ensured full compliance with international data protection standards, giving clients confidence in doing business online.</p>
            </div>
            <div className={styles.resultItem}>
              <h4>📱 25% Reduced Bounce Rate</h4>
              <p>The responsive design and improved user experience kept visitors engaged longer, significantly reducing bounce rates across all device types.</p>
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
              Wexably transformed our online presence with a website that not only looks professional but also handles our international security needs perfectly. The 40% increase in qualified leads has directly impacted our business growth.
            </p>
            <div className={styles.clientInfo}>
              <h4>Lasani Enterprises Management</h4>
              <p>International Trade & Distribution</p>
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
            Ready to Secure Your <span className={styles.gradientText}>Digital Growth</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Let's discuss how we can create a secure, high-performing website that drives results for your business.
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

export default LasaniEnterpriseCaseStudy;