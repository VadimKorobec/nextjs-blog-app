import AllPosts from "@/components/Posts/AllPosts/allPosts";
import { getFuteredPosts } from "@/lib/postsUtil";
import { Post } from "@/types/post";
import { GetStaticProps } from "next";

interface AllPostsPageProps{
  posts:Post[]
}

const AllPostsPage = ({posts}:AllPostsPageProps) => {
  return <AllPosts posts={posts} />;
};

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getFuteredPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
