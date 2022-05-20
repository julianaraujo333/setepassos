import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={`${styles.banner} `}>
      <li className="container">
        <ul>+30 alunos satisfeitos e prospectando</ul>
        <ul>Acompanhamento de perto e individualizado</ul>
        <ul>Aulas gravadas em plataforma estilo netflix</ul>
        <ul>7 Encontros de mentoria em grupo e individuais</ul>
      </li>
    </section>
  );
};

export default Banner;
