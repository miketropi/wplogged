import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';

const PostsContainer = styled.div`
  padding: 5em 0;
  background: #f2f4f9;

  .posts-loop {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -20px;

    @media(max-width: 768px) {
      margin: 0 -10px;
    }

    .post-item {
      box-sizing: border-box;
      padding: 0 20px;
      margin-bottom: 40px;
      width: calc(100% / 3);

      @media(max-width: 768px) {
        width: calc(100% / 2);
        padding: 0 10px;
      }

      @media(max-width: 425px) {
        width: calc(100% / 1);
      }

      &__inner {
        border: solid 1px #ddd; 
        position: relative;
        height: 100%;
        border-radius: 3px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background: white;
      }
      
      &__thumbnail {

        a {
          display: block;

          img {
            width: 100%;
          }
        }
      }

      &__entry {
        padding: 20px 20px 0 20px;
        display: flex;
        flex-wrap: wrap;

        .p-title {
          width: 100%;
          font-size: 1.2em;

          @media(max-width: 425px) {
            font-size: 16px;
          }
        }

        .p-description {
          font-size: 14px;
          line-height: 1.5em;
          color: #6b6b6b;

          p {
            margin-top: 0;
          }
        }
      }

      &__actions {
        margin-top: auto;
        padding: 0 20px 20px 20px;

        .p-readmore {
        
        } 
      }
    }
  }
`;

export default function Posts({ title, posts }) {
  return <PostsContainer>
    <div className="content-container">
      <div className="posts-inner">
        {
          title != '' &&
          <h2 className="ss-title">{ title }</h2>
        }
        <div className="posts-loop">
          {
            posts.length > 0 && 
            posts.map(item => {
              const { id, title, excerpt, coverImage, slug } = item.node;
              return <article className="post-item" key={ id }>
                <div className="post-item__inner">
                  {
                    coverImage && coverImage?.url &&
                    <div className="post-item__thumbnail">
                      <Link href={ `/posts/${ slug }` }>
                        <a>
                          <Image 
                            src={ coverImage.url } 
                            alt={ `#${ title }` } 
                            layout='responsive'
                            width={ 460 }
                            height={ 259 } />
                        </a>
                      </Link>
                    </div>
                  }
                  <div className="post-item__entry">
                    <h4 className="p-title">
                      <Link href={ `/posts/${ slug }` }>
                        <a>{ title } <BsArrowUpRight /></a>
                      </Link>
                    </h4>
                    {/* <div className="p-description">
                      <p>{ excerpt }</p>
                    </div> */}
                  </div>
                  <div className="post-item__actions">
                    <Link href={ `/posts/${ slug }` }>
                      <a className="btn btn-primary p-readmore">Đọc thêm</a> 
                    </Link>
                  </div>
                </div>
              </article>
            })
          }
        </div>
      </div>
    </div>
  </PostsContainer>
}