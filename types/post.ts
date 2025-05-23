export type Post = {
  slug: string;
  title: string;
  image: string;
  description: string;
  date: string;
  content?: string;
  isFeatured?: boolean;
};
