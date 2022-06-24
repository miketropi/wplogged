import styled from "styled-components";

const BrandContainer = styled.div`
  margin-right: 3em;
  font-weight: bold;
`

export default () => {
  return <BrandContainer>
    <a href="/">{ '{WP Logged}' }</a>
  </BrandContainer>
}