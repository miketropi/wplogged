import Search from './Search';
import styled from 'styled-components';
import { CgMenuGridO } from 'react-icons/cg';
import { useAppContext } from '../context/state';

const HeaderToolContainer = styled.div`
  margin-left: 2em;

  ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }

    @media(max-width: 500px) {

      li:not(.header-tools__toggle-menu) {
        display: none;
      }
    }

    .header-tools__toggle-menu {
      margin-left: 1em;
      display: none;

      @media(max-width: 500px) {
        display: flex;
      }
    }
  }
`

const ToggleMenuButton = styled.button`
  padding: 0;
  border: none;
  border-radius: 0;
  background: none;
  display: flex;
`;

export default function HeaderTools() {
  const { onChangeMenuMenuStatus } = useAppContext();

  return <HeaderToolContainer>
    <ul>
      <li className="header-tools__search header-tools__item">
        <Search />
      </li>
      <li className="header-tools__toggle-menu header-tools__item">
        <ToggleMenuButton 
          onClick={ e => { 
            e.preventDefault();
            onChangeMenuMenuStatus(true);
          } }>
          <CgMenuGridO size="28px" />
        </ToggleMenuButton>
      </li>
    </ul>
  </HeaderToolContainer>
}