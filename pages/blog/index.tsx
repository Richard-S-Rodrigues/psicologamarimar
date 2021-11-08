import { NextPage } from "next";
import Head from "next/head";

import { getPosts } from "../../services/getPosts";

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

type BlogProps = {
  articles: [
    {
      node: {
        id: string;
        title: string;
        slug: string;
        description: string;
        createdAt: string;
        coverImage?: [
          {
            id: string;
            author: string;
            authorUrl: string;
            image: {
              url: string;
            };
          }
        ];
      };
    }
  ];
};
const Blog: NextPage<BlogProps> = ({ articles }) => {
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
          {articles.map((item) => {
            const coverImage = item.node.coverImage[0];
            return (
              <PostCard
                key={item.node.id}
                title={item.node.title}
                createdDate={item.node.createdAt}
                coverImage={coverImage}
                imageUrl={coverImage?.image.url}
                imageAuthor={coverImage?.author}
                imageAuthorUrl={coverImage?.authorUrl}
                firstParagraph={item.node.description}
                postSlug={item.node.slug}
              />
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Blog;
