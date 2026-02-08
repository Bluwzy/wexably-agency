import React, { useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PortfolioShowcase.css';

// Import logos
import lasaniLogo from '../../assets/optimized/Client-Logo_0003_lasani-hero1.webp';
import airportLimoLogo from '../../assets/optimized/Client-Logo_0000_Layer-1.webp';
import riyadhLogo from '../../assets/optimized/Client-Logo_0001_Layer-2.webp';
import torontoDentalLogo from '../../assets/optimized/Client-Logo_0002_Toronto-Dental-Specialists.webp';

const PortfolioShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    rootMargin: '-50px 0px -50px 0px'
  });

  const featuredClients = useMemo(() => [
    {
      id: 1,
      name: "Lasani Enterprise",
      industry: "International Trade & Distribution",
      result: "40% increase in qualified leads",
      logo: lasaniLogo,
      hasImage: true
    },
    {
      id: 2,
      name: "Airport Limo Toronto",
      industry: "Transportation",
      result: "25% higher conversion rate",
      logo: airportLimoLogo,
      hasImage: true
    },
    {
      id: 3,
      name: "Riyadh Construction Group",
      industry: "Construction",
      result: "30% reduction in inquiry response time",
      logo: riyadhLogo,
      hasImage: true
    },
    {
      id: 4,
      name: "Toronto Dental Specialists",
      industry: "Healthcare",
      result: "50% more online bookings",
      logo: torontoDentalLogo,
      hasImage: true
    }
  ], []);

  const stats = useMemo(() => [
    { value: "25+", label: "Web & media projects" },
    { value: "15+", label: "Brand types served" },
    { value: "6", label: "Cities & countries" },
    { value: "100%", label: "Client satisfaction" }
  ], []);

  return (
    <section className="portfolio-showcase" ref={ref}>
      <div className="container">
        <div className={`portfolio-header fade-in-up ${isInView ? 'visible' : ''}`}>
          <h2>
            Beautiful to watch, <span className="gradient-text">easy to use</span>
          </h2>
          <p className="subtitle">
            From cinematic food and event visuals to high‑performing websites, we help GTA brands look premium and feel effortless to use.
          </p>
        </div>

        <div className={`clients-grid stagger-children ${isInView ? 'visible' : ''}`}>
          {featuredClients.map((client) => (
            <div key={client.id} className="client-item">
              <div className={`client-logo ${client.hasImage ? 'with-image' : ''}`}>
                {client.hasImage ? (
                  <img src={client.logo} alt={`${client.name} logo`} />
                ) : (
                  <span>{client.logo}</span>
                )}
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
          <h3>See our web & media work</h3>
          <p>
            Explore detailed case studies and visuals to see how we combine content and development for real results.
          </p>
          <Link to="/portfolio" className="cta-button">
            View web & media projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
