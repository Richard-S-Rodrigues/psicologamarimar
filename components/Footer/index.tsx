import Image from "next/image";

import styles from "./index.module.css";

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.mainContainer}>
      <section className={styles.contactsContainer}>
        <div>
          <Image
            src="/assets/logo-black.svg"
            alt="Logo"
            width="50"
            height="50"
          />
        </div>
        <div>
          <div>
            <Image
              src="/assets/whatsapp-icon.svg"
              alt="Ícone do WhatSapp"
              width="1"
              height="1"
              layout="fixed"
            />
            (21) 97400-9839
          </div>
          <div>
            <Image
              src="/assets/mail-icon.svg"
              alt="Ícone de E-mail"
              width="1"
              height="1"
              layout="fixed"
            />
            marimarnascimento@gmail.com
          </div>
        </div>
      </section>
      <section className={styles.aboutContainer}>
        <div>
          <Image
            src="/assets/photo.jpg"
            alt="Psicóloga"
            width="100"
            height="100"
            layout="fixed"
          />
          <div>
            <h3>Marimar Nascimento</h3>
            <small>Psicóloga</small>
          </div>
        </div>
        <div>
          <p>
            Graduada em Psicologia pela UFRJ, atualmente pós graduanda em
            Psicogerontologia e com formação em Terapia Cognitivo Comportamental
            (TCC) em andamento...
          </p>
          <button>SAIBA MAIS</button>
        </div>
      </section>
    </div>
    <div>Copyright © 2021. Todos os direitos reservados.</div>
  </div>
);

export default Footer;
