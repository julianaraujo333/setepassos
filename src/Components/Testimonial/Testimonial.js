import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import styles from "./Testimonial.module.css";
const Testimonial = () => {
  return (
    <section className={`${styles.testimonial} `}>
      <div className={`${styles.wrapper} container`}>
        <h3>Resultados de quem fez o 7 passos</h3>
        <Carrousel />
      </div>
    </section>
  );
};

export default Testimonial;
