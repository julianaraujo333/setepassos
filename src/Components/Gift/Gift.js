import React from "react";
import styles from "./Gift.module.css";
const Gift = () => {
  return (
    <section className={`${styles.gift}`}>
      <div className={`${styles.wrapper} container`}>
        <h3>Bônus especiais</h3>
        <div className={`${styles.box}`}>
          <div>
            <span>Para o 1º que comprar:</span>
            <h4>Box Rotina da Manhã</h4>
            <p>
              Um kit com café, caneca, caderno de anotações e 4 livros + aula
              exclusiva ensinando como gravo meus vídeos de bom dia.
            </p>
          </div>

          <div>
            <span>Para os 5 primeiros:</span>
            <h4>Análise de identidade visual</h4>
            <p>
              Análise completa feita em reunião no Google Meet onde vou
              verificar tudo o que pode ser melhorado na estética do seu perfil.
            </p>
          </div>

          <div>
            <span>Para quem entrar até às 23h59 do dia 28/05:</span>
            <h4>Imersão Botando Ordem</h4>
            <p>
              Nela você e eu vamos criar um planejamento de conteúdo eficiente e
              que você consegue cumprir para trazer resultados no seu perfil.
            </p>
          </div>

          <div>
            <span>Para todos:</span>
            <h4>Stories Viciantes</h4>
            <p>
              Uma aula exclusiva onde você vai descobrir como ter stories
              impossíveis de serem ignorados + 7 roteiros para você aplicar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;
