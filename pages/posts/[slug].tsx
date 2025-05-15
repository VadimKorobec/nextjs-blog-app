import PostContent from "@/components/Posts/PostDetail/PostContent/postContent";
import { getPostData } from "@/lib/postsUtil";
import { GetStaticPaths, GetStaticProps } from "next";

const PostDetailPage = () => {
  return <PostContent />;
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  const slug = params?.slug as string;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default PostDetailPage;
