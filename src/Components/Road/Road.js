import React from "react";
import styles from "./Road.module.css";
import title from "./../../Assets/titulo/3.png";
const Road = () => {
  return (
    <section className={`${styles.road} `}>
      <div className={`${styles.wrapper} container`}>
        <img src={title} alt="Com esse caminho você será capaz de:" />
        <div className={styles.list}>
          <ul>
            <li>
              <p>Criar conteúdo com mais facilidade e rapidez</p>
            </li>
            <li>
              <p>Atingir o público certo</p>
            </li>
            <li>
              <p>Segurança para se posicionar no digital</p>
            </li>
          </ul>

          <ul>
            <li>
              <p>Fechar contratos e consultas através do Instagram</p>
            </li>
            <li>
              <p>Aumentar o engajamento e alcance do seu perfil</p>
            </li>
            <li>
              <p>Crescer seu perfil e se destacar na profissão</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Road;
