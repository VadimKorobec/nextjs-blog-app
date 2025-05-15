import FeaturedPost from "@/components/HomePage/FeaturedPosts/featuredPosts";
import Hero from "@/components/HomePage/Hero/hero";
import { getFuteredPosts } from "@/lib/postsUtil";
import { Post } from "@/types/post";
import { GetStaticProps } from "next";

interface HomePageProps {
  posts: Post[];
}

const HomePage = ({ posts }: HomePageProps) => {
  return (
    <>
      <Hero />
      <FeaturedPost posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const featuredPosts = getFuteredPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
