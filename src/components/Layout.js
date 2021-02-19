import React from 'react';
// import Header from "./header"
// import Footer from "./footer"
// import Navbar from "./navbar"

// import "./components.css"

const Layout = ({ children }) => {
  return (
    <div className="container">
      {/* <Header /> */}
      {/* <Navbar /> */}
      <div className="container__content">
        <div>{children}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
