// pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Process from '../components/Process/Process';
import PortfolioShowcase from '../components/PortfolioShowcase/PortfolioShowcase';
import Testimonials from '../components/Testimonials/Testimonials';
import About from '../components/About/About';
import FinalCta from '../components/FinalCta/FinalCta';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className="homepage">
      <Hero />
      <Services />
      <Process />
      <PortfolioShowcase />
      <Testimonials />
      <About />
      <FinalCta />
    </main>
  );
};

export default HomePage;