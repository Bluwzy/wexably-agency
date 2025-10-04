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
        description="We build fast, secure websites and marketing engines for Toronto-area plumbers, roofers, and dentists—so you can generate leads confidently without worrying about hackers, downtime, or missed opportunities."
        keywords="web design Toronto, GTA website development, secure websites, plumber websites, roofer websites, dentist websites, Toronto digital marketing, website security, lead generation"
        canonicalUrl="https://wexably.com/"
        ogType="website"
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
