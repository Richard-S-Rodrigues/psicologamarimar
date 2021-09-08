import type { NextPage } from "next";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <div className={styles.quote}>
          <p>
            "Se pudermos reorientar nossos pensamentos e emoções e reorganizar
            nosso comportamento, então poderemos não só aprender a lidar com o
            sofrimento mais facilmente, mas, sobretudo e em primeiro lugar,
            evitar que muito dele surja."
          </p>
          <p>Dalai Lama (1999)</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
