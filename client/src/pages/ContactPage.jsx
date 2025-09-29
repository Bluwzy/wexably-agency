import React, { useState, useEffect } from 'react';
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
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ data
  const faqItems = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all messages within 24 hours during business days."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a free 30-minute consultation to discuss your project needs."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in serving GTA businesses including contractors, healthcare providers, professional services, and e-commerce."
    }
  ];

  // Auto-clear success messages after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // 🛡️ CLIENT-SIDE VALIDATION
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    } else if (!/^[a-zA-Z\s\-'.]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens, apostrophes, and periods';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 254) {
      newErrors.email = 'Email must be less than 254 characters';
    }
    
    // Company validation
    if (formData.company && formData.company.length > 100) {
      newErrors.company = 'Company name must be less than 100 characters';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters';
    }
    
    return newErrors;
  };

  // 🛡️ CLIENT-SIDE SANITIZATION
  const sanitizeInput = (value, fieldName) => {
    let sanitized = value;
    
    switch(fieldName) {
      case 'name':
        // Only allow letters, spaces, and basic punctuation
        sanitized = value.replace(/[^a-zA-Z\s\-'.]/g, '');
        break;
      case 'email':
        // Convert to lowercase and trim
        sanitized = value.toLowerCase().trim();
        break;
      case 'company':
        // Allow alphanumeric and basic punctuation
        sanitized = value.replace(/[^a-zA-Z0-9\s\-&.,]/g, '');
        break;
      case 'message':
        // Basic XSS prevention - remove script tags and event handlers
        sanitized = value
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/on\w+=/gi, '');
        break;
      default:
        sanitized = value;
    }
    
    return sanitized;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // 🛡️ SANITIZE INPUT AS USER TYPES
    const sanitizedValue = sanitizeInput(value, name);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const field = e.target.name;
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
    
    const newErrors = validateForm();
    setErrors(prev => ({
      ...prev,
      [field]: newErrors[field] || ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Scroll to first error
      const firstErrorField = Object.keys(newErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
      
      return;
    }
    
    // 🛡️ FINAL SANITIZATION BEFORE SUBMISSION
    const finalFormData = {
      name: sanitizeInput(formData.name, 'name'),
      email: sanitizeInput(formData.email, 'email'),
      company: formData.company ? sanitizeInput(formData.company, 'company') : '',
      message: sanitizeInput(formData.message, 'message')
    };
    
    // If validation passes, proceed with submission
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');
    
    try {
      const API_URL = process.env.NODE_ENV === 'production' 
        ? process.env.REACT_APP_API_URL || 'https://your-production-api.com'
        : 'http://localhost:5000';
        
      const response = await axios.post(`${API_URL}/api/contact`, finalFormData, {
        timeout: 15000, // 15 second timeout
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.data.success) {
        setSubmitMessage('Message sent successfully! We will get back to you within 24 hours.');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setErrors({});
        setTouched({});
      } else {
        setSubmitMessage(response.data.error || 'Sorry, there was an error sending your message.');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // 🛡️ USER-FRIENDLY ERROR MESSAGES
      if (error.code === 'ECONNABORTED') {
        setSubmitMessage('Request timeout. Please check your connection and try again.');
      } else if (error.response) {
        // Server responded with error status
        if (error.response.status === 429) {
          setSubmitMessage('Too many submission attempts. Please try again in 15 minutes.');
        } else if (error.response.data && error.response.data.error) {
          setSubmitMessage(`Error: ${error.response.data.error}`);
        } else {
          setSubmitMessage('Server error. Please try again later.');
        }
      } else if (error.request) {
        // Network error
        setSubmitMessage('Cannot connect to server. Please check your internet connection.');
      } else {
        // Other errors
        setSubmitMessage('An unexpected error occurred. Please try again.');
      }
      
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
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
                  onBlur={handleBlur}
                  required
                  className={errors.name ? styles.errorInput : ''}
                  maxLength={100}
                />
                {touched.name && errors.name && (
                  <span className={styles.errorText}>{errors.name}</span>
                )}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={errors.email ? styles.errorInput : ''}
                  maxLength={254}
                />
                {touched.email && errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
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
                onBlur={handleBlur}
                placeholder="Optional"
                className={errors.company ? styles.errorInput : ''}
                maxLength={100}
              />
              {touched.company && errors.company && (
                <span className={styles.errorText}>{errors.company}</span>
              )}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Tell us about your project and how we can help..."
                className={errors.message ? styles.errorInput : ''}
                maxLength={2000}
              ></textarea>
              {touched.message && errors.message && (
                <span className={styles.errorText}>{errors.message}</span>
              )}
              <div className={styles.charCount}>
                {formData.message.length}/2000 characters
              </div>
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
                {submitStatus === 'success' && (
                  <div className={styles.messageTimer}></div>
                )}
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
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={styles.faqItem}
              >
                <div 
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(index)}
                >
                  <h4>{item.question}</h4>
                  <span className={styles.faqToggle}>
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </div>
                <div 
                  className={`${styles.faqAnswer} ${openFAQ === index ? styles.faqAnswerOpen : ''}`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;