import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// REMOVED: ScrollStabilizer import
import ErrorBoundary from './components/UI/ErrorBoundary';
import LoadingSpinner from './components/UI/LoadingSpinner';
import './App.css';

// Standard import for HomePage to prevent jiggling
import HomePage from './pages/HomePage';

// Lazy load other pages
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const LasaniEnterpriseCaseStudy = lazy(() => import('./CaseStudies/LasaniEnterprise/LasaniEnterpriseCaseStudy'));

function App() {
  useEffect(() => {
    // GENTLE fix for jiggling - only target problematic elements
    const style = document.createElement('style');
    style.textContent = `
      /* Only fix elements that actually cause jiggling */
      .hero-background,
      .particles,
      .gradient-orbs {
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
      
      /* Prevent layout shifts during loading */
      .App {
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {/* REMOVED: <ScrollStabilizer /> */}
        <Header />
        <ScrollToTop />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/services" element={
              <ErrorBoundary>
                <Suspense fallback={
                  <div className="route-fallback">
                    <LoadingSpinner />
                  </div>
                }>
                  <ServicesPage />
                </Suspense>
              </ErrorBoundary>
            } />
            
            <Route path="/portfolio" element={
              <ErrorBoundary>
                <Suspense fallback={
                  <div className="route-fallback">
                    <LoadingSpinner />
                  </div>
                }>
                  <PortfolioPage />
                </Suspense>
              </ErrorBoundary>
            } />
            
            <Route path="/portfolio/lasani-enterprise" element={
              <ErrorBoundary>
                <Suspense fallback={
                  <div className="route-fallback">
                    <LoadingSpinner />
                  </div>
                }>
                  <LasaniEnterpriseCaseStudy />
                </Suspense>
              </ErrorBoundary>
            } />
            
            <Route path="/contact" element={
              <ErrorBoundary>
                <Suspense fallback={
                  <div className="route-fallback">
                    <LoadingSpinner />
                  </div>
                }>
                  <ContactPage />
                </Suspense>
              </ErrorBoundary>
            } />
            
            <Route path="*" element={
              <ErrorBoundary>
                <Suspense fallback={
                  <div className="route-fallback">
                    <LoadingSpinner />
                  </div>
                }>
                  <NotFoundPage />
                </Suspense>
              </ErrorBoundary>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;