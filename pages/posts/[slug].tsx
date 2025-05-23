import PostContent from "@/components/Posts/PostDetail/PostContent/postContent";
import { getPostData, getPostsFiles } from "@/lib/postsUtil";
import { Post } from "@/types/post";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

interface PostDetailPageProps {
  post: Post;
}

const PostDetailPage = ({ post }: PostDetailPageProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  const slug = params?.slug as string;

  const postData = getPostData(slug);
  console.log(postData);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: true,
  };
};

export default PostDetailPage;
