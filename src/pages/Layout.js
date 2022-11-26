import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom/client";

import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/navbar";

const Layout = (props) => {
  const [theme, setTheme] = useState(props.theme);
  
  //const theme = props.theme;
  //console.log(props.theme + " " + themeState); - correct information passed

  const themeType = () => {
    console.log("this happened: " + theme);
    // if (theme === "undefined") {
    //   return setTheme({theme: "dark"});
    // }
    if (theme === "light"){
      setTheme(previousState => {
        return {...previousState, theme: "dark"}
      });
      console.log("dark/" + theme);
    } else {
      setTheme(previousState => { 
        return {...previousState, theme: "light" }
      });
      console.log("light/" + theme);
    }
  }

  useEffect (() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
        <NavBar 
          theme={theme.theme}
          themeUpdate={themeType} />
        <Outlet />
    </>
  )
};

export default Layout;