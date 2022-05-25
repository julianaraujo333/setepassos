import React from "react";
import styles from "./Dancing.module.css";
const Dancing = () => {
  return (
    <section className={`${styles.dancing} `}>
      <div className={`${styles.wrapper} container`}>
        <h3>Você não precisa de dancinhas</h3>
      </div>
    </section>
  );
};

export default Dancing;
