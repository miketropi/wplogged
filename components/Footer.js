import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';

const FooterInnerContainer = styled.div`
  width: var(--extra-width);
  margin: 0 auto;
  color: white;
`;

export default () => {
  return <div id="SiteFooter" className="site-footer"> 
    <FooterInnerContainer>
      <Logo /> 
    </FooterInnerContainer>  
  </div>
} 