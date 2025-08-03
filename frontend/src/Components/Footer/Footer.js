import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/AutoMitra.jpg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}></div> {/* Overlay div */}
      <div className={styles.contactInfo}>
        <h3>Contact Us</h3>
        <p>
          <span role="img" aria-label="location">
            📍
          </span>{" "}
          5/103 Global Hill View, Gurugram
        </p>
        <p>
          <span role="img" aria-label="phone">
            📞
          </span>{" "}
       +919403893441
        </p>
        <p>
          <span role="img" aria-label="email">
            📧
          </span>{" "}
          <a href="mailto:contact@hiremechanics.com">
            contact@hiremechanics.com
          </a>
        </p>
        <p>
          <span role="img" aria-label="website">
            🌐
          </span>{" "}
          <a
            href="https://www.hire-mechanics.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.hire-mechanics.com
          </a>
        </p>
      </div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.mapContainer}>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.123456789012!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
