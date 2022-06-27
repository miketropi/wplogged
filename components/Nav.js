import Link from 'next/link';
import { useRouter } from "next/router";
import styled from 'styled-components';

const NavContainer = styled.div`
  margin-left: auto;

  .menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding: 0;

    .menu-item {
      list-style: none;

      &:not(:last-child) {
        margin-right: 1.5em;
      }

      > a {
        border-bottom: solid 2px transparent;
        padding: 3px 0;
      }

      &.is-active {

        > a {
          border-color: black;
        }
      }
    }
  }
`;

const MENU_ITEMS =  [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About Us',
    url: '/about',
  },
  {
    name: 'Contact',
    url: '/contact',
  }
]

export default () => {
  const router = useRouter();

  return <NavContainer>
    <ul className="site-nav__inner menu">
      {
        MENU_ITEMS.map(menu => {
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