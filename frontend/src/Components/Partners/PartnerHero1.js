import React from "react";
import styles from "./PartnerHero1.module.css";
import partners from "../../assets/partners.jpg";

const PartnerHero1 = () => {
   return <div className={styles.container}>
            <div className={styles.imageBox}>
              <h1 className={styles["overlay-text"]}>Our Valued Partners,the pillars of our success</h1>
          
              <img src={partners} alt="partners"  loading="eager" />
            </div>
          </div>
}

export default PartnerHero1;
