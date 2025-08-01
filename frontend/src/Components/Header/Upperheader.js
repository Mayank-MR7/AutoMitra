import React from "react";
import styles from "./Upperheader.module.css";
import logo from "../../assets/logo.png";

const Upperheader = () => {
  return (
    <div className={styles.header}>

      <div className={styles.logoContainer}><img src={logo} alt="Logo" width="200" /></div>

      <h1 className={styles.title}>Automitra India Pvt. Ltd.</h1>
      <p className={styles.contact}>Contact: +919403893441</p>
    </div>
  );
};

export default Upperheader;
