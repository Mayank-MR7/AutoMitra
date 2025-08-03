import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={`${styles.cardDescription} ${isExpanded ? styles.expanded : ""}`}>
          {description}
        </p>
        {description.length > 100 && ( // Show "Read More" if text is long
          <button className={styles.readMoreButton} onClick={toggleExpand}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;