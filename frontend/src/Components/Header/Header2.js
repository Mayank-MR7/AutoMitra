import React from "react";
import styles from "../Header/Header2.module.css";

const Header2 = () => {
  return (
    <div className={styles.para}>
      <p>
        {" "}
        Note: *** We are Hiring Mechanics ***{" "}
        <span className={styles.span}></span>⚠️ नोट: *** हम मैकेनिक रख रहे हैं
        ***{" "}
      </p>
    </div>
  );
};

export default Header2;
