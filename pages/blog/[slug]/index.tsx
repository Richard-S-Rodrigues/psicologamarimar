import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next//head";
import Image from "next/image";

import getPosts, { getPostBySlug } from "../../../lib/getPosts";
import formatDate from "../../../utils/formatDate";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import styles from "./index.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map((post: any) => ({
      params: {
        slug: post.fields.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
};

const BlogPost: NextPage = ({ post }: any) => {
  return (
    <>
      <Head>
        <title>Psicóloga Marimar - {post.fields.title}</title>
        <Head>
          <meta
            property="og:title"
            content={`Psicóloga Marimar - ${post.fields.title}`}
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
          {post.fields.coverImage && (
            <div className={styles.imageContainer}>
              <Image
                src={`https:${post.fields.coverImage.fields.file.url}`}
                alt={post.fields.coverImage.title || post.fields.title}
                width={2400}
                height={1598}
                objectFit="contain"
                layout="responsive"
              />
              <a
                href={post.fields.coverImage.fields.description}
                style={{
                  display: "flex",
                  fontSize: "0.7rem",
                  justifyContent: "center",
                  color: "#ccc",
                }}
                rel="noreferrer"
                target="_blank"
              >
                {post.fields.coverImage.fields.description}
              </a>
            </div>
          )}
          <section className={styles.titleContainer}>
            <h1>{post.fields.title}</h1>
            <small>
              <Image
                src="/assets/calendar-icon.svg"
                alt="Calendário"
                width="15"
                height="15"
                layout="fixed"
              />
              {formatDate(post.sys.createdAt)}
            </small>
          </section>
          <section className={styles.bodyContent}>
            {documentToReactComponents(post.fields.body, {
              renderNode: {
                // eslint-disable-next-line react/display-name
                [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                  return (
                    <Image
                      src={`https:${node.data.target.fields.file.url}`}
                      alt=""
                      width={node.data.target.fields.file.details.image.width}
                      height={node.data.target.fields.file.details.image.height}
                    />
                  );
                },
                [INLINES.HYPERLINK]: (node) => {
                     if((node.data.uri).includes("youtube.com")) {
                         const uri = node.data.uri.replace("watch?v=", "embed/");
                         return (
                            <span className={styles.imageFrameContainer}>
                                <iframe 
                                    title="YouTube video player" 
                                    src={uri} 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </span>
                        )
                     }
                 }

              },
            })}
          </section>
        </main>
      </article>
    </>
  );
};

export default BlogPost;
