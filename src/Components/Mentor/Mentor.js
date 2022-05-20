import React from "react";
import styles from "./Mentor.module.css";
import bio from "../../Assets/bio.jpg";

const Mentor = () => {
  return (
    <section className={`${styles.mentor} `}>
      <div className={`${styles.wrapper} container`}>
        <div>
          <h3>Quem será sua mentora?</h3>
          <p>
            Poliana Araújo, formada em direito, social media pela WTF Maison,
            consultora e especialista em marketing jurídico no Instagram. Já
            transformou mais de 100 advocacias através de consultas, mentorias e
            cursos. Defende que a internet veio para democratizar a advocacia e
            sua missão é ensinar marketing para advogados de uma forma ética e
            prática.
          </p>
        </div>
        <img src={bio} alt="Poliana Araújo" />
      </div>
    </section>
  );
};

export default Mentor;
