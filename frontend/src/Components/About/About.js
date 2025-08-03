import React from "react";
import styles from "./About.module.css";

import heroImage from "../../assets/carrepair.jpeg";
import missionImage from "../../assets/carrepairtwo.jpg";
import workforceImage from "../../assets/carrepairthree.jpg";
import trainingImage from "../../assets/footerimage.jpg";
import supportImage from "../../assets/carrepair.jpeg";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2> About Us</h2>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1> AutoMitra</h1>
          <p>
            At AutoMitra, we are revolutionizing the automotive repair industry
            by bridging the gap between skilled mechanics and workshops in need
            of reliable professionals. Running a successful auto repair workshop
            means having the right team. Whether you need an experienced
            technician, a specialist in car diagnostics, or an all-rounder for
            general repairs, we connect you with verified, skilled, and reliable
            mechanics in just a few clicks.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img src={heroImage} alt="Hero" />
        </div>
      </div>

      {/* Mission Section */}
      <div className={styles.missionSection}>
        <div className={styles.missionImage}>
          <img src={missionImage} alt="Mission" />
        </div>
        <div className={styles.missionContent}>
          <h2>Our Mission</h2>
          <p>
            To empower mechanics with the right skills and provide workshops
            with highly trained professionals, ensuring top-quality service and
            efficiency in the automotive industry."Our mission is to
            revolutionize the way people interact with <b> AutoMitra</b>,
            bringing innovation, sustainability, and excellence to the forefront
            of everything we do. At the heart of our mission is a deep
            commitment to improving the lives of our customers, employees, and
            communities. We believe in fostering a culture of collaboration,
            inclusivity, and integrity, where everyone has the opportunity to
            contribute and grow. Sustainability is central to our vision, and we
            are dedicated to implementing eco-friendly practices to ensure a
            better future for generations to come. Ultimately, our mission is to
            inspire trust and loyalty, empower individuals, and drive positive
            change, one step at a time."
          </p>
        </div>
      </div>

      {/* What We Do Section */}
      <div className={styles.whatWeDoSection}>
        {/* <h2>What We Do</h2> */}
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <div className={styles.gridImage}>
              <img src={workforceImage} alt="Workforce Supply" />
            </div>
            <h3>Workforce Supply</h3>
            <p>
              We provide workshops with skilled and experienced mechanics on
              demand.
            </p>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.gridImage}>
              <img src={trainingImage} alt="Training & Certification" />
            </div>
            <h3>Training & Certification</h3>
            <p>
              We train and upskill mechanics to meet industry standards and the
              latest automotive technologies.
            </p>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.gridImage}>
              <img src={supportImage} alt="Workshop Support" />
            </div>
            <h3>Workshop Support</h3>
            <p>
              We help auto businesses streamline operations by offering them a
              reliable workforce without the hassle of hiring.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.whyChooseUsSection}>
        <h2>Why Choose Us?</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <h3>Skilled & Verified Mechanics</h3>
            <p>
              We ensure quality through rigorous training and background
              verification.
            </p>
          </div>
          <div className={styles.gridItem}>
            <h3>Hassle-Free Hiring</h3>
            <p>
              Workshops get on-demand mechanics without recruitment struggles.
            </p>
          </div>
          <div className={styles.gridItem}>
            <h3>Industry Expertise</h3>
            <p>
              Our team understands automotive repair and workshop needs,
              ensuring a perfect match.
            </p>
          </div>
          <div className={styles.gridItem}>
            <h3>Scalability & Flexibility</h3>
            <p>
              Whether you need a single mechanic or a full team, we’ve got you
              covered.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className={styles.ctaSection}>
        <p>
          At AutoMitra, we don’t just connect mechanics with jobs – we build
          careers, empower workshops, and drive the future of auto repair.
        </p>
        <p>
          <strong>Let’s fix the industry, together!</strong>
        </p>
      </div>
    </div>
  );
};

export default About;
