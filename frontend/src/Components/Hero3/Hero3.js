import React from "react";
import styles from "./Hero3.module.css";
import Card from "./Card"; 
import carrepair from "../../assets/carrepair.jpeg";
import carrepairtwo from "../../assets/carrepairtwo.jpg";

const services = [
  {
    title: "Preventative Maintenance",
    description:
      "The best way to minimize breakdowns is doing routine maintenance.",
    image: carrepair,
  },
  {
    title: "Cleaning & Shine",
    description:
      "Try our Cleaning & Shine package that is very pocket-friendly.",
    image: carrepairtwo,
  },
  {
    title: "Wheel Works",
    description:
      "We offer all types of Wheel care solutions to our clients.",
    image: carrepair,
  },
  {
    title: "Tire & Alignment Care",
    description:
      "Ensure a safe and smooth drive with precision balancing and alignment.",
    image: carrepair,
  },
  {
    title: "Full Vehicle Inspection",
    description:
      "A thorough multi-point check to keep your vehicle in top condition.",
    image: carrepairtwo,
  },
  {
    title: "Engine Health Check",
    description:
      "Detect issues early and extend your engine’s life with expert diagnostics.",
    image: carrepair,
  },
];

const Hero3 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Workshop Services</h2>
      <p className={styles.subheading}>Keep your vehicle in top condition with our expert services.</p>
      <div className={styles.underline}></div>
      <div className={styles.cardContainer}>
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero3;