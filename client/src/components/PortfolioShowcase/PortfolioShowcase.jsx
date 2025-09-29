import React, { useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PortfolioShowcase.css';

const PortfolioShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
  once: true, 
  amount: 0.1, // Reduced from 0.3 to 0.1 for mobile
  rootMargin: '-50px 0px -50px 0px' // Added root margin
});

  const featuredClients = useMemo(() => [
    {
      id: 1,
      name: "Lasani Enterprise",
      industry: "International Trade & Distribution",
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
  ], []);

  const stats = useMemo(() => [
    { value: "25+", label: "Projects Completed" },
    { value: "15+", label: "Industries Served" },
    { value: "6", label: "Countries" },
    { value: "100%", label: "Client Satisfaction" }
  ], []);

  return (
    <section className="portfolio-showcase" ref={ref}>
      <div className="container">
        <div className={`portfolio-header fade-in-up ${isInView ? 'visible' : ''}`}>
          <h2>Trusted by <span className="gradient-text">Industry Leaders</span></h2>
          <p className="subtitle">
            We've helped businesses across various industries achieve remarkable results with our secure growth solutions
          </p>
        </div>

        <div className={`clients-grid stagger-children ${isInView ? 'visible' : ''}`}>
          {featuredClients.map((client, index) => (
            <div key={client.id} className="client-item">
              <div className="client-logo" style={{ background: client.color }}>
                {client.logo}
              </div>
              <div className="client-info">
                <h4>{client.name}</h4>
                <p className="client-industry">{client.industry}</p>
                <p className="client-result">{client.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`stats-section fade-in-up ${isInView ? 'visible' : ''}`}>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={`stat-${index}`} className="stat-item">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`portfolio-cta fade-in-up ${isInView ? 'visible' : ''}`}>
          <h3>See our complete portfolio</h3>
          <p>Explore detailed case studies and see how we've helped businesses achieve secure growth</p>
          <Link to="/portfolio" className="cta-button">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;