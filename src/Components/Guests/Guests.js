import React from "react";
import styles from "./Guests.module.css";
import rodrigo from "../../Assets/rodrigo.png";
import juliana from "../../Assets/juliana.png";
import tallyta from "../../Assets/tallyta.png";
import kelly from "../../Assets/kelly.png";
import sthefania from "../../Assets/sthefaniacamila.png";
const Guests = () => {
  return (
    <section className={`${styles.guest} `}>
      <div className="container">
        <h3>Professores convidados</h3>
        <li className={styles.wrapper}>
          <ul>
            <div className={styles.list}>
              <img src={rodrigo} alt="Rodrigo Marins" />
              <li className={styles.sublist}>
                <ul>
                  <h3>Rodrigo Marins</h3>
                </ul>
                <ul>Como fazer tráfego pago no seu Instagram Jurídico</ul>
              </li>
            </div>
          </ul>
          <ul>
            <div className={styles.list}>
              <img src={juliana} alt="Juliana Cruz" />
              <li className={styles.sublist}>
                <ul>
                  <h3>Juliana Cruz</h3>
                </ul>
                <ul>Excelência no atendimento ao cliente</ul>
              </li>
            </div>
          </ul>
          <ul>
            <div className={styles.list}>
              <img src={tallyta} alt="Tallyta Szemczak" />
              <li className={styles.sublist}>
                <ul>
                  <h3>Tallyta Szemczak</h3>
                </ul>
                <ul>Como montar seu escritório digital</ul>
              </li>
            </div>
          </ul>
          <ul>
            <div className={styles.list}>
              <img src={kelly} alt="Kelly Basso" />
              <li className={styles.sublist}>
                <ul>
                  <h3>Kelly Basso</h3>
                </ul>
                <ul>Como aplicar visual law nos documentos jurídicos</ul>
              </li>
            </div>
          </ul>
          <ul>
            <div className={styles.list}>
              <img src={sthefania} alt="Sthefania Machado e Camila Muniz" />
              <li className={styles.sublist}>
                <ul>
                  <h3>Sthefania Machado e Camila Muniz</h3>
                </ul>
                <ul>Como precificar seus serviços corretamente</ul>
              </li>
            </div>
          </ul>
        </li>
      </div>
    </section>
  );
};

export default Guests;
