import FeaturedPost from "@/components/HomePage/FeaturedPosts/featuredPosts";
import Hero from "@/components/HomePage/Hero/hero";
import { getFuteredPosts } from "@/lib/postsUtil";
import { Post } from "@/types/post";
import { GetStaticProps } from "next";
import Head from "next/head";

interface HomePageProps {
  posts: Post[];
}

const HomePage = ({ posts }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <meta  name="description" content="I post about programming and wed development."/>
      </Head>
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
