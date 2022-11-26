import React, { Component, useState } from "react";
import Socials from "./socials";
import AccountInteraction from "./accountInteraction";
import { Outlet, Link } from "react-router-dom";


class NavBar extends Component {
// Stateless Functional Component (shortcut sfc)
// totalCounters not used, was used previously for shopping cart.
// const NavBar = ({ totalCounters }) => {
  
  render() {
    
    console.log("NavBar - Rendered");
    const classStyle = "navbar bg-";
    let theme = this.props.theme;
    return (
      <nav className={(classStyle + theme)}>
        <div className="container-fluid">

          <Link to="/" className="navbar-brand pZealNavIco">
          <img src="./img/NavLogo2.png" alt="Project Zeal"/>{" "}
            <span className="badge badge-pill badge-secondary">
              
            </span>
          </Link>

          <div>
            {/* TODO: Navigation to other pages */}
            <div>
              <ul className="noBullet">
                <li>
                  <Link to="/aboutme">About Me</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="radar-toggle">
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={() => this.props.themeUpdate()} //TODO: get themechange to work and render page
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div>
            {/* TODO: Social Media Icons with hover over for expanding options */}
            <Socials></Socials>
          </div>
        
          <div>
            {/* TODO: Web 3 Wallet connection button place holder for later research 
                      Account interaction hub. Web3/Signin etc*/}
            <AccountInteraction></AccountInteraction>
          </div>
        </div>
      </nav>
    )
  };

  // themeChange() {
  //   let theme = this.props.theme;
  //   console.log("this happened. " + theme);
  //   if (theme === "light"){
  //     console.log("dark");
  //     theme = "dark";
  //   } else {
  //     console.log("light");
  //     theme = "light";
  //   }
  //   console.log("pass through: " + theme);
  //   this.state.themeState = theme;
  //   this.render();
  // }
};

// use SFC over class in situations like the nav bar
// class NavBar extends Component {
//     render() {
//         return (
//             <nav className="navbar bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">
//                         Navbar{" "}
//                         <span className="badge badge-pill badge-secondary">
//                             {this.props.totalCounters}
//                         </span>
//                     </a>
//                 </div>
//             </nav>
//         );
//     }
// }

export default NavBar;
