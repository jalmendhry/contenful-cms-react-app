import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
// import Footer from "./footer"

import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div className="container__content">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
