import React, { Component } from "react";
import Socials from "./socials";
import AccountInteraction from "./accountInteraction";
import { Outlet, Link } from "react-router-dom";

class NavBar extends Component {
// Stateless Functional Component (shortcut sfc)
// totalCounters not used, was used previously for shopping cart.
// const NavBar = ({ totalCounters }) => {
  
  render() {
    console.log("NavBar - Rendered");
    let themeState = this.props.themeState;
    const classStyle = "navbar bg-";

    return (
      <nav className={(classStyle + this.props.themeState)}>
        <div className="container-fluid">

          <a className="navbar-brand pZealNavIco" href="#">
          <img src="./img/NavLogo2.png" alt="Project Zeal"/>{" "}
            <span className="badge badge-pill badge-secondary">
              
            </span>
          </a>

          <div>
            {/* TODO: Navigation to other pages */}
            {/* <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <Outlet /> */}
          </div>

          <div>
            <div className="radar-toggle">
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={() => this.themeChange(this.props.themeState)} //TODO: get themechange to work and render page
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
    );
  }

  themeChange(theme) {
    console.log("this happened. " + theme);
    if (theme === "light"){
      this.themeState = "dark";
    } else {
      this.themeState = "light";
    }
    console.log("pass through: " + this.themeState)
    this.render();
  }
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
