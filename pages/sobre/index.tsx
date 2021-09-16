import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

const About: NextPage = () => (
  <>
    <div className={styles.container}>
      <main>
        <div className={styles.textContainer}>
          <h1>Marimar Nascimento</h1>
          <small>Marimar de Souza do Nascimento - CRP 05/66100</small>
          <p>
            Sou graduada em Psicologia pela UFRJ, e atualmente pós graduanda em
            Psicogerontologia e com formação em Terapia Cognitivo Comportamental
            (TCC) em andamento. Presto atendimento psicoterapêutico individual
            online para adultos (a partir dos 18 anos) e idosos, segundo a
            abordagem da <Link href="/atuacao">TCC</Link>.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/assets/photo.jpg"
            alt="Psicóloga"
            width="400"
            height="400"
            layout="intrinsic"
          />
        </div>
      </main>
    </div>
    <div className={styles.bgCurve}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#053E6B"
          fillOpacity="1"
          d="M0,128L40,112C80,96,160,64,240,53.3C320,43,400,53,480,74.7C560,96,640,128,720,149.3C800,171,880,181,960,197.3C1040,213,1120,235,1200,229.3C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  </>
);

export default About;
