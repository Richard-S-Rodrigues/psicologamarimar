import { createClient } from "contentful";

const getPosts = async (postsLimit?: number) => {
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries({
    content_type: "posts",
    limit: postsLimit,
  });

  return data.items;
};

export const getPostBySlug = async (slug) => {
  const posts = await getPosts();

  return posts.find((post: any) => post.fields.slug == slug);
};

export default getPosts;
