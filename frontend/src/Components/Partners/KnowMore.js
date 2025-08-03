import React from 'react';
import styles from './KnowMore.module.css';


const KnowMore = () => {
  return (
    <div className={styles.knowMorePage}>
      <header className={styles.hero}>
        <h1>Welcome to Dolphin Car Spa</h1>
        <p>Your car deserves the best care — we make it shine like new!</p>
      </header>

      <section className={styles.section}>
        <img alt="Car Wash" className={styles.imageLeft} />
        <div className={styles.textContent}>
          <h2>Who We Are</h2>
          <p>
            Dolphin Car Spa is a premium car detailing service committed to making your car look and feel brand new.
            With years of experience and a passion for excellence, we provide top-notch services using eco-friendly
            products and the latest equipment.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.textContent}>
          <h2>Our Services</h2>
          <ul>
            <li>Full Interior & Exterior Car Wash</li>
            <li>Steam Cleaning & Sanitization</li>
            <li>Polishing & Waxing</li>
            <li>Ceramic Coating</li>
            <li>Paint Protection Film</li>
          </ul>
        </div>
        <img src="/images/spa2.jpg" alt="Services" className={styles.imageRight} />
      </section>

      <section className={styles.section}>
        <img src="/images/spa3.jpg" alt="Eco Friendly" className={styles.imageLeft} />
        <div className={styles.textContent}>
          <h2>Why Choose Us?</h2>
          <p>
            We treat every car as if it’s our own. Our trained staff uses the safest methods and premium products.
            Plus, we offer flexible booking and quick service at affordable prices. Satisfaction guaranteed!
          </p>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Book Your Spa Today!</h2>
        <p>Let your car sparkle with Dolphin Car Spa. Experience the shine today.</p>
        <button className={styles.ctaButton}>Schedule Now</button>
      </section>
    </div>
  );
};

export default KnowMore;
