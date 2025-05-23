import AllPosts from "@/components/Posts/AllPosts/allPosts";
import { getFuteredPosts } from "@/lib/postsUtil";
import { Post } from "@/types/post";
import { GetStaticProps } from "next";
import Head from "next/head";

interface AllPostsPageProps{
  posts:Post[]
}

const AllPostsPage = ({posts}:AllPostsPageProps) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all posts" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
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
