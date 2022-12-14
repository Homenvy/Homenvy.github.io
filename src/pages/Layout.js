import React, { useState } from "react";
//import { ReactDOM } from "react-dom/client";

import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Layout = (props) => {
  const [activePage, setActivePage] = useState(props.activePage);

  document.body.className = props.theme;

  return (
    <>
        <NavBar 
          theme={props.theme}
          toggleTheme={props.toggleTheme}
          activePage={activePage}
          currentPage={setActivePage} />
        <Outlet />
        <Footer theme={props.theme}/>
    </>
  )
};

export default Layout;