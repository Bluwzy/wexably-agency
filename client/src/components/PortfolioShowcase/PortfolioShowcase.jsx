import React, { useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PortfolioShowcase.css';

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
      industry: "E‑commerce & Product Media",
      result: "40% lift in product inquiries",
      logo: "LE",
      color: "#3B82F6"
    },
    {
      id: 2,
      name: "Airport Limo Toronto",
      industry: "Luxury Transport & Brand Site",
      result: "25% higher booking conversion",
      logo: "ALT",
      color: "#8B5CF6"
    },
    {
      id: 3,
      name: "Riyadh Construction",
      industry: "Construction Web Presence",
      result: "30% faster lead responses",
      logo: "RCG",
      color: "#10B981"
    },
    {
      id: 4,
      name: "Jeddah Properties",
      industry: "Real Estate Visuals & Site",
      result: "28% more qualified leads",
      logo: "JLP",
      color: "#F59E0B"
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
