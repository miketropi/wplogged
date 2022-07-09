import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import styled from 'styled-components';
import { useAppContext } from '../context/state';

const NavContainer = styled.div`
  margin-left: auto;

  .menu {
    margin: 0;
    padding: 0;

    &.__style-horizontal {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    .menu-item {
      list-style: none;

      &:not(:last-child) {
        margin-right: 1.5em;
      }

      > a {
        border-bottom: solid 2px transparent;
        padding: 3px 0;
        font-size: 14px;
      }

      &.is-active {

        > a {
          border-color: black;
        }
      }
    }

    &.__style-vertical {

      .menu-item {
        margin: 0;

        a {
          display: block;
          width: 100%;
          border-color: black;
          padding: 10px 0;
          opacity: .3;
        }

        &.is-active {

          > a {
            opacity: 1;
          }
        }
      }
    }
  }
`;

export default function Nav({ menuStyle }) {
  const { menuItems, onChangeMenuMenuStatus } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    onChangeMenuMenuStatus(false);
  }, [router.query.slug])

  return <NavContainer>
    <ul className={ [`site-nav__inner menu`, `__style-${ menuStyle }`].join(' ')  }>
      {
        [...menuItems].map(menu => {
          return <li 
            className={ ["menu-item", router.pathname == menu.url ? "is-active" : ""].join(' ') } 
            key={ menu.name }>
            <Link href={ menu.url }>
              <a>{ menu.name }</a>
            </Link>
          </li>
        })
      } 
    </ul>
  </NavContainer>
}