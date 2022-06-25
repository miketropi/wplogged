import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

const SearchContainer = styled.div`
  position: relative;

  input.search-input {
    padding: 10px 20px 10px 30px;
    border-radius: 30px;
    border: solid 1px #ddd;
  }

  .__icon {
    position: absolute;
    left: 10px;
    top: 50%;
    line-height: 0;
    transform: translateY(-50%);
  }
`;

export default () => {
  return <SearchContainer>
    <input className="search-input" type="search" placeholder="Tìm kiếm..."/>
    <span className="__icon">
      <BiSearch /> 
    </span>
  </SearchContainer>
}