import React, { Fragment } from "react";
import Header from '../components/Header';
import Footer from "../components/footer";

export default ({ children }) => {
  return <div id="Page">
    <Header />
    <main id="Main" className="site-main">
      { children }
    </main>
    <Footer />
  </div>
}