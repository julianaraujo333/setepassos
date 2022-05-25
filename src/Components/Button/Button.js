import React from "react";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <a
        href="https://pay.kiwify.com.br/EacdbiQ"
        target="_blank"
        className={styles.button}
      >
        Quero garantir minha vaga
      </a>
    </div>
  );
};

export default Button;
