// components/PortfolioShowcase/PortfolioShowcase.jsx
import React from 'react';
import './PortfolioShowcase.css';

const PortfolioShowcase = () => {
  const projects = [
    {
      title: "Lasani Enterprise",
      description: "A modern, responsive website for a stone fabrication and installation company, showcasing their premium work and generating high-quality leads.",
      category: "Stone Fabrication",
      url: "https://lasanienterprise.com/",
      features: ["Responsive Design", "Project Gallery", "Lead Generation Forms", "SEO Optimized"],
      result: "40% increase in lead generation"
    },
    {
      title: "Airport Limo Toronto",
      description: "A sleek booking platform for luxury transportation services, focusing on user experience and conversion rate optimization.",
      category: "Transportation",
      url: "https://airportlimo-torontoservices.ca/",
      features: ["Online Booking System", "Mobile Optimization", "Payment Integration", "Service Gallery"],
      result: "25% higher conversion rate"
    }
  ];

  return (
    <section className="portfolio-showcase">
      <div className="container">
        <h2>Featured Work</h2>
        <p className="subtitle">
          While we've worked with various clients, these projects showcase our range of expertise in creating 
          conversion-focused websites for local businesses.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              
              <div className="project-image">
                {/* Placeholder that mentions the actual site */}
                <div className="website-preview">
                  <div className="browser-bar">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="browser-url">{project.url}</div>
                  </div>
                  <div className="website-placeholder">
                    Live Website: {project.url}
                  </div>
                </div>
              </div>
              
              <div className="project-details">
                <p>{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-result">
                  <strong>Result:</strong> {project.result}
                </div>
                
                <div className="project-links">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="view-site-link">
                    Visit Live Site ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="portfolio-cta">
          <p>Ready to create your success story?</p>
          <a href="/contact" className="cta-button">Start Your Project</a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;