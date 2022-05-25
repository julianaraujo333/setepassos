import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import styles from "./Testimonial.module.css";
import title from "./../../Assets/titulo/6.png";

const Testimonial = () => {
  return (
    <section className={`${styles.testimonial} `}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.title}>
          <img src={title} alt="Resultados de quem fez o 7 passos" />
        </div>

        <Carrousel />
      </div>
    </section>
  );
};

export default Testimonial;
