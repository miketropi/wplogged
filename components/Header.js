import React, { Fragment } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import HeaderTools from './HeaderTools';
import Offcanvas from './Offcanvas';
import { useAppContext } from '../context/state';

const HeaderSummaryContainer = styled.div`
  width: var(--extra-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1em 0;
  font-weight: 500;

  @media(max-width: 500px) {
    padding: .7em 0;
    justify-content: space-between;
  }
`;

export default function Header() {
  const { isMobile, menuMobiStatus, onChangeMenuMenuStatus } = useAppContext();

  return <>
    <header id="SiteHeader" className="site-header site-header--sticky">
      <HeaderSummaryContainer className="site-header__inner">
        <Logo />
        { ! isMobile && <Nav menuStyle={ 'horizontal' } /> }
        <HeaderTools />
      </HeaderSummaryContainer>
    </header>
    
    <Offcanvas 
      open={ menuMobiStatus }
      onClose={ () => {
        onChangeMenuMenuStatus(false);
      } } />
  </>
}