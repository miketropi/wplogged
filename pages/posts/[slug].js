import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import SinglePostTemplate from '../../templates/SinglePost';
import { allPosts, getPost } from '../../libs/api';
import Image from 'next/image';

const SinglePostContainer = styled.div`
`;

const PostInnerContainer = styled.div`
`;

const PostHeader = styled.div`
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: solid 1px #e2e2e2;

  .post-thumbnail {
    width: 100%;
    margin-bottom: 1.5em;
    border-radius: 3px;

    img {
      border-radius: 3px;
    }
  }

  .post-title {
    margin-bottom: 10px;
    font-size: 1.5em; 
  }

  .post-excerpt {
    padding: 2px 18px;
    border: solid 1px #eee;
    margin-top: 20px;
    font-size: 14px;
    background: #eee;
    color: black;
    display: inline-block;
    border-radius: 3px;
    line-height: normal;
  }
`

const PostMetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 13px;
  font-weight: 500;

  > * {
    margin-right: 1.5em;
  }

  .post-author {
    display: flex;
    align-items: center;
    padding: 4px 20px 4px 4px;
    border: solid 1px #ddd;
    border-radius: 30px;

    .author-thumbnail {
      border-radius: 20px;
    }

    .author-name {
      margin-left: 6px;
    }
  }

  .post-tags {

    span {
      border-bottom: solid 1px black;
      padding: 4px 0;
      margin-right: 8px;
    }
  }
`;

export default function SinglePost({ post }) {
  const { title, excerpt, author, content, tags } = post;
  return <SinglePostContainer>
    <Head>
      <title>{ post.title } | WP Logged</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={ title } key="title" />
    </Head>

    <SinglePostTemplate>
      <article className="post">
        <PostInnerContainer>
          <PostHeader>
            <div className="post-thumbnail">
              <Image 
                src={ post.coverImage.url } 
                alt={ `#${ title }` }
                layout='responsive'
                width={ post.coverImage.width } 
                height={ post.coverImage.height }/>
            </div>
            <h2 className="post-title">{ title }</h2>
            <PostMetaContainer>
              <div className="post-author"> 
                <Image 
                  className="author-thumbnail" 
                  src={ author.picture.url } 
                  alt={ `#${ author.name }` }
                  layout='intrinsic'
                  width={ 28 }
                  height={ 28 } /> 
                <span className="author-name">{ author.name }</span>
              </div>
              {
                tags.length > 0 &&
                <div className="post-tags"> 
                  {
                    tags.map((tag, _index) => {
                      return <span key={ _index }>{ tag }</span>
                    })
                  } 
                </div>
              }
            </PostMetaContainer>
            
            {
              excerpt != '' && 
              <div className="post-excerpt">
                <p>{ excerpt }</p>
              </div>
            }
          </PostHeader>
          <div className="post-content">
            <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
          </div>
        </PostInnerContainer>
      </article>
    </SinglePostTemplate>
  </SinglePostContainer>
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