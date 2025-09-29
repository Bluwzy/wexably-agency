import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './ServicesPage.module.css';

// CountUp component for animated statistics
const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);
  
  return <span ref={ref}>{count}</span>;
};

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [scrollY, setScrollY] = useState(0);
  
  // Throttle scroll events
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate annual prices (15% discount)
  const calculateAnnualPrice = (monthlyPrice) => {
    const numericPrice = parseInt(monthlyPrice.replace(/[^0-9]/g, ''));
    const annualPrice = numericPrice * 12 * 0.85;
    return `$${Math.round(annualPrice)}/year`;
  };

  // Featured services data
  const services = useMemo(() => [
    {
      title: "Secure Foundation Website",
      description: "A custom, secure 5-page website designed to convert visitors into customers with enterprise-grade security built in from day one.",
      price: "$2,997",
      billingType: "one-time",
      features: [
        "5 custom-designed pages",
        "Mobile-responsive design", 
        "SEO optimization",
        "SSL Security Certificate",
        "Firewall Protection",
        "Secure contact forms",
        "3 months technical support",
        "Basic on-page SEO setup"
      ],
      cta: "Get Secure Website",
      popular: true,
      icon: "🛡️"
    },
    {
      title: "Growth Engine Pro", 
      description: "Complete digital marketing solution with content creation, SEO, social media management, and performance tracking.",
      monthlyPrice: "$1,997/mo",
      annualPrice: calculateAnnualPrice("$1,997"),
      billingType: "monthly",
      features: [
        "15 social media posts per month",
        "Monthly professional content creation",
        "Community engagement & management", 
        "Monthly performance analytics reports",
        "Google Analytics & Search Console setup",
        "Monthly strategy consultation",
        "Competitor analysis",
        "Conversion rate optimization"
      ],
      cta: "Start Growing",
      popular: false,
      icon: "📈"
    },
    {
      title: "Guardian Security & Maintenance",
      description: "Comprehensive website maintenance, security monitoring, and performance optimization to keep your site safe and fast.",
      monthlyPrice: "$399/mo", 
      annualPrice: calculateAnnualPrice("$399"),
      billingType: "monthly",
      features: [
        "24/7 security monitoring",
        "Daily automated backups",
        "Software & plugin updates",
        "Priority technical support",
        "Malware scanning & removal", 
        "Uptime monitoring",
        "Performance optimization",
        "Monthly security reports"
      ],
      cta: "Get Protection",
      popular: false,
      icon: "🔒"
    }
  ], []);

  // All services data
  const allServices = useMemo(() => [
    {
      category: "Web Development",
      icon: "💻",
      services: [
        { name: "Small Business Website", price: "$2,997-$4,997", desc: "5-7 page custom website with security features" },
        { name: "E-commerce Store", price: "$5,997-$9,997", desc: "Full online store with payment processing and inventory" },
        { name: "Web Application", price: "Custom Quote", desc: "Custom web apps with database integration" },
        { name: "Website Redesign", price: "$1,997-$3,997", desc: "Modernize and secure your existing website" }
      ]
    },
    {
      category: "Digital Marketing",
      icon: "🚀",
      services: [
        { name: "SEO Package", price: "$997/mo", desc: "Comprehensive SEO strategy and implementation" },
        { name: "Social Media Management", price: "$1,497/mo", desc: "Content creation and community engagement" },
        { name: "Google Ads Management", price: "$697/mo + ad spend", desc: "PPC campaign setup and optimization" },
        { name: "Email Marketing", price: "$797/mo", desc: "Newsletter creation and campaign management" }
      ]
    },
    {
      category: "Security & Maintenance",
      icon: "🛡️",
      services: [
        { name: "Essential Maintenance", price: "$249/mo", desc: "Basic updates, backups, and monitoring" },
        { name: "Advanced Monitoring", price: "$499/mo", desc: "24/7 security monitoring and performance optimization" },
        { name: "Enterprise Protection", price: "$699/mo", desc: "Comprehensive security and performance optimization" },
        { name: "One-Time Security Audit", price: "$497", desc: "Comprehensive website security assessment" }
      ]
    }
  ], []);

  // Statistics data
  const statsData = useMemo(() => [
    { value: 97, label: "Client Retention Rate", suffix: "%" },
    { value: 42, label: "Average Client Growth", suffix: "%" },
    { value: 24, label: "Hour Support Response", suffix: "h" },
    { value: 100, label: "Security Compliance", suffix: "%" },
    { value: 30, label: "Average Project Timeline", suffix: "days" },
  ], []);

  // Process steps
  const processSteps = useMemo(() => [
    { number: 1, title: "Discovery & Strategy", desc: "We learn about your business, goals, and security needs to create a customized plan." },
    { number: 2, title: "Design & Development", desc: "We build your secure website with modern technologies and best practices." },
    { number: 3, title: "Testing & Launch", desc: "We thoroughly test for security vulnerabilities before launching your site." },
    { number: 4, title: "Growth & Maintenance", desc: "We continue to support, monitor, and optimize your digital presence." }
  ], []);

  const hasMonthlyServices = services.some(service => service.billingType === "monthly");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Parallax effect
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} style={parallaxStyle}></div>
        <div className={styles.particlesContainer}>
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className={styles.particle} 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            ></div>
          ))}
        </div>
        
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Secure Growth Solutions <span className={styles.gradientText}>For GTA Businesses</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We provide Toronto-area businesses with secure, high-performing websites and marketing solutions. 
            From plumbers to dentists, we understand your industry's unique needs and compliance requirements.
          </motion.p>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statsSection}>
        <div className={styles.sectionContainer}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Why Businesses <span className={styles.gradientText}>Choose Wexably</span>
          </motion.h2>
          <div className={styles.statsGrid}>
            {statsData.map((stat, index) => (
              <motion.div 
                key={index}
                className={styles.statCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className={styles.statNumber}>
                  <CountUp end={stat.value} />{stat.suffix}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className={styles.featuredServices} ref={ref}>
        <div className={styles.sectionContainer}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Our <span className={styles.gradientText}>Featured Solutions</span>
          </motion.h2>
          
          <motion.p 
            className={styles.sectionIntro}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Designed specifically for GTA businesses who value security and results
          </motion.p>

          {hasMonthlyServices && (
            <motion.div 
              className={styles.billingToggle}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span 
                className={billingCycle === 'monthly' ? styles.active : ''}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </span>
              <div 
                className={styles.toggleSwitch} 
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              >
                <div className={`${styles.toggleKnob} ${billingCycle === 'annual' ? styles.annual : ''}`}></div>
              </div>
              <span 
                className={billingCycle === 'annual' ? styles.active : ''}
                onClick={() => setBillingCycle('annual')}
              >
                Annual (Save 15%)
              </span>
            </motion.div>
          )}
          
          <motion.div 
            className={styles.servicesGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className={`${styles.serviceCard} ${service.popular ? styles.popular : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {service.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )}
                
                <div className={`${styles.billingBadge} ${service.billingType === "one-time" ? styles.oneTime : styles.monthly}`}>
                  {service.billingType === "one-time" ? "One-Time Project" : "Ongoing Retainer"}
                </div>
                
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                
                <p className={styles.price}>
                  {service.billingType === "one-time" 
                    ? service.price 
                    : billingCycle === 'monthly' 
                      ? service.monthlyPrice 
                      : service.annualPrice
                  }
                </p>
                
                <ul className={styles.features}>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                
                <motion.button 
                  className={styles.ctaButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact">{service.cta}</Link>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Services Section */}
      <section className={styles.allServices}>
        <div className={styles.sectionContainer}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Complete <span className={styles.gradientText}>Service Menu</span>
          </motion.h2>
          
          <motion.p 
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            We offer a comprehensive range of services to meet all your digital needs. 
            All plans include our signature security features.
          </motion.p>

          <div className={styles.servicesTable}>
            {allServices.map((category, index) => (
              <motion.div 
                key={index} 
                className={styles.serviceCategory}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <h3>{category.category}</h3>
                </div>
                <div className={styles.serviceList}>
                  {category.services.map((service, i) => (
                    <motion.div 
                      key={i} 
                      className={styles.serviceItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className={styles.serviceInfo}>
                        <h4>{service.name}</h4>
                        <p>{service.desc}</p>
                      </div>
                      <div className={styles.servicePrice}>
                        <span>{service.price}</span>
                        <motion.button 
                          className={styles.inquireButton}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link to="/contact">Inquire</Link>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.sectionContainer}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Our <span className={styles.gradientText}>Process</span>
          </motion.h2>
          
          <div className={styles.processSteps}>
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className={styles.processStep}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContainer}>
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2>Ready to <span className={styles.gradientText}>Secure Your Growth</span>?</h2>
            <p>Schedule a free consultation to discuss your project and get a customized quote.</p>
            <div className={styles.ctaButtons}>
              <motion.button 
                className={styles.primaryCta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">Book Free Consultation</Link>
              </motion.button>
              <motion.button 
                className={styles.secondaryCta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/portfolio">View Our Work</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;