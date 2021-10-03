import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import getPosts from "../../lib/getPosts";
import formatDate from "../../utils/formatDate";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
          {articles.map((item) => (
            <div key={item.sys.id} className={styles.postCard}>
              <div className={styles.titleContainer}>
                <h1>{item.fields.title}</h1>
                <small>
                  <Image
                    src="/assets/calendar-icon.svg"
                    alt="Calendário"
                    width="14"
                    height="14"
                    layout="fixed"
                  />
                  {formatDate(item.sys.createdAt)}
                </small>
              </div>
              <div className={styles.bodyContent}>
                {item.fields.coverImage && (
                  <Image
                    src={`https:${item.fields.coverImage.fields.file.url}`}
                    alt={item.fields.coverImage.title || item.fields.title}
                    width={2100}
                    height={1298}
                    layout="responsive"
                  />
                )}

                {documentToReactComponents(item.fields.body.content[0])}
              </div>
              <Link href={`/blog/${item.fields.slug}`}>LER MAIS</Link>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Blog;
