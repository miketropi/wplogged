import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import SinglePostTemplate from '../../templates/SinglePostTemplate';
import { allPosts, getPost } from '../../libs/api';
import Image from 'next/image';
import { FacebookProvider, Comments } from 'react-facebook';
import { useRouter } from 'next/router';
import { useAppContext } from '../../context/state';

const SinglePostContainer = styled.div`

  .button-show-comment-wrap {
    display: flex;
    align-items: center;

    &::after,
    &::before {
      content: "";
      border-bottom: solid 1px #ddd;
      width: 50%;
    }

    .btn-line-style {
      border: solid 1px #ddd;
      padding: 10px 30px;
      color: black;
      background: none;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 11px;
      white-space: nowrap;
    }
  }
`;

const PostInnerContainer = styled.div` 

  .post-content {

    h4 {
      font-size: 1.5em;
      margin: 1.5em 0;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    a {
      border-bottom: solid 1px;
    }
  }
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
    background: #eee;
    color: black;
    display: inline-block;
    border-radius: 3px;
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

const CommentsFB = styled.div`
  margin-top: 1em;
  padding: 1.5em;
  background: white;
  box-shadow: 0px 0px 3px 0 rgb(1 1 1 / 10%);
  border-radius: 4px;

  .comments__title {
    border-bottom: solid 1px #eee;
    padding-bottom: 1em;
    margin: 0 8px 1em;
  }
`;

export default function SinglePost({ post }) {
  const { isClient } = useAppContext();
  const [showComments, setShowComment] = useState(false);
  const { title, excerpt, author, content, tags } = post;
  const [pageTitle, setPageTitle] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPageTitle(`${ post.title } | WP Logged`);
  }, [post]);

  return <SinglePostContainer>
    <Head>
      <title>{ pageTitle }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={ title } key="title" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={ excerpt } />
      <meta property="og:image" content={ post.coverImage.url } />
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
                width={ 460 } 
                height={ 259 }/>
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
      
      {
        ! showComments && 
        <div className="button-show-comment-wrap">
          <button className="btn-line-style" onClick={ e => setShowComment(true) }>Comment 👋</button>
        </div>
      }

      {
        showComments &&
        <FacebookProvider appId={ process.env.NEXT_FB_APP_ID }>
          <CommentsFB>
            <h4 className="comments__title">Comments</h4>
            <Comments href={ `${ process.env.NEXT_SITE_DOMAIN }/posts/${ router.query.slug }` } width="100%" />
          </CommentsFB>
        </FacebookProvider>
      }
      
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