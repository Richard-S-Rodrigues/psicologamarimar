import Image from "next/image";
import Link from "next/link";

import formatDate from "../../utils/formatDate";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import styles from "./index.module.css";

interface PostCardProps {
  title: string;
  createdDate: string;
  coverImage: object;
  imageUrl: string;
  imageTitle: string;
  imageDescription: string;
  firstParagraph: any;
  postSlug: string;
}

const PostCard = ({
  title,
  createdDate,
  coverImage,
  imageUrl,
  imageTitle,
  imageDescription,
  firstParagraph,
  postSlug,
}: PostCardProps) => (
  <article className={styles.postCard}>
    <div className={styles.titleContainer}>
      <h1>{title}</h1>
      <small>
        <Image
          src="/assets/calendar-icon.svg"
          alt="Calendário"
          width="14"
          height="14"
          layout="fixed"
        />
        {formatDate(createdDate)}
      </small>
    </div>
    <div className={styles.bodyContent}>
      {coverImage && (
        <>
          <Image
            src={`https:${imageUrl}`}
            alt={imageTitle || title}
            width={2100}
            height={1298}
            layout="responsive"
          />
          <a
            href={imageDescription}
            style={{
              display: "flex",

              fontSize: "0.7rem",
              justifyContent: "center",
              color: "#ccc",
            }}
            rel="noreferrer"
            target="_blank"
          >
            {imageDescription}
          </a>
        </>
      )}

      {documentToReactComponents(firstParagraph, {
        renderNode: {
          // eslint-disable-next-line react/display-name
          [INLINES.HYPERLINK]: (node: any) => {
            const uri = node.data.uri.replace("watch?v=", "embed/");                         
            if((node.data.uri).includes("youtube.com/watch?v=")) {
              return (
                <span>
                  <iframe
                    title="YouTube video player" 
                    src={uri} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </span>
              )
            }
          }
        }
      })}
    </div>
    <Link href={`/blog/${postSlug}`}>LER MAIS</Link>
  </article>
);

export default PostCard;
