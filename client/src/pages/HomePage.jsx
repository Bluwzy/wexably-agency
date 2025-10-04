// pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero/Hero';
import SEO from '../components/SEO/SEO';
import Services from '../components/Services/Services';
import Process from '../components/Process/Process';
import PortfolioShowcase from '../components/PortfolioShowcase/PortfolioShowcase';
import Testimonials from '../components/Testimonials/Testimonials';
import About from '../components/About/About';
import FinalCta from '../components/FinalCta/FinalCta';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Wexably Agency - Secure Growth Partner for GTA Businesses"
        description="Professional website security and digital marketing for Toronto businesses. We build secure, fast websites that generate leads for plumbers, roofers, dentists, and service companies across the GTA."
        keywords="website security Toronto, GTA web development, secure websites, digital marketing Toronto, cybersecurity services, web design GTA"
        canonicalUrl="https://wexably.com/"
      />
    <main className="homepage performance-optimized">
      <Hero />
      <Services />
      <Process />
      <PortfolioShowcase />
      <Testimonials />
      <About />
      <FinalCta />
    </main>
    </>
  );
};

export default HomePage;
