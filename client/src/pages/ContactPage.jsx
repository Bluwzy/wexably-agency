import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from './ContactPage.module.css';
import SEO from '../components/SEO/SEO';

const ContactPage = () => {
  const location = useLocation();
  
  // Parse URL parameters and generate initial message
  const getInitialMessage = () => {
    const params = new URLSearchParams(location.search);
    const plan = params.get('plan');
    const service = params.get('service');
    const serviceName = params.get('name');
    const servicePrice = params.get('price');
    const addon = params.get('addon');
    const addonName = params.get('addonName');
    const addonPrice = params.get('addonPrice');
    
    // Custom Build Your Own Plan
    if (plan === 'custom') {
      const simpleVideos = params.get('simpleVideos') || '0';
      const talentVideos = params.get('talentVideos') || '0';
      const photos = params.get('photos') || '0';
      const total = params.get('total') || '0';
      
      let message = "Hi! I'm interested in a custom monthly content plan:\n\n";
      
      if (simpleVideos !== '0') {
        message += `• ${simpleVideos} Food-Based Simple Video${simpleVideos > 1 ? 's' : ''}\n`;
      }
      
      if (talentVideos !== '0') {
        message += `• ${talentVideos} Talent/Concept-Driven Video${talentVideos > 1 ? 's' : ''}\n`;
      }
      
      if (photos !== '0') {
        message += `• ${photos} Professional Photo${photos > 1 ? 's' : ''}\n`;
      }
      
      message += `\nEstimated Monthly Total: $${total}\n\n`;
      message += "I'd love to discuss this plan further and learn more about your services.";
      
      return message;
    }
    
    // Specific Service Inquiry
    if (service && serviceName) {
      let message = `Hi! I'm interested in: ${serviceName}\n`;
      
      if (servicePrice) {
        message += `Price Range: ${servicePrice}\n`;
      }
      
      // Add Guardian Add-on if checked
      if (addon === 'true' && addonName && addonPrice) {
        message += `\n✅ Including: ${addonName}\n`;
        message += `Add-on Price: ${addonPrice}\n`;
        message += `\n📦 Complete Package: Website + Ongoing Maintenance & Security\n`;
      }
      
      message += `\nI'd like to learn more about this service and discuss how it can help my business.`;
      
      return message;
    }
    
    return '';
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: getInitialMessage()
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [openFAQ, setOpenFAQ] = useState(null);

  // 🚀 FIXED: Use your Netlify environment variable
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 
    (process.env.NODE_ENV === 'production' 
      ? 'https://api.wexably.com' 
      : 'http://localhost:5000');

  // FAQ data
  const faqItems = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all messages within 24 hours during business days. For urgent projects, feel free to call us directly."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer a free 30-minute consultation to discuss your content, media, or web design needs and how we can help bring your vision to life."
    },
    {
      question: "What types of projects do you work on?",
      answer: "We specialize in content & media production (food photography, event videography, brand content) and web design & development for GTA businesses. From restaurants to professional services, we create visuals and websites that stand out."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Content shoots are typically scheduled within 1-2 weeks. Website projects range from 3-8 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation."
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
        sanitized = value.replace(/[^a-zA-Z\s\-'.]/g, '');
        break;
      case 'email':
        sanitized = value.toLowerCase().trim();
        break;
      case 'company':
        sanitized = value.replace(/[^a-zA-Z0-9\s\-&.,]/g, '');
        break;
      case 'message':
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
    
    const sanitizedValue = sanitizeInput(value, name);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
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
    
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      const firstErrorField = Object.keys(newErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
      
      return;
    }
    
    const finalFormData = {
      name: sanitizeInput(formData.name, 'name'),
      email: sanitizeInput(formData.email, 'email'),
      company: formData.company ? sanitizeInput(formData.company, 'company') : '',
      message: sanitizeInput(formData.message, 'message')
    };
    
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');
    
    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, finalFormData, {
        timeout: 15000,
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
      
      if (error.code === 'ECONNABORTED') {
        setSubmitMessage('Request timeout. Please check your connection and try again.');
      } else if (error.response) {
        if (error.response.status === 429) {
          setSubmitMessage('Too many submission attempts. Please try again in 15 minutes.');
        } else if (error.response.data && error.response.data.error) {
          setSubmitMessage(`Error: ${error.response.data.error}`);
        } else {
          setSubmitMessage('Server error. Please try again later.');
        }
      } else if (error.request) {
        setSubmitMessage(`Cannot connect to server. Please check if ${API_BASE_URL} is accessible.`);
      } else {
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
    <>
      <SEO
        title="Contact - Let's Create Something Amazing | Wexably Agency"
        description="Contact Wexably Agency for content production, media services, and web design in Toronto. Free consultation for GTA businesses ready to elevate their brand."
        keywords="contact media production Toronto, web design consultation GTA, content creation Toronto, videography contact"
        canonicalUrl="https://wexably.com/contact"
        breadcrumbs={{
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://wexably.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact",
              "item": "https://wexably.com/contact"
            }
          ]
        }}
      />

    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Let's Create Something <span className={styles.gradientText}>Amazing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ready to elevate your brand with stunning content and a high-performance website? 
            Get in touch for a free consultation and let's bring your vision to life.
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
                placeholder="Tell us about your project—whether it's content creation, web design, or both!"
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
          <h2>Connect With Us</h2>
          
          <div className={styles.contactMethods}>
            <a 
              href="mailto:info@wexably.com" 
              className={styles.contactMethod}
              aria-label="Send email to info@wexably.com"
            >
              <div className={styles.methodIcon}>📧</div>
              <div className={styles.methodContent}>
                <h3>Email</h3>
                <p>info@wexably.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+12893357376" 
              className={styles.contactMethod}
              aria-label="Call +1 (289) 335-7376"
            >
              <div className={styles.methodIcon}>📞</div>
              <div className={styles.methodContent}>
                <h3>Phone</h3>
                <p>+1 (289) 335-7376</p>
              </div>
            </a>
            
            <a 
              href="https://www.instagram.com/wexably/"
              className={styles.contactMethod}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram @wexably"
            >
              <div className={styles.methodIcon}>📸</div>
              <div className={styles.methodContent}>
                <h3>Instagram</h3>
                <p>@wexably</p>
              </div>
            </a>
            
            <a 
              href="https://share.google/iLttHmdWeAqweCILU" 
              className={styles.contactMethod}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View our location serving the Greater Toronto Area"
            >
              <div className={styles.methodIcon}>📍</div>
              <div className={styles.methodContent}>
                <h3>Location</h3>
                <p>Greater Toronto Area</p>
              </div>
            </a>
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
    </>
  );
};

export default ContactPage;
