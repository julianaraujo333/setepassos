import React from "react";
import styles from "./Dancing.module.css";
import foto from "./../../Assets/foto2.png";
import title from "./../../Assets/titulo/1.png";
const Dancing = () => {
  return (
    <section className={`${styles.dancing} `}>
      <div className={`${styles.wrapper} container`}>
        <img src={title} alt="Você não precisa de dancinhas" />
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
