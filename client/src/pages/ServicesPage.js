import React from 'react';
import styles from './ServicesPage.module.css';

const ServicesPage = () => {
  const services = [
    {
      title: "Foundation Website",
      description: "A custom, secure 5-page website designed to convert visitors into customers.",
      price: "From $1,997",
      features: ["Mobile-responsive design", "SEO optimization", "Contact forms", "3 months support"]
    },
    {
      title: "Growth Engine",
      description: "Complete social media management with monthly content creation.",
      price: "From $1,500/mo",
      features: ["15 posts per month", "Monthly content shoot", "Community management", "Performance reports"]
    },
    {
      title: "Guardian Plan",
      description: "Ongoing website maintenance and security monitoring.",
      price: "$199/mo",
      features: ["24/7 security monitoring", "Weekly backups", "Software updates", "Priority support"]
    }
  ];

  return (
    <div className={styles.container}>
      <h1>Our Services</h1>
      <p className={styles.subtitle}>Complete digital solutions for small businesses</p>
      
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
            <p className={styles.price}>{service.price}</p>
            <ul className={styles.features}>
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className={styles.ctaButton}>Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;