import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/post";

import styles from "./postItem.module.css";

interface PostItemProps {
  post: Post;
}

const PostItem = ({
  post: { title, image, description, date, slug },
}: PostItemProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <div className={styles.post}>
      <Link href={linkPath}>
        <div className={styles.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
