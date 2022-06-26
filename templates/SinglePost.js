import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from "../components/footer";

const SummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .content-entry {
    width: 60%;
  }

  .sidebar-container {
    width: 30%;
  }
`;

export default ({ children }) => {
  return <div id="Page">
    <Header />
    <main id="Main" className="site-main">
      <div className="content-container __has-spacing">
        <SummaryContainer>
          <div className="content-entry">
            { children }
          </div>
          <div className="sidebar-container">
            Sidebar...!
          </div>
        </SummaryContainer>
      </div>
    </main>
    <Footer />
  </div>
}