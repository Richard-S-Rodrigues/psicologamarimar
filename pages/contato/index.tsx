import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { BsWhatsapp } from "react-icons/bs";

import styles from "./index.module.css";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Psicóloga Marimar - Contato</title>
      </Head>
      <div className={styles.container}>
        <main>
          <section className={styles.aboutTherapyContainer}>
            <h1>Sessões de Terapia Cognitiva Comportamental</h1>
            <article>
              <p>
                A Terapia Cognitiva Comportamental (TCC) é a abordagem
                psicoterapêutica com mais evidências de eficácia para
                transtornos de ansiedade, depressão, abuso de substâncias,
                transtornos alimentares, entre outros. Busca-se produzir de
                várias formas uma mudança cognitiva - modificação no pensamento
                e no sistema de crenças do paciente - para produzir uma mudança
                emocional e comportamental duradoura. O objetivo final é que o
                paciente aprenda a manejar os próprios sintomas, para que possa
                ter alta da terapia.
              </p>
            </article>
          </section>
          <section className={styles.contactContainer}>
            <div>
              <Image
                src="/assets/photo.jpg"
                alt="Psicóloga"
                width="100"
                height="100"
                layout="fixed"
              />
              <small>
                <span>Marimar Nascimento</span>
                <span>Psicóloga | CRP 05/6610</span>
              </small>
            </div>
            <div className={styles.scheduleContainer}>
              <a
                href="https://wa.me/message/LRC2OENTKIK7N1"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp />
                Agende sua sessão
              </a>
              <div className={styles.qrCode}>
                <QRCodeSVG
                  value="https://wa.me/message/LRC2OENTKIK7N1"
                  size={220}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
