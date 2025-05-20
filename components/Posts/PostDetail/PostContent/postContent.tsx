import ReactMarkdown from "react-markdown";

import PostHeader from "../PostHeader/postHeader";
import styles from "./postContent.module.css";
import { Post } from "@/types/post";
import Image from "next/image";
import { ComponentProps } from "react";

interface PostContentProps {
  post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    img: (props: ComponentProps<"img">) => {
      const { src, alt } = props;

      if (!src) return null;

      return (
        <Image
          src={`/images/posts/${post.slug}/${src}`}
          alt={alt || ""}
          width={600}
          height={300}
        />
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
