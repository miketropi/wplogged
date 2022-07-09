import styled from "styled-components";
import Link from 'next/link';

const BrandContainer = styled.div`
  margin-right: 3em;
  font-weight: bold;

  @media(max-width: 500px) {
    
    a {
      font-size: .9em;
    }
  }
`

export default function Logo() {
  return <BrandContainer>
    <Link href="/">
      <a>{ '{WP Logged}' }</a>
    </Link> 
  </BrandContainer>
}