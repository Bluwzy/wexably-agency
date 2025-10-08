import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './TorontoDentalSpecialistsCaseStudy.module.css';

const TorontoDentalSpecialistsCaseStudy = () => {
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
            Toronto Dental Specialists: <span className={styles.gradientText}>Secure Patient Portal with MERN Stack</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            HIPAA-compliant patient management portal for a leading prosthodontics practice with real-time scheduling and secure communications
          </motion.p>
          <motion.div 
            className={styles.meta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className={styles.metaItem}>Industry: Healthcare & Dental Specialists</span>
            <span className={styles.metaItem}>Location: North York, Ontario</span>
            <span className={styles.metaItem}>Stack: MERN (MongoDB, Express.js, React, Node.js)</span>
          </motion.div>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/Toronto-Dental-Specialists.jpg" alt="Toronto Dental Specialists Patient Portal" />
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
            <h3>50%</h3>
            <p>More online bookings</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>40%</h3>
            <p>Reduced phone inquiries</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>100%</h3>
            <p>HIPAA compliance</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>35%</h3>
            <p>Faster patient intake</p>
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
            <p>Toronto Dental Specialists is a premier prosthodontics practice led by Dr. Mark Lin and a team of board-certified specialists focusing on complex aesthetic and reconstructive cases. The practice required a modern web application to manage their sophisticated patient base and streamline operations for services including:</p>
            <ul>
              <li>Full mouth reconstructions and dental implant surgery</li>
              <li>Advanced anterior implant aesthetics and various grafting procedures</li>
              <li>Implant prosthetics and management of implant complications</li>
              <li>Veneers, crowns and bridges, and removable prosthetics</li>
            </ul>
            <p>As prosthodontists serving as "oral architects" for complex dental cases, they needed a secure digital platform that could handle detailed treatment planning and coordination with other dental specialists.</p>
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
            <p>Developing a healthcare application for a specialized dental practice presented unique challenges that required robust MERN stack solutions with healthcare-specific security:</p>
            <div className={styles.challengeGrid}>
              <div className={styles.challengeCard}>
                <h4>🏥 HIPAA Compliance</h4>
                <p>Ensuring all patient data, communications, and records met strict healthcare privacy and security regulations</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>🦷 Complex Treatment Workflows</h4>
                <p>Managing multi-phase prosthodontics treatments spanning months with coordinated specialist care</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>📱 Patient Education</h4>
                <p>Providing detailed educational resources for complex procedures like full mouth reconstructions</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>🔒 Secure File Sharing</h4>
                <p>Enabling safe transfer of dental imaging, treatment plans, and clinical documentation</p>
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
            Our <span className={styles.gradientText}>MERN Stack Solution</span>
          </motion.h2>
          <motion.div 
            className={styles.solutionGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>⚛️</div>
              <h4>React Patient Portal</h4>
              <p>Built a responsive patient dashboard with treatment plan visualization, secure messaging, and educational resources</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>🚀</div>
              <h4>Node.js & Express API</h4>
              <p>Developed RESTful APIs with HIPAA-compliant encryption, audit logging, and role-based access control</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>🗄️</div>
              <h4>MongoDB Database</h4>
              <p>Designed secure document structures for patient records, treatment plans, and clinical documentation</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>📅</div>
              <h4>Real-time Scheduling</h4>
              <p>Implemented calendar integration with automated reminders and multi-specialist coordination</p>
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
              <h4>Frontend Stack</h4>
              <ul>
                <li>React.js with Context API & Hooks</li>
                <li>Framer Motion for animations</li>
                <li>Custom UI component library</li>
                <li>Responsive CSS Grid & Flexbox</li>
                <li>JWT authentication</li>
              </ul>
            </div>
            <div className={styles.techColumn}>
              <h4>Backend Stack</h4>
              <ul>
                <li>Node.js with Express.js framework</li>
                <li>MongoDB with Mongoose ODM</li>
                <li>HIPAA-compliant encryption</li>
                <li>Role-based access control</li>
                <li>Comprehensive audit logging</li>
              </ul>
            </div>
            <div className={styles.techColumn}>
              <h4>Key Features</h4>
              <ul>
                <li>Patient portal with treatment tracking</li>
                <li>Secure file and image sharing</li>
                <li>Online appointment scheduling</li>
                <li>Treatment plan acceptance</li>
                <li>Multi-specialist coordination</li>
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
              <h4>📈 50% More Online Bookings</h4>
              <p>The intuitive patient portal and online scheduling system dramatically increased direct online bookings, reducing administrative burden and making appointment scheduling accessible 24/7</p>
            </div>
            <div className={styles.resultItem}>
              <h4>📞 40% Reduced Phone Inquiries</h4>
              <p>Comprehensive patient education resources and secure messaging minimized routine phone calls, allowing staff to focus on complex patient needs and clinical coordination</p>
            </div>
            <div className={styles.resultItem}>
              <h4>🛡️ 100% HIPAA Compliance</h4>
              <p>Implemented end-to-end encryption, secure audit trails, and access controls ensuring complete compliance with healthcare privacy regulations and patient data protection</p>
            </div>
            <div className={styles.resultItem}>
              <h4>⏱️ 35% Faster Patient Intake</h4>
              <p>Digital forms and automated intake processes significantly reduced paperwork and wait times, improving patient satisfaction and clinical efficiency</p>
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
              Wexably transformed our patient experience with a secure portal that handles our complex prosthodontics workflow perfectly. The 50% increase in online bookings has dramatically improved our operational efficiency while maintaining the highest standards of patient privacy and care.
            </p>
            <div className={styles.clientInfo}>
              <h4>Toronto Dental Specialists Management</h4>
              <p>Prosthodontics & Dental Specialists</p>
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
            Ready to Transform Your <span className={styles.gradientText}>Healthcare Practice</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Let's discuss how we can create a secure, patient-focused web application that drives growth and efficiency for your medical practice.
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

export default TorontoDentalSpecialistsCaseStudy;