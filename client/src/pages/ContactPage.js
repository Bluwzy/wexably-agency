import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      if (response.data.success) {
        setSubmitMessage('Message sent successfully! We\'ll get back to you within 24 hours.');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      if (error.response && error.response.data.error) {
        setSubmitMessage(`Error: ${error.response.data.error}`);
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      }
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Let's <span className={styles.gradientText}>Secure Your Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ready to transform your online presence? Get in touch for a free consultation 
            and discover how we can help your GTA business thrive with secure, results-driven solutions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        {/* Contact Form */}
        <motion.section 
          className={styles.formSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2>Send Us a Message</h2>
          <p className={styles.sectionDescription}>
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project and how we can help..."
              ></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              disabled={isSubmitting}
              className={styles.submitButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
            
            {submitMessage && (
              <div className={`${styles.message} ${styles[submitStatus]}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </motion.section>

        {/* Contact Information */}
        <motion.section 
          className={styles.infoSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2>Other Ways to Connect</h2>
          
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}>📧</div>
              <h3>Email Us</h3>
              <p>info@wexably.com</p>
            </div>
            
            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}>📞</div>
              <h3>Call Us</h3>
              <p>+1 (416) 555-0123</p>
            </div>
            
            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}>📍</div>
              <h3>Location</h3>
              <p>Serving the Greater Toronto Area</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={styles.faq}>
            <h3>Frequently Asked Questions</h3>
            <div className={styles.faqItem}>
              <h4>How quickly do you respond to inquiries?</h4>
              <p>We typically respond to all messages within 24 hours during business days.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Do you offer free consultations?</h4>
              <p>Yes, we offer a free 30-minute consultation to discuss your project needs.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>What industries do you specialize in?</h4>
              <p>We specialize in serving GTA businesses including contractors, healthcare providers, professional services, and e-commerce.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;