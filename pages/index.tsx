import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { getRecentPosts } from "../services/getPosts";
import formatDate from "../utils/formatDate";

import styles from "../styles/Home.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getRecentPosts()) || [];

  return {
    props: { posts },
  };
};

type HomeProps = {
  posts: [
    {
      id: string;
      title: string;
      slug: string;
      createdAt: string;
    }
  ];
};

const Home: NextPage<HomeProps> = ({ posts }) => {
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
                fontSize: "0.7rem",
                justifyContent: "center",
                marginTop: 0,
                marginBottom: "2em",
                color: "#a6a6a6",
              }}
              rel="noreferrer"
              target="_blank"
            >
              Imagem criada por vectorjuice - br.freepik.com
            </a>
          </div>
          <div className={styles.text}>
            <h1>
              Acompanhamento psicoterapêutico online, para cuidar da sua saúde
              mental no conforto da sua casa.
            </h1>
          </div>
        </section>
        <section className={styles.postsContainer}>
          <h1>POSTAGENS RECENTES</h1>
          {!posts.length ? (
            <p>Nenhuma postagem criada ainda</p>
          ) : (
            posts.map((post) => (
              <div key={post.id}>
                <section className={styles.postTitleContainer}>
                  <Link href={`/blog/${post.slug}`} passHref>
                    <a>
                      <h2>{post.title}</h2>
                    </a>
                  </Link>
                  <small>
                    <Image
                      src="/assets/calendar-icon.svg"
                      alt="Calendário"
                      width="14"
                      height="14"
                      layout="fixed"
                    />
                    {formatDate(post.createdAt)}
                  </small>
                </section>
              </div>
            ))
          )}
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
