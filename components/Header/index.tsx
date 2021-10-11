import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

const Header = () => {
  const { pathname, push } = useRouter();

  return (
    <div className={styles.container}>
      <Image
        className={styles.landingImage}
        src="/assets/backup-images/bg-image-header.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      />
      <header>
        <section className={styles.titleContainer}>
          <div>
            <Image src="/assets/logo.svg" alt="Logo" width="100" height="100" />
            <h1>MARIMAR NASCIMENTO</h1>
            <small>PSICÓLOGA | CRP 05/66100</small>
          </div>
          <div className={styles.telephoneInfo}>WhatsApp: (21) 97400-9839</div>
        </section>
        <section className={styles.navContainer}>
          <nav>
            <Link href="/">
              <a className={pathname === "/" ? styles.activedLink : ""}>
                Início
              </a>
            </Link>
            <Link href="/sobre">
              <a className={pathname === "/sobre" ? styles.activedLink : ""}>
                Sobre
              </a>
            </Link>
            <Link href="/atuacao">
              <a className={pathname === "/atuacao" ? styles.activedLink : ""}>
                Atuação
              </a>
            </Link>
            <Link href="/contato">
              <a className={pathname === "/contato" ? styles.activedLink : ""}>
                Contato
              </a>
            </Link>
            <Link href="/blog">
              <a className={pathname === "/blog" ? styles.activedLink : ""}>
                Blog
              </a>
            </Link>
          </nav>
        </section>
      </header>
      <section>
        <h2>Psicoterapia individual online para adultos e idosos.</h2>
        <button onClick={() => push("/contato")}>ENTRE EM CONTATO</button>
      </section>
    </div>
  );
};

export default Header;
