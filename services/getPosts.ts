import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            description
            createdAt
            slug
            title
            id
            coverImage {
              id
              author
              authorUrl
              image {
                url
              }
            }
          }
        }
      }
    }
  `;

  const response = await request(graphqlAPI, query);

  return response.postsConnection.edges;
};

const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_DESC,
        first: 3
      ) {
        id
        title
        slug
        createdAt
      }
    }
  `;

  const response = await request(graphqlAPI, query);

  return response.posts;
};

const getPostBySlug = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        createdAt
        bodyContent {
          html 
        }
        coverImage {
          author
          authorUrl
          image {
            url
          }
        }
      }
    }
  `;

  const response = await request(graphqlAPI, query, { slug });

  return response.post;
};

export { getPosts, getRecentPosts, getPostBySlug };
