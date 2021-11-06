import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            description
            publishedAt
            slug
            title
            id
            bodyContent {
              html
            }
            coverImage {
              id
              author
              authorUrl
              image {
                url
                fileName
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
