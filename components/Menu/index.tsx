import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";
import HeroImage from "/public/assets/bg-image-header.jpg";

import styles from "./index.module.css";

interface IMenuProps {
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ setIsMenu }: IMenuProps) => {
  const { pathname } = useRouter();

  return (
    <>
      <AiOutlineClose
        size={35}
        className={styles.closeBtn}
        onClick={() => setIsMenu(false)}
      />

      <div className={styles.container}>
        <Image
          className={styles.landingImage}
          src={HeroImage}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder={"blur"}
          priority={true}
        />
        <main>
          <Image src="/assets/logo.svg" alt="Logo" width="100" height="100" />
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a
                    className={pathname === "/" ? styles.activedLink : ""}
                    onClick={() => setIsMenu(false)}
                  >
                    Início
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a
                    className={pathname === "/sobre" ? styles.activedLink : ""}
                    onClick={() => setIsMenu(false)}
                  >
                    Sobre
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/atuacao">
                  <a
                    className={
                      pathname === "/atuacao" ? styles.activedLink : ""
                    }
                    onClick={() => setIsMenu(false)}
                  >
                    Atuação
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <a
                    className={
                      pathname === "/contato" ? styles.activedLink : ""
                    }
                    onClick={() => setIsMenu(false)}
                  >
                    Contato
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a
                    className={pathname === "/blog" ? styles.activedLink : ""}
                    onClick={() => setIsMenu(false)}
                  >
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </main>
      </div>
    </>
  );
};

export default Menu;
