import React from "react";
import Collapse from "./Collapse";
import styles from "./Questions.module.css";
import titulo from "./../../Assets/titulo/9.png";

const data = [
  {
    id: 1,
    title: "O 7 Passos é um curso ou uma mentoria?",
    content:
      "Os dois! Na formação 7 Passos você tem aulas gravadas no formato de curso, com material de apoio em PDF e exercícios. Mas também tem encontros de mentoria em grupo (com todos os colegas) e encontros de mentoria individual (reuniões pelo Google Meet entre eu e você). A junção desses dois formatos, curso + mentoria, garante uma experiência completa e a certeza de que você vai sair do 7 Passos com as estratégias do seu perfil totalmente alinhadas.",
  },
  {
    id: 2,
    title: "Quais são as formas de pagamento?",
    content:
      "Você pode escolher entre pagar com cartão de crédito em até 12x, pagar com 2 cartões de crédito, boleto ou PIX.",
  },
  {
    id: 3,
    title: "Quanto tempo dura?",
    content:
      "O acompanhamento do curso dura em média 4 meses. Durante esse período serão liberados os módulos com aulas gravadas (liberados gradualmente para que você não fique sobrecarregada) e acontecerão os encontros ao vivo de mentoria. Mas fique tranquila, mesmo acabando os 4 meses você poderá assistir as aulas e tirar dúvidas pelo período de 1 ano.",
  },
  {
    id: 4,
    title: "E se eu não puder assistir os encontros ao vivo?",
    content:
      "Não se preocupe, todas as aulas ao vivo ficam salvas na plataforma para você assistir quando quiser.",
  },
  {
    id: 5,
    title: "Como vou saber se ganhei os bônus?",
    content:
      "Assim que as inscrições forem encerradas vou entrar em contato com os ganhadores pelo WhatsApp",
  },
  {
    id: 5,
    title: "Para quem é o 7 Passos?",
    content:
      "O 7 Passos serve para você que é advogada, bacharela ou estudante de direito que quer aprender como criar conteúdo que atrai e converte clientes. Não é necessário que você já tenha um Instagram, pois no 7 Passos vou ensinar tudo o que você precisa saber, desde o mais básico até o avançado.",
  },
];

const Questions = () => {
  return (
    <section className={`${styles.questions}`}>
      <div className={`${styles.wrapper} container`}>
        <img src={titulo} alt="Perguntas frequentes" />
        <div>
          {data.map((question) => (
            <Collapse
              key={question.id}
              title={question.title}
              content={question.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
