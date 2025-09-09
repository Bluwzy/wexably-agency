import React from 'react';
import styles from './HomepageHero.module.css';
import { Link } from 'react-router-dom';

const HomepageHero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>
        Stop Losing Customers Online. Get a Secure, Lead-Generating Website.
      </h1>
      <Link to="/contact" className={styles.cta}>
        Free Website Audit
      </Link>
    </section>
  );
};

export default HomepageHero;