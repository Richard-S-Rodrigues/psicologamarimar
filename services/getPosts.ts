import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getPosts = async (limit?: number) => {
  let query: string;

  if (limit) {
    query = gql`
      query MyQuery {
        postsConnection(orderBy: publishedAt_DESC, first: ${limit}) {
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
                }
              }
            }
          }
        }
      }
    `;
  } else {
    query = gql`
      query MyQuery {
        postsConnection(orderBy: publishedAt_DESC) {
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
                }
              }
            }
          }
        }
      }
    `;
  }

  const response = await request(graphqlAPI, query);

  return response.postsConnection.edges;
};

const getPostBySlug = async (slug: string) => {
  const query = gql`
    query MyQuery {
      postsConnection(
        orderBy: publishedAt_DESC
        where: { slug: "${slug}"}
      ) {
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

export { getPosts, getPostBySlug };
