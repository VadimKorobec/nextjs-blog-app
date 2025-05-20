import fs from "fs";
import path from "path";

import matter from "gray-matter";

interface PostMeta {
  title: string;
  date: string;
  image: string;
  description: string;
  isFeatured: boolean;
}

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
}



export const getPostData = (fileName: string) => {
  const postSlug = fileName.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);


  const postData = {
    slug: postSlug,
    ...(data as PostMeta),
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFuteredPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
