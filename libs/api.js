import { GraphQLClient } from 'graphql-request';

const _request = async (graphql) => {
  const graphcms = new GraphQLClient(process.env.NEXT_ENDPOINTS_CONTENT_API);
  return await graphcms.request(graphql);
}

export const getPosts = async () => {
  return _request(`query Posts {
    postsConnection(skip: 0) {
      pageInfo {
        pageSize
        hasNextPage
        hasPreviousPage
      }
      aggregate {
        count
      }
      edges {
        node {
          id
          title
          tags
          slug
          content {
            html
          }
          author {
            id
            name
            picture {
              url
            }
          }
          excerpt
          coverImage {
            url
          }
          date
        }
      }
    }
  }
  `);
}