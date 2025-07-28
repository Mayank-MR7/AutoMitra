import React from 'react';
import styles from './Cards.module.css'; // Your card-specific styles

const Card = ({ image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="Partner" className={styles.image} />
    </div>
  );
};

export default Card;