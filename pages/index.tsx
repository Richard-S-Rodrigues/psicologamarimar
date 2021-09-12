import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <section className={styles.imgContainer}>
          <div>
            <Image
              src="/assets/online-therapy.svg"
              alt="Terapia online"
              width="600"
              height="600"
            />
          </div>
          <div>
            <h1>Faça consultas online no conforto da sua casa</h1>
          </div>
        </section>
        <section className={styles.postsContainer}>
          <h2>POSTAGENS RECENTES</h2>
          <p>Nenhuma postagem criada ainda</p>
        </section>
        <section className={styles.quote}>
          <p>
            "Se pudermos reorientar nossos pensamentos e emoções e reorganizar
            nosso comportamento, então poderemos não só aprender a lidar com o
            sofrimento mais facilmente, mas, sobretudo e em primeiro lugar,
            evitar que muito dele surja."
          </p>
          <p>Dalai Lama (1999)</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
