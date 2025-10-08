import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './RiyadhConstructionGroupCaseStudy.module.css';

const RiyadhConstructionGroupCaseStudy = () => {
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
            Riyadh Construction Group: <span className={styles.gradientText}>Digital Transformation with MERN</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Enterprise-grade construction management portal built with the MERN stack to streamline project operations and client engagement
          </motion.p>
          <motion.div 
            className={styles.meta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className={styles.metaItem}>Industry: Construction & Real Estate Development</span>
            <span className={styles.metaItem}>Location: Riyadh, Saudi Arabia</span>
            <span className={styles.metaItem}>Stack: MERN (MongoDB, Express.js, React, Node.js)</span>
          </motion.div>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/Riyadh-Construction-Group.jpg" alt="Riyadh Construction Group Dashboard Preview" />
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
            <h3>30%</h3>
            <p>Faster client inquiry response</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>40%</h3>
            <p>Improved project visibility</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>100%</h3>
            <p>Data security compliance</p>
          </motion.div>
          <motion.div 
            className={styles.resultCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>25%</h3>
            <p>Reduced operational costs</p>
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
            <p>Riyadh Construction Group is a prominent Saudi construction company with a legacy of contributing to the Kingdom's Vision 2030 through transformative infrastructure and urban development projects. They required a modern web application to manage their growing portfolio and enhance client communication. Key requirements included</p>
            <ul>
              <li>Centralized project management dashboard for ongoing constructions</li>
              <li>Bilingual support (Arabic/English) for diverse client base</li>
              <li>Real-time project progress tracking and updates</li>
              <li>Secure client portal for collaboration and document sharing</li>
              <li>Mobile-responsive design for on-site accessibility</li>
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
            <p>Developing a scalable application for the construction industry presented unique technical hurdles that required robust MERN stack solutions</p>
            <div className={styles.challengeGrid}>
              <div className={styles.challengeCard}>
                <h4>🏗️ Complex Data Structures</h4>
                <p>Managing hierarchical project data, vendor information, and client portfolios required advanced MongoDB schema design</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>🔄 Real-time Updates</h4>
                <p>Implementing live progress tracking and notifications for multiple stakeholders across projects</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>🌐 Bilingual RTL Support</h4>
                <p>Creating a seamless Arabic/English experience with Right-to-Left layout capabilities</p>
              </div>
              <div className={styles.challengeCard}>
                <h4>📱 Cross-Platform Performance</h4>
                <p>Ensuring optimal performance across desktop and mobile devices for field and office use</p>
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
              <h4>React Frontend Architecture</h4>
              <p>Built a component-based UI with React Router for navigation, Context API for state management, and responsive design principles</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>🚀</div>
              <h4>Node.js & Express Backend</h4>
              <p>Developed RESTful APIs with Express.js, JWT authentication, and middleware for secure data processing and business logic</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>🗄️</div>
              <h4>MongoDB Database Design</h4>
              <p>Implemented optimized document structures for projects, users, and communications with aggregation pipelines for analytics</p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>🔒</div>
              <h4>Enterprise Security</h4>
              <p>Integrated role-based access control, data encryption, and input validation to protect sensitive construction project data</p>
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
                <li>React.js with Hooks & Context API</li>
                <li>React Router for navigation</li>
                <li>Axios for API communication</li>
                <li>CSS Modules for styling</li>
                <li>Framer Motion for animations</li>
              </ul>
            </div>
            <div className={styles.techColumn}>
              <h4>Backend Stack</h4>
              <ul>
                <li>Node.js runtime environment</li>
                <li>Express.js framework</li>
                <li>MongoDB with Mongoose ODM</li>
                <li>JWT for authentication</li>
                <li>Bcrypt for password hashing</li>
              </ul>
            </div>
            <div className={styles.techColumn}>
              <h4>Key Features</h4>
              <ul>
                <li>Project portfolio showcase</li>
                <li>Client portal with document sharing</li>
                <li>Real-time progress tracking</li>
                <li>Bilingual content management</li>
                <li>Role-based admin panel</li>
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
              <h4>📈 30% Faster Client Response Time</h4>
              <p>The centralized client portal streamlined communication, reducing inquiry response time from days to hours with automated notifications and status updates</p>
            </div>
            <div className={styles.resultItem}>
              <h4>👁️ 40% Improved Project Visibility</h4>
              <p>Real-time progress tracking and dashboard analytics provided stakeholders with immediate insight into project status and performance metrics</p>
            </div>
            <div className={styles.resultItem}>
              <h4>🛡️ 100% Security Compliance</h4>
              <p>Implemented enterprise-grade security measures ensuring protection of sensitive construction data and client information</p>
            </div>
            <div className={styles.resultItem}>
              <h4>💰 25% Operational Cost Reduction</h4>
              <p>Automated workflows and reduced manual coordination decreased administrative overhead and improved resource allocation</p>
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
              Wexably's MERN stack solution has revolutionized how we manage projects and communicate with clients. The seamless bilingual experience and robust project tracking features have made us more efficient and professional in our operations. The 30% improvement in our response time has significantly enhanced client satisfaction.
            </p>
            <div className={styles.clientInfo}>
              <h4>Riyadh Construction Group Management</h4>
              <p>Construction & Development</p>
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
            Ready to Build Your <span className={styles.gradientText}>Digital Future</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Let's discuss how we can create a powerful MERN stack application that drives growth and efficiency for your business.
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

export default RiyadhConstructionGroupCaseStudy;