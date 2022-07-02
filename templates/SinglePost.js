import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import ContactImageBox from '../components/ContactImageBox';

const SummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .content-entry {
    width: 65%;
  }

  .sidebar-container {
    width: 30%;

    &__inner {
      position: sticky;
      top: 120px;
    }
  }

  @media(max-width: 768px) { 

    .content-entry {
      width: 100%;
      margin-bottom: 2em;
    }
  }

  @media(max-width: 425px) { 

    .sidebar-container {
      width: 100%;
    }
  }
`;

export default ({ children }) => {
  return <div id="Page" className="single-post-template">
    <Header />
    <main id="Main" className="site-main">
      <div className="content-container __has-spacing">
        <SummaryContainer>
          <div className="content-entry">
            { children }
          </div>
          <div className="sidebar-container">
            <div className="sidebar-container__inner">
              <ContactImageBox />
            </div>
          </div>
        </SummaryContainer>
      </div>
    </main>
  </div>
}