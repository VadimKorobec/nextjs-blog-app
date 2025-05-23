import PostItem from "../PostItem/postItem";
import { Post } from "@/types/post";

import styles from "./postsGrid.module.css";

interface PostGridProps {
  posts: Post[];
}

const PostsGrid = ({ posts }: PostGridProps) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
