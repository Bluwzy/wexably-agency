// client/src/pages/ContactPage.js
import React, { useState } from 'react';
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
  
  try {
    const response = await axios.post('http://localhost:5000/api/contact', formData);
    
    if (response.data.success) {
      setSubmitMessage('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    if (error.response && error.response.data.error) {
      setSubmitMessage(`Error: ${error.response.data.error}`);
    } else {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    }
  }
  
  setIsSubmitting(false);
};

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>Ready to grow your business? Get in touch with us today.</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
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
        
        <div className={styles.formGroup}>
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
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
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        
        {submitMessage && <p className={styles.message}>{submitMessage}</p>}
      </form>
    </div>
  );
};

export default ContactPage;