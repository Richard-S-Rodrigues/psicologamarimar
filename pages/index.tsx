import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <section className={styles.imgContainer}>
          <div className={styles.image}>
            <Image
              src="/assets/online-therapy.png"
              alt="Terapia online"
              width="100"
              height="100"
              layout="responsive"
            />
            <a
              href="https://br.freepik.com/vetores/internet"
              style={{
                display: "flex",
                fontSize: "12px",
                justifyContent: "center",
                marginTop: 0,
                marginBottom: "2em",
              }}
              rel="noreferrer"
              target="_blank"
            >
              Imagem criada por vectorjuice - br.freepik.com
            </a>
          </div>
          <div className={styles.text}>
            <h2>
              Acompanhamento psicoterapêutico online, para cuidar da sua saúde
              mental no conforto da sua casa.
            </h2>
          </div>
        </section>
        <section className={styles.postsContainer}>
          <h2>POSTAGENS RECENTES</h2>
          <p>Nenhuma postagem criada ainda</p>
        </section>
      </main>
      <div className={styles.quote}>
        <p>
          &quot;Se pudermos reorientar nossos pensamentos e emoções e
          reorganizar nosso comportamento, então poderemos não só aprender a
          lidar com o sofrimento mais facilmente, mas, sobretudo e em primeiro
          lugar, evitar que muito dele surja.&quot;
        </p>
        <p>Dalai Lama (1999)</p>
      </div>
    </div>
  );
};

export default Home;
