import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import HeaderTools from './HeaderTools';

const HeaderSummaryContainer = styled.header`
  width: calc(100% - 48px);
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export default () => {
  return <header id="SiteHeader" className="site-header">
    <HeaderSummaryContainer className="site-header__inner">
      <Logo />
      <Nav />
      <HeaderTools />
    </HeaderSummaryContainer>
  </header>
}