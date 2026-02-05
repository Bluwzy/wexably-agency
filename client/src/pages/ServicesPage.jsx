import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './ServicesPage.module.css';
import SEO from '../components/SEO/SEO';

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
  
  const [scrollY, setScrollY] = useState(0);
  const [expandedAddon, setExpandedAddon] = useState(null);
  
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

  // Featured services data
  const services = useMemo(() => [
    {
      title: "Content & Media Production",
      description: "Cinematic visuals for food, events, and brands. High-impact video and photography that stops the scroll and drives engagement.",
      monthlyPrice: "$2,000–$2,400/mo",
      billingType: "monthly",
      features: [
        "One planned monthly shoot (5–6 hours)",
        "8–10 short-form videos",
        "20 professional photos",
        "Full editing included",
        "Organic social usage only",
        "Content scope adjusted per needs",
        "Food, talent, or concept-driven content",
        "Priority scheduling"
      ],
      cta: "Get Started",
      popular: true,
      icon: "🎥"
    },
    {
      title: "Secure Foundation Website",
      description: "A custom, secure 5-8 page website designed to convert visitors into customers with enterprise-grade security built in from day one.",
      price: "$3,500–$4,500",
      billingType: "one-time",
      features: [
        "5–8 custom-designed pages",
        "Advanced responsive design",
        "Booking/appointment system",
        "E-commerce integration (up to 20 products)",
        "SEO & performance optimization",
        "SSL, firewall & security hardening",
        "Google Analytics & tracking",
        "60-day post-launch support"
      ],
      cta: "Build My Site",
      popular: false,
      icon: "✨",
      addon: {
        title: "Guardian Security & Maintenance",
        price: "$150–$200/mo",
        description: "Keep your site fast, secure, and optimized",
        features: [
          "24/7 uptime monitoring",
          "Weekly security scans",
          "Monthly performance reports",
          "Priority support",
          "Automated backups"
        ]
      }
    }
  ], []);

  // All services data
  const allServices = useMemo(() => [
    {
      category: "Content & Media Production",
      icon: "🎥",
      services: [
        { name: "Food-Based Short-Form Video", price: "$220–$260", desc: "Cinematic food content for social media" },
        { name: "Talent / Concept-Driven Video", price: "$280–$320", desc: "People-focused or creative concept videos" },
        { name: "Photography (per 10 images)", price: "$150–$180", desc: "Professional product or food photography" },
        { name: "Monthly Content Package", price: "$2,000–$2,400/mo", desc: "8–10 videos + 20 photos, full editing included" }
      ]
    },
    {
      category: "Web Design & Development",
      icon: "✨",
      services: [
        { name: "Starter Site (3–5 pages)", price: "$1,800–$2,200", desc: "Perfect for new businesses and personal brands" },
        { name: "Secure Foundation Website (5–8 pages)", price: "$3,500–$4,500", desc: "Advanced site with e-commerce and security" },
        { name: "Custom Enterprise Solution", price: "From $6,000", desc: "Tailored solutions for complex needs" },
        { name: "Website Redesign", price: "$1,997–$3,997", desc: "Modernize and secure your existing website" }
      ]
    },
    {
      category: "Maintenance & Support",
      icon: "🛡️",
      services: [
        { name: "Guardian Security & Maintenance", price: "$150–$200/mo", desc: "24/7 monitoring, backups, and optimization" },
        { name: "One-time Security Audit", price: "$400–$600", desc: "Comprehensive website security assessment" },
        { name: "Emergency Support (per incident)", price: "$150–$300", desc: "Urgent fixes and troubleshooting" }
      ]
    },
    {
      category: "Design & Branding",
      icon: "🎨",
      services: [
        { name: "Logo Design Package", price: "$500–$800", desc: "Custom logo with multiple concepts" },
        { name: "Brand Identity Kit", price: "$1,200–$1,800", desc: "Complete brand guidelines and assets" },
        { name: "Social Media Graphics (per set of 10)", price: "$200–$300", desc: "Custom graphics for your brand" }
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
    { number: 1, title: "Discovery & Strategy", desc: "We learn about your business, goals, and creative vision to create a customized plan." },
    { number: 2, title: "Production & Development", desc: "We create stunning content and build secure websites with modern technologies." },
    { number: 3, title: "Editing & Launch", desc: "We polish every detail and thoroughly test before launching your project." },
    { number: 4, title: "Growth & Optimization", desc: "We continue to support, monitor, and optimize your digital presence." }
  ], []);

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
    <>
    <SEO
      title="Services - Content & Media Production + Web Design | Wexably Agency"
      description="Premium content & media production and web design services for Toronto businesses. Cinematic visuals, secure websites, and digital solutions for the GTA."
      keywords="content production Toronto, media production GTA, web development Toronto, food photography, event videography, secure websites"
      canonicalUrl="https://wexably.com/services"
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
            "name": "Services",
            "item": "https://wexably.com/services"
          }
        ]
      }}
    />

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
            Premium Visuals & <span className={styles.gradientText}>High-Performance Sites</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We create content that captivates and websites that convert. Built for GTA brands ready to stand out.
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
            Our <span className={styles.gradientText}>Core Services</span>
          </motion.h2>
          
          <motion.p 
            className={styles.sectionIntro}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Professional content creation and web solutions designed for GTA brands
          </motion.p>
          
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
                  {service.billingType === "one-time" ? "One-Time Project" : "Monthly Retainer"}
                </div>
                
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                
                <p className={styles.price}>
                  {service.billingType === "one-time" ? service.price : service.monthlyPrice}
                </p>
                
                <ul className={styles.features}>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {service.addon && (
                  <div className={styles.addonSection}>
                    <button 
                      className={styles.addonToggle}
                      onClick={() => setExpandedAddon(expandedAddon === index ? null : index)}
                    >
                      <span className={styles.addonToggleIcon}>
                        {expandedAddon === index ? '−' : '+'}
                      </span>
                      <span className={styles.addonToggleText}>
                        💡 <strong>{service.addon.title}</strong>
                      </span>
                      <span className={styles.addonTogglePrice}>{service.addon.price}</span>
                    </button>
                    
                    <div className={`${styles.addonContent} ${expandedAddon === index ? styles.addonExpanded : ''}`}>
                      <div className={styles.addonCard}>
                        <p className={styles.addonDescription}>{service.addon.description}</p>
                        <ul className={styles.addonFeatures}>
                          {service.addon.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                
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

      {/* Pricing Details Section */}
      <section className={styles.pricingDetailsSection}>
        <div className={styles.sectionContainer}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Content & Media <span className={styles.gradientText}>Pricing Breakdown</span>
          </motion.h2>

          <motion.div 
            className={styles.pricingCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Monthly Pricing Application</h3>
            <div className={styles.pricingTiers}>
              <div className={styles.pricingTier}>
                <span className={styles.tierType}>Food-focused content only</span>
                <span className={styles.tierPrice}>~$2,000/mo</span>
              </div>
              <div className={styles.pricingTier}>
                <span className={styles.tierType}>Mixed food + people content</span>
                <span className={styles.tierPrice}>~$2,200/mo</span>
              </div>
              <div className={styles.pricingTier}>
                <span className={styles.tierType}>Talent-led / skits / higher complexity</span>
                <span className={styles.tierPrice}>~$2,400/mo</span>
              </div>
              <div className={styles.pricingTier}>
                <span className={styles.tierType}>Heavy talent usage</span>
                <span className={styles.tierPrice}>Custom quote</span>
              </div>
            </div>

            <div className={styles.talentNotice}>
              <h4>⚠️ Talent Rules</h4>
              <ul>
                <li>Talent fees are <strong>never included</strong> in monthly pricing</li>
                <li>Talent paid directly by client or reimbursed if managed by Wexably</li>
              </ul>
            </div>
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
            <h2>Ready to <span className={styles.gradientText}>Elevate Your Brand</span>?</h2>
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
    </>
  );
};

export default ServicesPage;
