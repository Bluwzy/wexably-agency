import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PortfolioShowcase.css';

const PortfolioShowcase = () => {
  const featuredClients = [
    {
      id: 1,
      name: "Lasani Enterprise",
      industry: "Stone Fabrication",
      result: "40% increase in lead generation",
      logo: "LE",
      color: "#3B82F6"
    },
    {
      id: 2,
      name: "Airport Limo Toronto",
      industry: "Luxury Transportation",
      result: "25% higher conversion rate",
      logo: "ALT",
      color: "#8B5CF6"
    },
    {
      id: 3,
      name: "Riyadh Construction",
      industry: "Construction",
      result: "30% faster response time",
      logo: "RCG",
      color: "#10B981"
    },
    {
      id: 4,
      name: "Jeddah Properties",
      industry: "Real Estate",
      result: "28% more qualified leads",
      logo: "JLP",
      color: "#F59E0B"
    }
  ];

  const stats = [
    { value: "25+", label: "Projects Completed" },
    { value: "15+", label: "Industries Served" },
    { value: "6", label: "Countries" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section className="portfolio-showcase">
      <div className="container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </motion.h2>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            We've helped businesses across various industries achieve remarkable results with our secure growth solutions
          </motion.p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div 
          className="clients-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {featuredClients.map((client, index) => (
            <motion.div 
              key={client.id}
              className="client-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="client-logo" style={{ background: client.color }}>
                {client.logo}
              </div>
              <div className="client-info">
                <h4>{client.name}</h4>
                <p className="client-industry">{client.industry}</p>
                <p className="client-result">{client.result}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="stats-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>See our complete portfolio</h3>
          <p>Explore detailed case studies and see how we've helped businesses achieve secure growth</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/portfolio" className="cta-button">
              View Full Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;