import React from "react";
import styles from "./Warning.module.css";
const Warning = () => {
  return (
    <section className={`${styles.warning} `}>
      <div className={`${styles.wrapper} container`}>
        <h3>Aviso importante</h3>
        <p>
          As informações contidas nesta oferta não devem ser encaradas como
          garantia de resultados. Esse produto é um produto de educação que vai
          te passar todas as informações necessárias, ou seja, não há obrigação
          de resultado. Os resultados dependem da especificidades do seu caso e
          da sua dedicação com a aplicação dos conteúdos ensinados.
        </p>
      </div>
    </section>
  );
};

export default Warning;
