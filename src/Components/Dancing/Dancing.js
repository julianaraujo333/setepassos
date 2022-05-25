import React from "react";
import styles from "./Dancing.module.css";
import foto from "./../../Assets/foto2.png";
const Dancing = () => {
  return (
    <section className={`${styles.dancing} `}>
      <div className={`${styles.wrapper} container`}>
        <h3>Você não precisa de dancinhas</h3>
        <div className={styles.box}>
          <div>
            <p>
              Eu sei que não é fácil ver conteúdos bobos fazendo sucesso
              enquanto você gasta horas criando um post jurídico que acaba sendo
              totalmente ignorado.
            </p>
            <p>
              Só que você não precisa se render às tendências que te deixam
              desconfortável. É possível ter resultados no Instagram com
              conteúdos informativos e éticos, desde que você saiba deixar o
              direito interessante para o seu cliente.
            </p>
          </div>
          <img src={foto} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Dancing;
