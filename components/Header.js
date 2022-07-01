import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import HeaderTools from './HeaderTools';

const HeaderSummaryContainer = styled.header`
  width: var(--extra-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1em 0;
  font-weight: 500;
`;

export default function Header() {
  return <header id="SiteHeader" className="site-header site-header--sticky">
    <HeaderSummaryContainer className="site-header__inner">
      <Logo />
      <Nav />
      <HeaderTools />
    </HeaderSummaryContainer>
  </header>
}