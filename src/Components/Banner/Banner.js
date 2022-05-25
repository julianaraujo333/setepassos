import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={`${styles.banner} `}>
      <ul className="container">
        <li>+30 alunos satisfeitos e prospectando</li>
        <li>Acompanhamento de perto e individualizado</li>
        <li>Aulas gravadas em plataforma estilo netflix</li>
        <li>7 Encontros de mentoria em grupo e individuais</li>
      </ul>
    </section>
  );
};

export default Banner;
