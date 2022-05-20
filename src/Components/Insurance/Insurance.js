import React from "react";
import styles from "./Insurance.module.css";
import garantia from "../../Assets/garantia.png";
const Insurance = () => {
  return (
    <section className={`${styles.insurance} `}>
      <div className={`${styles.wrapper} container`}>
        <img src={garantia} alt="simbolo garantia" />
        <div>
          <h3>Risco zero!</h3>
          <p>
            Sinta-se segura para testar o 7 Passos sem compromisso. Você como
            advogada está ciente de que o Código de Defesa do Consumidor garante
            seu direito de arrependimento. Portanto, teste sem medo, caso não
            esteja satisfeita com o conteúdo liberado, eu vou devolver todo seu
            investimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
