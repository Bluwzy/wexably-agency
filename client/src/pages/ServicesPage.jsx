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
  const [showBuildYourOwn, setShowBuildYourOwn] = useState(false);
  const [guardianAddon, setGuardianAddon] = useState(false);
  
  // Build Your Own Plan State
  const [simpleVideos, setSimpleVideos] = useState('0');
  const [talentVideos, setTalentVideos] = useState('0');
  const [photos, setPhotos] = useState('0');
  
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

  // Calculate Build Your Own Plan price
  const calculateCustomPrice = () => {
    let total = 0;
    
    const getSimpleVideoPrice = (count) => {
      if (count >= 1 && count <= 3) return 230;
      if (count >= 4 && count <= 6) return 200;
      if (count >= 7 && count <= 10) return 180;
      return 0;
    };
    
    const getTalentVideoPrice = (count) => {
      if (count >= 1 && count <= 3) return 300;
      if (count >= 4 && count <= 6) return 270;
      if (count >= 7 && count <= 10) return 240;
      return 0;
    };
    
    const photoPricing = {
      '10': 150,
      '20': 280,
      '30': 390,
      '40': 500
    };
    
    const simpleCount = parseInt(simpleVideos);
    if (simpleCount > 0) {
      total += getSimpleVideoPrice(simpleCount) * simpleCount;
    }
    
    const talentCount = parseInt(talentVideos);
    if (talentCount > 0) {
      total += getTalentVideoPrice(talentCount) * talentCount;
    }
    
    if (photos !== '0') {
      total += photoPricing[photos];
    }
    
    return total;
  };

  const customPrice = calculateCustomPrice();
  const meetsMinimum = customPrice >= 1800;

  // Featured services data
  const services = useMemo(() => [
    {
      id: 'monthly-content',
      title: "Monthly Content Retainer (Best Value)",
      description: "Consistent, high-quality content production with priority scheduling. Perfect for brands that need regular, professional content.",
      monthlyPrice: "$2,200 – $2,800/mo",
      billingType: "monthly",
      features: [
        "1 planned shoot per month (up to 6 hours)",
        "8-10 Short-form videos",
        "20-30 Professional Photos",
        "Full editing & color grading",
        "Priority scheduling",
        "Organic social media usage rights",
        "Monthly strategy consultation"
      ],
      cta: "Start Monthly Plan",
      popular: true,
      icon: "🎥"
    },
    {
      id: 'secure-website',
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
        id: 'guardian-maintenance',
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
        { id: 'monthly-content-full', name: "Monthly Content Package", price: "$2,200–$2,800/mo", desc: "8–10 videos + 20-30 photos, full editing included" },
        { id: '2-video-bundle', name: "2 simple food videos (bundle)", price: "$500", desc: "Best value for quick content needs" },
        { id: 'talent-video', name: "Talent-driven video", price: "$300 – $350", desc: "Videos featuring people or concepts" },
        { id: 'photo-package', name: "25 professional photos", price: "$350 – $400", desc: "Menu-ready, high-quality images" }
      ]
    },
    {
      category: "Web Design & Development",
      icon: "✨",
      services: [
        { id: 'starter-site', name: "Starter Site (3–5 pages)", price: "$1,800–$2,200", desc: "Perfect for new businesses and personal brands" },
        { id: 'secure-foundation', name: "Secure Foundation Website (5–8 pages)", price: "$3,500–$4,500", desc: "Advanced site with e-commerce and security" },
        { id: 'enterprise-solution', name: "Custom Enterprise Solution", price: "From $6,000", desc: "Tailored solutions for complex needs" },
        { id: 'website-redesign', name: "Website Redesign", price: "$1,997–$3,997", desc: "Modernize and secure your existing website" }
      ]
    },
    {
      category: "Maintenance & Support",
      icon: "🛡️",
      services: [
        { id: 'guardian-maintenance-full', name: "Guardian Security & Maintenance", price: "$150–$200/mo", desc: "24/7 monitoring, backups, and optimization" },
        { id: 'security-audit', name: "One-time Security Audit", price: "$400–$600", desc: "Comprehensive website security assessment" },
        { id: 'emergency-support', name: "Emergency Support (per incident)", price: "$150–$300", desc: "Urgent fixes and troubleshooting" }
      ]
    },
    {
      category: "Design & Branding",
      icon: "🎨",
      services: [
        { id: 'logo-design', name: "Logo Design Package", price: "$500–$800", desc: "Custom logo with multiple concepts" },
        { id: 'brand-identity', name: "Brand Identity Kit", price: "$1,200–$1,800", desc: "Complete brand guidelines and assets" },
        { id: 'social-graphics', name: "Social Media Graphics (per set of 10)", price: "$200–$300", desc: "Custom graphics for your brand" }
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
                        
                        <div className={styles.addonCheckbox}>
                          <label>
                            <input
                              type="checkbox"
                              checked={guardianAddon}
                              onChange={(e) => setGuardianAddon(e.target.checked)}
                            />
                            <span>Include Guardian Security & Maintenance</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <motion.button 
                  className={styles.ctaButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={{
                      pathname: "/contact",
                      search: `?service=${service.id}&name=${encodeURIComponent(service.title)}${guardianAddon && service.addon ? `&addon=true&addonName=${encodeURIComponent(service.addon.title)}&addonPrice=${encodeURIComponent(service.addon.price)}` : ''}`
                    }}
                  >
                    {service.cta}
                  </Link>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Build Your Own Plan Section */}
      <section className={styles.buildYourOwnSection}>
        <div className={styles.sectionContainer}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Build Your Own <span className={styles.gradientText}>Monthly Plan</span>
          </motion.h2>

          <motion.p 
            className={styles.sectionSubtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Flexible monthly pricing with better value as you add more content
          </motion.p>

          <motion.button 
            className={styles.buildToggle}
            onClick={() => setShowBuildYourOwn(!showBuildYourOwn)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {showBuildYourOwn ? '− Hide Calculator' : '+ Build Your Custom Plan'}
          </motion.button>

          <div className={`${styles.buildContent} ${showBuildYourOwn ? styles.buildExpanded : ''}`}>
            <motion.div 
              className={styles.buildCalculator}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showBuildYourOwn ? 1 : 0, y: showBuildYourOwn ? 0 : 20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Monthly Video Pricing */}
              <div className={styles.calculatorSection}>
                <h3>📹 Monthly Video Pricing</h3>
                
                <div className={styles.pricingOption}>
                  <label>Food-Based Simple Videos</label>
                  <select value={simpleVideos} onChange={(e) => setSimpleVideos(e.target.value)} className={styles.dropdown}>
                    <option value="0">None</option>
                    <option value="1">1 video ($230/video)</option>
                    <option value="2">2 videos ($230/video)</option>
                    <option value="3">3 videos ($230/video)</option>
                    <option value="4">4 videos ($200/video)</option>
                    <option value="5">5 videos ($200/video)</option>
                    <option value="6">6 videos ($200/video)</option>
                    <option value="7">7 videos ($180/video)</option>
                    <option value="8">8 videos ($180/video)</option>
                    <option value="9">9 videos ($180/video)</option>
                    <option value="10">10 videos ($180/video)</option>
                  </select>
                </div>

                <div className={styles.pricingOption}>
                  <label>Talent / Concept-Driven Videos</label>
                  <select value={talentVideos} onChange={(e) => setTalentVideos(e.target.value)} className={styles.dropdown}>
                    <option value="0">None</option>
                    <option value="1">1 video ($300/video)</option>
                    <option value="2">2 videos ($300/video)</option>
                    <option value="3">3 videos ($300/video)</option>
                    <option value="4">4 videos ($270/video)</option>
                    <option value="5">5 videos ($270/video)</option>
                    <option value="6">6 videos ($270/video)</option>
                    <option value="7">7 videos ($240/video)</option>
                    <option value="8">8 videos ($240/video)</option>
                    <option value="9">9 videos ($240/video)</option>
                    <option value="10">10 videos ($240/video)</option>
                  </select>
                </div>
              </div>

              {/* Monthly Photography Pricing */}
              <div className={styles.calculatorSection}>
                <h3>📸 Monthly Photography Pricing (Menu-Ready)</h3>
                
                <div className={styles.pricingOption}>
                  <label>Photos per Month</label>
                  <select value={photos} onChange={(e) => setPhotos(e.target.value)} className={styles.dropdown}>
                    <option value="0">None</option>
                    <option value="10">10 photos ($150)</option>
                    <option value="20">20 photos ($280)</option>
                    <option value="30">30 photos ($390)</option>
                    <option value="40">40 photos ($500)</option>
                  </select>
                </div>
              </div>

              {/* Total Price Display */}
              <div className={styles.totalSection}>
                <div className={styles.totalPrice}>
                  <span className={styles.totalLabel}>Estimated Monthly Total:</span>
                  <span className={styles.totalAmount}>${customPrice.toFixed(0)}</span>
                </div>
                
                {!meetsMinimum && customPrice > 0 && (
                  <div className={styles.minimumWarning}>
                    ⚠️ Minimum monthly engagement: $1,800
                  </div>
                )}

                {meetsMinimum && (
                  <motion.button 
                    className={styles.ctaButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to={{
                        pathname: "/contact",
                        search: `?plan=custom&simpleVideos=${simpleVideos}&talentVideos=${talentVideos}&photos=${photos}&total=${customPrice.toFixed(0)}`
                      }}
                    >
                      Get Started with This Plan
                    </Link>
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
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
                          <Link 
                            to={{
                              pathname: "/contact",
                              search: `?service=${service.id}&name=${encodeURIComponent(service.name)}&price=${encodeURIComponent(service.price)}`
                            }}
                          >
                            Inquire
                          </Link>
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
