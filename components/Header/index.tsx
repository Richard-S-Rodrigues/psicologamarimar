import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import HeroImage from "/public/assets/bg-image-header.jpg";
import styles from "./index.module.css";
import Menu from "../Menu";

const Header = () => {
  const { pathname, push } = useRouter();
  const [isMenu, setIsMenu] = useState(false);

  return isMenu ? (
    <Menu setIsMenu={setIsMenu} />
  ) : (
    <div className={styles.container}>
      <Image
        src={HeroImage}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder={"blur"}
        priority={true}
      />

      <header>
        <section className={styles.titleContainer}>
          <div>
            <Image src="/assets/logo.svg" alt="Logo" width="100" height="100" />
            <h1>MARIMAR NASCIMENTO</h1>
            <small>PSICÓLOGA | CRP 05/66100</small>
          </div>
          <div className={styles.telephoneAndMenuContainer}>
            <div className={styles.telephoneInfo}>
              WhatsApp: (21) 97400-9839
            </div>
            <GiHamburgerMenu
              size={28}
              className={styles.menuBtn}
              onClick={() => setIsMenu(true)}
            />
          </div>
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
      <section className={styles.contactContainer}>
        <h2>Psicoterapia individual online para adultos e idosos.</h2>
        <button onClick={() => push("/contato")}>ENTRE EM CONTATO</button>
      </section>
    </div>
  );
};

export default Header;
