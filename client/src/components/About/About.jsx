import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    rootMargin: '-50px 0px -50px 0px'
  });

  const [activeMember, setActiveMember] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Professional team data with updated titles and locations
  const teamMembers = [
    {
      id: 1,
      name: "Ali Awad Elkareem",
      title: "Co-Founder & Lead Web Developer",
      description: "With 4 years of experience in full-stack development and digital strategy, Ali leads Wexably's web development initiatives. His expertise in building high-performance, modern websites helps GTA businesses establish powerful online presences that drive real growth and engagement.",
      expertise: [
        "Full-Stack Web Development (MERN)",
        "UI/UX Design & Optimization", 
        "Search Engine Optimization (SEO)",
        "E-commerce Solutions"
      ],
      location: "Toronto, Canada"
    },
    {
      id: 2,
      name: "Ahmed Abdulrahim",
      title: "Co-Founder & Creative Director",
      description: "Bringing 3 years of expertise in visual storytelling and brand development, Ahmed transforms business visions into compelling visual content. His background in photography, videography, and data-driven content strategy ensures every brand story is told with impact and authenticity.",
      expertise: [
        "Content & Media Production",
        "Brand Photography & Videography",
        "Social Media Strategy",
        "Visual Brand Identity"
      ],
      location: "Toronto, Canada"
    },
    {
      id: 3, 
      name: "Omar Mahdi",
      title: "Co-Founder & Cybersecurity Specialist",
      description: "With 4 years of experience in cybersecurity and digital protection, Omar ensures that every Wexably project is built with security at its core. His international experience and expertise in threat assessment and security architecture provide clients with enterprise-grade protection for their digital assets.",
      expertise: [
        "Cybersecurity & Threat Assessment",
        "Network Security Architecture", 
        "Data Protection & Compliance",
        "Security Audits & Penetration Testing"
      ],
      location: "Netherlands (Remote)"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveMember((prev) => (prev + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, teamMembers.length]);

  const nextMember = () => {
    setActiveMember((prev) => (prev + 1) % teamMembers.length);
    setIsAutoPlaying(false);
  };

  const prevMember = () => {
    setActiveMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setIsAutoPlaying(false);
  };

  const goToMember = (index) => {
    setActiveMember(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="about-section" ref={ref} id="about">
      <div className="section-background">
        <div className="about-grid-overlay"></div>
      </div>
      
      <div className="container">
        <div className="about-header">
          <h2 className={`section-title fade-in-up ${isInView ? 'visible' : ''}`}>
            Meet Our <span className="gradient-text">Creative Team</span>
          </h2>
          <p className={`section-subtitle fade-in-up ${isInView ? 'visible' : ''}`}>
            A passionate team combining web development excellence with creative media production to bring your brand vision to life.
          </p>
        </div>

        <div className="team-slideshow">
          {/* Navigation Dots */}
          <div className="slider-dots">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeMember === index ? 'active' : ''}`}
                onClick={() => goToMember(index)}
                aria-label={`View ${teamMembers[index].name}'s profile`}
              />
            ))}
          </div>

          {/* Slideshow Container */}
          <div className="slideshow-container">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`slide ${activeMember === index ? 'active' : ''}`}
                style={{ 
                  display: activeMember === index ? 'block' : 'none',
                  opacity: activeMember === index ? 1 : 0
                }}
              >
                <div className="team-member-card">
                  <div className="member-image-section">
                    <div className="image-container">
                      <div className="main-image">
                        <div className="image-placeholder">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="member-badge">
                        <span className="experience-badge">{index === 0 ? '4' : index === 1 ? '3' : '4'}+ Years</span>
                      </div>
                    </div>
                    
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-title">{member.title}</p>
                      <p className="member-location">📍 {member.location}</p>
                    </div>
                  </div>

                  <div className="member-content">
                    <p className="member-description">{member.description}</p>
                    
                    <div className="expertise-section">
                      <h4>Core Expertise</h4>
                      <div className="expertise-grid">
                        {member.expertise.map((skill, i) => (
                          <div key={i} className="expertise-item">
                            <div className="expertise-icon">▸</div>
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="nav-arrow prev-arrow" onClick={prevMember} aria-label="Previous team member">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="nav-arrow next-arrow" onClick={nextMember} aria-label="Next team member">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Company Description */}
        <div className={`company-description fade-in-up ${isInView ? 'visible' : ''}`}>
          <h3>Our Mission</h3>
          <p>
            Founded in 2022, Wexably brings together web development expertise, creative media production, and cybersecurity to help GTA businesses shine online. 
            We believe every business deserves a stunning digital presence—from high-performance websites to eye-catching content that tells your story, all protected with enterprise-grade security.
          </p>
          <div className="company-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
