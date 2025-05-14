import PostsGrid from "@/components/Posts/PostsGrid/postsGrid";
import { Post } from "@/types/post";

import styles from "./featuredPosts.module.css";

interface FeaturedPostProps {
  posts: Post[];
}

const FeaturedPost = ({ posts }: FeaturedPostProps) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts </h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPost;
