import ReactMarkdown from 'react-markdown' 

import PostHeader from "../PostHeader/postHeader";
import styles from "./postContent.module.css";
import { Interface } from 'readline';
import { Post } from '@/types/post';

interface PostContentProps{
  post:Post
}

const PostContent = ({post}:PostContentProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
