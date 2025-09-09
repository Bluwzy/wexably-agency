import React from 'react';
import styles from './PortfolioPage.module.css';

const PortfolioPage = () => {
  const projects = [
    {
      title: "Local Plumbing Co. Website",
      description: "A complete website redesign that increased leads by 40%",
      image: "/api/placeholder/300/200",
      tags: ["Web Design", "SEO", "WordPress"]
    },
    {
      title: "Restaurant Booking System",
      description: "Custom online reservation system with payment integration",
      image: "/api/placeholder/300/200",
      tags: ["Web App", "React", "Node.js"]
    },
    {
      title: "E-commerce Store",
      description: "Online store with inventory management and secure checkout",
      image: "/api/placeholder/300/200",
      tags: ["E-commerce", "Security", "Payment Processing"]
    }
  ];

  return (
    <div className={styles.container}>
      <h1>Our Portfolio</h1>
      <p>See how we've helped businesses like yours succeed online</p>
      
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;