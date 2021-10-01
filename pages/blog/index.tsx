import { NextPage } from "next";
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
    <div className={styles.container}>
      <main>
        {articles.map((item) => (
          <div key={item.sys.id} className={styles.postCard}>
            <div>
              <h1>{item.fields.title}</h1>
              <small>
                <Image
                  src="/assets/calendar-icon.svg"
                  alt="Calendário"
                  width="15"
                  height="15"
                  layout="fixed"
                />
                {formatDate(item.sys.createdAt)}
              </small>
            </div>
            <div>
              {item.fields.coverImage && (
                <Image
                  src={`https:${item.fields.coverImage.fields.file.url}`}
                  alt={item.fields.coverImage.title || item.fields.title}
                  width={2400}
                  height={1598}
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
  );
};

export default Blog;
