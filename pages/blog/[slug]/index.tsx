import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next//head";
import Image from "next/image";

import { getPosts, getPostBySlug } from "../../../services/getPosts";
import formatDate from "../../../utils/formatDate";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import styles from "./index.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = (await getPosts()) || [];

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.node.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = (await getPostBySlug(params.slug)) || [];

  return {
    props: {
      post: post[0].node,
    },
  };
};

interface IPost {

}

const BlogPost: NextPage = ({ post }) => {

  return (
    <>
     <Head>
        <title>Psicóloga Marimar - {post.title}</title>
        <Head>
          <meta
            property="og:title"
            content={`Psicóloga Marimar - ${post.title}`}
          />
          <meta
            property="og:url"
            content="https://www.psicologamarimar.com/blog"
          />
          <meta property="og:type" content="website" />
        </Head>
      </Head>
      <article className={styles.container}>
        <main>
          {post.coverImage && (
            <div className={styles.imageContainer}>
              <Image
                src={post.coverImage[0].image.url}
                alt={post.title }
                width={2400}
                height={1598}
                objectFit="contain"
                layout="responsive"
              />
              {post.coverImage[0].author && (
              <a
                href={post.coverImage[0].authorUrl}
                style={{
                  display: "flex",
                  fontSize: "0.7rem",
                  justifyContent: "center",
                  color: "#ccc",
                }}
                rel="noreferrer"
                target="_blank"
              >
                Imagem criada por {post.coverImage[0].author}
              </a>
              )}
            </div>
          )}
          <section className={styles.titleContainer}>
            <h1>{post.title}</h1>
            <small>
              <Image
                src="/assets/calendar-icon.svg"
                alt="Calendário"
                width="15"
                height="15"
                layout="fixed"
              />
              {formatDate(post.publishedAt)}
            </small>
          </section>
          <section className={styles.bodyContent}>
          </section>
        </main>
      </article>
    </>
  );
};

export default BlogPost;
