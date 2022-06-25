import React, { Fragment, useState, useEffect } from 'react';
import Logo from './Logo';
import styled from 'styled-components';

const FooterInnerContainer = styled.div`
  width: var(--extra-width);
  margin: 0 auto;
  color: white;
`;

export default () => {
  return <footer id="SiteFooter" className="site-footer"> 
    <FooterInnerContainer>
      <Logo />
    </FooterInnerContainer>  
  </footer>
} 