import Link from "next/link";

import styles from "../styles/404.module.css";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1>404 - Página não encontrada</h1>
      <Link href="/">
        <a>Voltar para a página inicial</a>
      </Link>
    </div>
  );
}
