import React from "react";
import styles from "./Home.module.css";
import title from "./../../Assets/nome.png";
import boleto from "./../../Assets/boleto.png";
import cartao from "./../../Assets/cartao.png";
import pix from "./../../Assets/pix.png";
import foto1 from "./../../Assets/foto1.png";
import Button from "../Button/Button";
const Home = () => {
  return (
    <section className={`${styles.home} `}>
      <div className={`${styles.wrapper} container`}>
        <img src={title} alt="7 passos para um perfil jurídico de sucesso" />
        <div>
          <div className={styles.text}>
            <p>
              Descubra os 7 Passos para atrair e converter clientes usando o
              Instagram e torne-se uma referência na sua área da advocacia
            </p>
            <div className={styles.button}>
              <Button />
              <li>
                <ul>
                  <img src={cartao} alt="cartão" />
                </ul>
                <ul>
                  <img src={boleto} alt="boleto" />
                </ul>
                <ul>
                  <img src={pix} alt="pix" />
                </ul>
              </li>
            </div>
          </div>
          <img className={styles.image} src={foto1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
