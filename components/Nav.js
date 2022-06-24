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

  return <NavContainer>
    <ul className="site-nav__inner menu">
      {
        MENU_ITEMS.map(menu => {
          return <li className="menu-item" key={ menu.name }>
            <a href={ menu.url }>{ menu.name }</a>
          </li>
        })
      }
    </ul>
  </NavContainer>
}