import React from "react";
//import { ReactDOM } from "react-dom/client";

import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Layout = (props) => {
  const { pathname } = useLocation();
  const activePage = pathname.startsWith('/portfolio') ? 'Portfolio' :
    ({ '/aboutme': 'About Me', '/contact': 'Contact', '/service': 'Services', '/resume': 'Resume' }[pathname] || 'Project Zeal');

  document.body.className = props.theme;

  return (
    <>
        <NavBar 
          theme={props.theme}
          toggleTheme={props.toggleTheme}
          activePage={activePage}
          currentPage={() => {}} />
        <Outlet />
        <Footer theme={props.theme}/>
    </>
  )
};

export default Layout;