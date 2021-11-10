import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next//head";
import Image from "next/image";

import { getPosts, getPostBySlug } from "../../../services/getPosts";
import formatDate from "../../../utils/formatDate";
import parse, {
  HTMLReactParserOptions,
  attributesToProps,
  Element,
} from "html-react-parser";

import styles from "./index.module.css";

type PostsResponse = {
  node: {
    id: string;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    coverImage?: [
      {
        author: string;
        authorUrl: string;
        image: {
          url: string;
        };
      }
    ];
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: PostsResponse[] = (await getPosts()) || [];

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.node.slug,
      },
    })),
    fallback: false,
  };
};

type StaticProps = {
  params: {
    slug: string;
  };
};
export const getStaticProps: GetStaticProps = async ({
  params,
}: StaticProps) => {
  const post = (await getPostBySlug(params.slug)) || [];

  return {
    props: {
      post,
    },
  };
};

type BlogPostProps = {
  post: {
    title: string;
    createdAt: string;
    bodyContent: {
      html: string;
    };
    coverImage?: [
      {
        author: string;
        authorUrl: string;
        image: {
          url: string;
        };
      }
    ];
  };
};

const BlogPost: NextPage<BlogPostProps> = ({ post }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.name == "iframe"
      ) {
        const props = attributesToProps(domNode.attribs);
        return (
          <div className={styles.imageFrameContainer}>
            <iframe {...props} />
          </div>
        );
      }
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.name == "img"
      ) {
        const props = attributesToProps(domNode.attribs);
        return (
          <Image
            src={props.src}
            alt=""
            width={2400}
            height={1598}
            layout={"responsive"}
          />
        );
      }
    },
  };
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
          {post.coverImage?.length > 0 && (
            <div className={styles.imageContainer}>
              <Image
                src={post.coverImage[0]?.image.url}
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8Vw8AAiEBT6ythdcAAAAASUVORK5CYII= "
                }
                alt={post.title}
                width={2400}
                height={1598}
                objectFit="contain"
                layout="responsive"
                placeholder={"blur"}
              />
              {post.coverImage[0]?.author && (
                <a
                  href={post.coverImage[0]?.authorUrl}
                  style={{
                    display: "flex",
                    fontSize: "0.7rem",
                    justifyContent: "center",
                    color: "#ccc",
                  }}
                  rel="noreferrer"
                  target="_blank"
                >
                  Imagem criada por {post.coverImage[0]?.author}
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
              {formatDate(post.createdAt)}
            </small>
          </section>
          <section className={styles.bodyContent}>
            {parse(post.bodyContent.html, options)}
          </section>
        </main>
      </article>
    </>
  );
};

export default BlogPost;
