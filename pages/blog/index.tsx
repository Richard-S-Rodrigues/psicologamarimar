import { NextPage } from "next";
import Head from "next/head";

import getPosts from "../../lib/getPosts";

import PostCard from "../../components/PostCard";

import styles from "./index.module.css";

export async function getStaticProps() {
  const data = await getPosts();

  return {
    props: {
      articles: data,
    },
  };
}

const Blog: NextPage = ({ articles }: any) => {
  return (
    <>
      <Head>
        <title>Psicóloga Marimar - Blog</title>
        <meta property="og:title" content="Psicóloga Marimar - Blog" />
        <meta
          property="og:url"
          content="https://www.psicologamarimar.com/blog"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.container}>
        <main>
          {!articles.length && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "18px",
                fontWeight: 600,
                margin: "5em",
              }}
            >
              Nenhuma postagem encontrada
            </div>
          )}
          {articles.map((item) => (
            <PostCard
              key={item.sys.id}
              title={item.fields.title}
              createdDate={item.sys.createdAt}
              coverImage={item.fields.coverImage}
              imageUrl={item.fields.coverImage.fields.file.url}
              imageTitle={item.fields.coverImage.title}
              imageDescription={item.fields.coverImage.fields.description}
              firstParagraph={item.fields.body.content[0]}
              postSlug={item.fields.slug}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default Blog;
