import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.card} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.cardImageContainer}>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={`${styles.cardDescription} ${isExpanded ? styles.expanded : ""}`}>
          {description}
        </p>
        {description.length > 150 && ( // Show "Read More" if text is long
          <div className={styles.readMore} onClick={toggleExpand}>
            {isExpanded ? "Read Less" : "Read More"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;