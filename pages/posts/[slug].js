import React, { Fragment }from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import SinglePostTemplate from '../../templates/SinglePost';
import { allPosts, getPost } from '../../libs/api';

const PostInnerContainer = styled.div`
`;

const PostHeader = styled.div`
  margin-bottom: 2em;

  .post-thumbnail {
    width: 100%;
    margin-bottom: .5em;
  }
`

export default ({ post }) => {
  return <>
    <Head>
      <title>{ post.title } | WP Logged | by Mike</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <SinglePostTemplate>
      <article className="post">
        <PostInnerContainer>
          <PostHeader>
            <img className="post-thumbnail" src={ post.coverImage.url } alt={ `#${ post.title }` } />
            <h2>{ post.title }</h2>
          </PostHeader>
          {
            JSON.stringify(post)
          }
        </PostInnerContainer>
      </article>
    </SinglePostTemplate>
  </>
}

export const getStaticProps = async (context) => {
  const { post } = await getPost(context.params.slug);
  return {
    props: {
      post
    }
  } 
}

export const getStaticPaths = async () => {
  const { posts } = await allPosts();
  const paths = posts.map(p => {
    return {
      params: {
        slug: p.slug
      }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}