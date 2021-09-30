import { createClient } from "contentful";

const getPosts = async () => {
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries({
    content_type: "posts",
  });

  return data.items;
};

/*export const getPostBySlug = async (slug) => {
  const posts = await getPosts();

  posts.forEach((post) => {
    if (post.fields.slug == slug) {
      console.log(post);
    }
  });
};*/

export default getPosts;
