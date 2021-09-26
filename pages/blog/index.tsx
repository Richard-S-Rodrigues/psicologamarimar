import Image from "next/image";

import styles from "./index.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.postCard}>
          <div>
            <h1>Idosos precisam de terapia?</h1>
            <small>
              <Image
                src="/assets/calendar-icon.svg"
                alt="Calendário"
                width="15"
                height="15"
                layout="fixed"
              />
              25/09/2021
            </small>
          </div>
          <div>
            <Image
              src="/assets/blog/idodos-tambem-precisam-de-terapia/cover-image.jpg"
              alt="Idosos precisam de terapia?"
              width={2400}
              height={1598}
              layout="responsive"
            />
            <p>
              Como qualquer faixa etária, a terceira idade também possui suas
              próprias dores e demandas em saúde mental. Isso significa que,
              assim como crianças, adolescentes e adultos, os idosos também
              passam por sofrimento psicológico em decorrência de dua idade, e
              também carecem de terapia em alguns casos. Para citar um exemplo,
              o idoso pode apresentar dificuldades em sentir-se pertencente à
              sociedade, uma vez que seu espaço começa a ficar limitado conforme
              a idade avança. Em muitos casos o ambiente profissional deixa de
              ser uma opção com a chegada da aposentadoria, e ambientes de lazer
              não são prioridade quando a saúde está fragilizada e ficar em casa
              passa a ser uma "questão de segurança". Outro exemplo comum é o
              sentimento de solidão, tanto pelas perdas que acumulam-se com o
              passar da vida, quanto pela dificuldade de comunicação com as
              gerações mais jovens. O idoso percebe, ao longo dos anos, diversas
              mudanças sociais, algumas delas são difícies de assimilar porque
              podem romper com sua visão de mundo. É comum também que haja uma
              perda ou diminuição de algumas capacidades e habilidades
              cognitivas e físicas, que também pode levar a um sofrimento
              psíquico. Um agravante disso é a mudança de tratamento que o idoso
              sofre, passando a ser visto como um ser frágil, que precisa ser
              cuidado e muitas vezes é associado à um bebê. Assim, a terapia
              passar a ser um ambiente de acolhimento, no qual o idoso pode
              comunicar suas demandas e trabalhar junto ao psicólogo para a
              resolução ou melhor aceitação de seus problemas. Além disso,
              também trabalhamos colaborativamente para atenuar ou eliminar
              sintomas psicológicos, aumentando o bem-estar.
            </p>
          </div>
          <button>LER MAIS</button>
        </div>
      </main>
    </div>
  );
};

export default Blog;
