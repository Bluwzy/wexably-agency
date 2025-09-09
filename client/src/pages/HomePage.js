import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomepageHero from '../components/HomepageHero';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <HomepageHero />
        
        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2>Why Choose Wexably?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.feature}>
                <div className={styles.icon}>🔒</div>
                <h3>Secure by Design</h3>
                <p>Built with cybersecurity fundamentals from the ground up to protect your business.</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>🚀</div>
                <h3>Lightning Fast</h3>
                <p>Optimized for speed and performance to keep visitors engaged and improve SEO.</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>📈</div>
                <h3>Results Driven</h3>
                <p>Designed to convert visitors into customers and grow your business.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Ready to Transform Your Online Presence?</h2>
            <p>Get started with a free website audit today.</p>
            <a href="/contact" className={styles.ctaButton}>Get Your Free Audit</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;