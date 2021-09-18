import type { NextPage } from "next";
import Image from "next/image";

import styles from "./index.module.css";

const Atuacao: NextPage = () => (
  <div className={styles.container}>
    <main>
      <h1>Terapia Cognitivo-Comportamental (TCC)</h1>
      <div className={styles.text1}>
        <p>
          É comum pensar que a psicologia é algo &quot;único&quot; e será
          aplicada na terapia da mesma forma por todo e qualquer psicólogo. No
          entanto, ela é um campo muito diverso e amplo, compreendendo diversas
          linhas de atuação. Ou seja, a psicoterapia possui diferentes
          abordagens, e cada psicólogo utiliza-se de pelo menos uma delas em sua
          atuação.
        </p>
        <p>
          <Image
            src="/assets/brain-icon.svg"
            alt="Ícone cérebro"
            width="200"
            height="200"
            layout="fixed"
          />
        </p>
      </div>
      <div>
        <p>
          Minha abordagem dentro da Psicologia é a Terapia
          Cognitivo-Comportamental (TCC). De forma simplificada, a TCC é baseada
          na ideia de que as nossas cognições (pensamentos) têm grande
          influência sobre nossas emoções e comportamentos. Isso significa que,
          quando vivenciamos alguma situação, não é a situação em si que vai
          determinar nossas ações e emoções perante ela, mas sim a forma como
          interpretamos essa situação.{" "}
        </p>
      </div>
      <div className={styles.text2}>
        <p>
          <Image
            src="/assets/brain-icon-2.svg"
            alt="Ícone cérebro - 2"
            width="200"
            height="200"
            layout="fixed"
          />
        </p>
        <p>
          As teorias e métodos da TCC foram desenvolvidos inicialmente pelo
          médico e psicanalista Aaron T. Beck por volta das décadas de 1960 e
          1970 e influenciaram a evolução de diversas técnicas mais específicas
          utilizadas atualmente. Inicialmente focada nos quadros de depressão e
          ansiedade, hoje a TCC também é utilizada para tratar casos de
          transtornos alimentares, bipolaridade, transtornos de personalidade,
          esquizofrenia, dor crônica, abuso de substâncias, entre outros.
        </p>
      </div>
    </main>
  </div>
);

export default Atuacao;
