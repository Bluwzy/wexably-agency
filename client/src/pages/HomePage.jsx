import React from 'react';
import Hero from '../components/Hero/Hero';
import SEO from '../components/SEO/SEO';
import Services from '../components/Services/Services';
import Process from '../components/Process/Process';
import PortfolioShowcase from '../components/PortfolioShowcase/PortfolioShowcase';
import Testimonials from '../components/Testimonials/Testimonials';
import About from '../components/About/About';
import FinalCta from '../components/FinalCta/FinalCta';
import FeaturedMedia from '../components/FeaturedMedia/FeaturedMedia';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Wexably Agency - Web Design & Media Production | Toronto"
        description="Professional web design, content creation, and media production for Toronto businesses. We build stunning websites and create compelling visual content that drives growth for restaurants, retailers, and service companies across the GTA."
        keywords="web design Toronto, media production GTA, content creation, photography Toronto, videography services, website development Toronto"
        canonicalUrl="https://wexably.com/"
      />
      <main className="homepage performance-optimized">
        <Hero />
        <Services />
        <FeaturedMedia />
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
