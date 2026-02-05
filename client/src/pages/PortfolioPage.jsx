import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './PortfolioPage.module.css';
import SEO from '../components/SEO/SEO';

const PortfolioPage = () => {
  // const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Lasani Enterprise",
      description: "Complete digital transformation for an international trade and distribution company with modern web design and enhanced user experience.",
      category: "web-development",
      industry: "International Trade & Distribution",
      image: "/images/lasani-hero1.png",
      results: ["40% increase in qualified leads", "35% faster page load times", "Modern, professional design", "25% reduced bounce rate"],
      tags: ["WordPress", "Custom Design", "SEO Optimization", "International", "Multilingual Ready"],
      link: "/portfolio/lasani-enterprise"
    },
    {
      id: 2,
      title: "Airport Limo Toronto",
      description: "Revamped booking platform for luxury transportation services with focus on user experience and conversion optimization.",
      category: "web-application",
      industry: "Transportation",
      image: "/images/Airport-Limo.jpg",
      results: ["25% higher conversion rate", "25% reduction in bounce rate", "25% faster booking process"],
      tags: ["Booking System", "Payment Integration", "Mobile Optimization", "UX Design"],
      link: "/portfolio/airport-limo-toronto"
    },
    {
      id: 3,
      title: "Riyadh Construction Group",
      description: "Corporate website and project management portal for a leading Saudi construction firm with bilingual support.",
      category: "international",
      industry: "Construction",
      image: "/images/Riyadh-Construction-Group.jpg",
      results: ["Streamlined client communication", "30% reduction in inquiry response time", "Improved project visibility"],
      tags: ["Bilingual (Arabic/English)", "Project Portfolio", "Client Portal", "Custom Design"],
      link: "/portfolio/riyadh-construction"
    },
    {
      id: 4,
      title: "Toronto Dental Specialists",
      description: "Modern practice website with appointment booking and patient education resources for a dental group.",
      category: "healthcare",
      industry: "Healthcare",
      image: "/images/Toronto-Dental-Specialists.jpg",
      results: ["50% more online bookings", "Reduced phone inquiries by 40%", "Improved patient education"],
      tags: ["Appointment Booking", "Patient Portal", "HIPAA Compliance", "Modern Design"],
      link: "/portfolio/toronto-dental"
    }
  ];

  // const filters = [
  //   { id: 'all', name: 'All Projects' },
  //   { id: 'web-development', name: 'Web Development' },
  //   { id: 'web-application', name: 'Web Applications' },
  //   { id: 'international', name: 'International' },
  //   { id: 'healthcare', name: 'Healthcare' }
  // ];

  // const filteredProjects = activeFilter === 'all' 
  //   ? projects 
  //   : projects.filter(project => project.category === activeFilter);

  const filteredProjects = projects; // Show all projects when filters are disabled

  return (
    <>
      <SEO
        title="Portfolio - Our Work & Case Studies | Wexably Agency"
        description="See our portfolio of stunning content, media production, and web design projects for GTA businesses. Case studies showing real results and increased engagement."
        keywords="web design portfolio Toronto, content production examples, media portfolio GTA, website design case studies"
        canonicalUrl="https://wexably.com/portfolio"
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
              "name": "Portfolio", 
              "item": "https://wexably.com/portfolio"
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
            Our <span className={styles.gradientText}>Work</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Discover how we've helped GTA businesses stand out with stunning visuals and high-performance websites
          </motion.p>
        </div>
      </section>

      {/* Filters - COMMENTED OUT */}
      {/* <section className={styles.filtersSection}>
        <div className={styles.filtersContainer}>
          <h2>Filter Projects</h2>
          <div className={styles.filterButtons}>
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <Link to={project.link} className={styles.viewCaseStudy}>
                    View Case Study
                  </Link>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3>{project.title}</h3>
                  <span className={styles.industry}>{project.industry}</span>
                </div>
                
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.results}>
                  <h4>Key Results:</h4>
                  <ul>
                    {project.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                
                <Link to={project.link} className={styles.ctaButton}>
                  Read Full Case Study
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to create your success story?</h2>
          <p>Let's discuss how we can elevate your brand with compelling content and a high-performance website.</p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryButton}>
              Start Your Project
            </Link>
            <Link to="/services" className={styles.secondaryButton}>
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default PortfolioPage;
