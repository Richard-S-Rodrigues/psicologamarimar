import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

const Header = () => (
  <div className={styles.container}>
    <header>
      <section className={styles.titleContainer}>
        <div>
          <Image src="/assets/logo.svg" alt="Logo" width="100" height="100" />
          <h1>MARIMAR NASCIMENTO</h1>
          <small>PSICÓLOGA | CRP 05/6100</small>
        </div>
        <div className={styles.telephoneInfo}>
          Telefone/WhatsApp: (21) 97400-9839
        </div>
      </section>
      <section className={styles.navContainer}>
        <nav>
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/atuacao">Atuação</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </section>
    </header>
    <section>
      <h2>Psicoterapia individual online para adultos e idosos.</h2>
      <button>ENTRE EM CONTATO</button>
    </section>
  </div>
);

export default Header;
