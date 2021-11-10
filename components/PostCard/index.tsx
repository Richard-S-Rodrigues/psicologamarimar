import Image from "next/image";
import Link from "next/link";

import formatDate from "../../utils/formatDate";

import styles from "./index.module.css";

interface PostCardProps {
  title: string;
  createdDate: string;
  coverImage: object;
  imageUrl: string;
  imageAuthor: string;
  imageAuthorUrl: string;
  firstParagraph: any;
  postSlug: string;
}

const PostCard = ({
  title,
  createdDate,
  coverImage,
  imageUrl,
  imageAuthor,
  imageAuthorUrl,
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
            src={imageUrl}
            blurDataURL={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8Vw8AAiEBT6ythdcAAAAASUVORK5CYII="
            }
            alt={title}
            width={2100}
            height={1298}
            layout="responsive"
            placeholder={"blur"}
          />
          {imageAuthor && (
            <a
              href={imageAuthorUrl}
              style={{
                display: "flex",

                fontSize: "0.7rem",
                justifyContent: "center",
                color: "rgb(1 101 181)",
              }}
              rel="noreferrer"
              target="_blank"
            >
              Imagem criada por {imageAuthor}
            </a>
          )}
        </>
      )}
      <p>{firstParagraph}</p>
    </div>
    <Link href={`/blog/${postSlug}`}>LER MAIS</Link>
  </article>
);

export default PostCard;
