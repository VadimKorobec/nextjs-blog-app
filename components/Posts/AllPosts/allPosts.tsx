import { Post } from "@/types/post";
import PostsGrid from "../PostsGrid/postsGrid";
import styles from "./allPosts.module.css";

interface AllPostsProps {
  posts: Post[];
}

const AllPosts = ({ posts }: AllPostsProps) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
