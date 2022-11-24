import React, { useState } from "react";
import { ReactDOM } from "react-dom/client";

import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/navbar";

const Layout = (props) => {
  const [theme, setTheme] = useState(props.theme);
  let themeState = props.theme;
  console.log(themeState);
  const classStyle = "navbar bg-";

  return (
    <>
      <nav className={(classStyle + themeState)}>
        <NavBar theme={props}/>
      </nav>
        <Outlet />
    </>
  )
};

export default Layout;