import React from "react";
import styles from "./Details.module.css";
import title from "./../../Assets/titulo/7.png";
import { AiOutlineCheck } from "react-icons/ai";
import boleto from "./../../Assets/boleto.png";
import cartao from "./../../Assets/cartao.png";
import pix from "./../../Assets/pix.png";
import Button from "../Button/Button";
const Details = () => {
  return (
    <section className={`${styles.details} `}>
      <div className={`${styles.wrapper} container`}>
        <img src={title} alt="Condição unica" />
        <div className={styles.list}>
          <ul>
            <li>
              <AiOutlineCheck color="#254528" size={30} />
              <span>Treinamento completo</span>
            </li>
            <li>
              <AiOutlineCheck color="#254528" size={30} />
              <span>7 encontros de mentoria</span>
            </li>
            <li>
              <AiOutlineCheck color="#254528" size={30} />
              <span>PDFs e materiais complementares</span>
            </li>
            <li>
              <AiOutlineCheck color="#254528" size={30} />
              <span>Exercícios práticos para aplicar no seu perfil</span>
            </li>
          </ul>

          <ul>
            <li>
              <AiOutlineCheck color="#254528" size={30} />
              <span>WhatsApp para suporte e networking</span>
            </li>
            <li>
              <AiOutlineCheck color="#254528" size={30} />
              <span>
                Aula bônus de stories viciantes + 7 roteiros de stories
              </span>
            </li>
            <li>
              <AiOutlineCheck color="#254528" size={30} />
              <span>Aulas com convidados</span>
            </li>
            <li>
              <AiOutlineCheck color="#254528" size={30} />
              <span>1 ano de acesso</span>
            </li>
          </ul>
        </div>
        <div className={styles.box}>
          <span>12x de</span>
          <p>90,06</p>
          <span>ou R$ 897,00 à vista</span>
          <div className={styles.button}>
            <a href="https://pay.kiwify.com.br/EacdbiQ">
              Quero garantir minha vaga
            </a>
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
      </div>
    </section>
  );
};

export default Details;
