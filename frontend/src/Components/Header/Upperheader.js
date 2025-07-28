import React from "react";
import styles from "./Upperheader.module.css";
import logo from "../../assets/logo.png";

const Upperheader = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="AutoMitra" className={styles.logo} />

      <h1 className={styles.title}>Automitra India Pvt. Ltd.</h1>

      <p className={styles.contact}>Contact: 9023306474</p>
    </div>
  );
};

export default Upperheader;
