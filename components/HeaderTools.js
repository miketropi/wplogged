import Search from './Search';
import styled from 'styled-components';

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
  }
`

export default function HeaderTools() {
  return <HeaderToolContainer>
    <ul>
      <li className="header-tools__search header-tools__item">
        <Search />
      </li>
    </ul>
  </HeaderToolContainer>
}