import { GraphQLClient, gql } from 'graphql-request';

const _request = async (graphql, variables = {}) => {
  const graphcms = new GraphQLClient(process.env.NEXT_ENDPOINTS_CONTENT_API);
  return await graphcms.request(graphql, variables);
}

export const getPosts = async () => {
  return _request(gql`query Posts {
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
            url(transformation: {image: {resize: {width: 460}}})
            width
            height
          }
          date
        }
      }
    }
  }
  `);
}

export const getPost = (slug) => {
  return _request(gql`query Post($slug: String!) {
    post(where: {slug: $slug}) {
      content {
        html
      }
      coverImage {
        url(transformation: {image: {resize: {width: 660}}})
        width
        height
      }
      date
      excerpt
      id
      slug
      title
      tags
      seo {
        id
        title
      }
      author {
        name
        picture {
          url(transformation: {image: {resize: {width: 100}}})
          id
          height
          width
        }
      }
    }
  }
  `, {
    slug
  });
}

export const allPosts = () => {
  return _request(gql`query AllPosts {
    posts {
      id
      slug
    }
  }`);
}