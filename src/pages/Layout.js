import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom/client";

import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/navbar";

const Layout = (props) => {
  const [theme, setTheme] = useState(props.theme);

  const themeType = () => {
    //TODO: Implement cookies to remember option
    //TODO: By default theme should mirror state of day
    if (theme === "light"){
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  useEffect (() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
        <NavBar 
          theme={theme}
          themeUpdate={themeType} />
        <Outlet />
    </>
  )
};

export default Layout;