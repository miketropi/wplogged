import React, { Fragment } from "react";
import Header from '../components/Header';

export default ({ children }) => {
  return <div id="Page">
    <Header />
    <main id="Main" className="site-main">
      { children }
    </main>
  </div>
}