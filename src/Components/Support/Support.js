import React from "react";
import Button from "../Button/Button";
import styles from "./Support.module.css";
import whatsapp from "../../Assets/whatsapp.png";
const Support = () => {
  return (
    <section className={`${styles.support} `}>
      <div className={`${styles.wrapper} container`}>
        <img src={whatsapp} alt="Whatsapp" />
        <div>
          <h3>Ainda não tem certeza ou está com alguma dúvida?</h3>
          <p>
            Entre em contato sem qualquer compromisso. Eu e a minha equipe vamos
            te ajudar!
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Support;
