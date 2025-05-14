import FeaturedPost from "@/components/HomePage/FeaturedPosts/featuredPosts";
import Hero from "@/components/HomePage/Hero/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    description: "NextJS is a the React framework",
    date: "2025-05-14",
  },
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    description: "NextJS is a the React framework",
    date: "2025-05-14",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    description: "NextJS is a the React framework",
    date: "2025-05-14",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    description: "NextJS is a the React framework",
    date: "2025-05-14",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
