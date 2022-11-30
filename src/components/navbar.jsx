import React, { Component } from "react";
import Socials from "./socials";
import AccountInteraction from "./accountInteraction";
import { Link } from "react-router-dom";

class NavBar extends Component {
// Stateless Functional Component (shortcut sfc)
// totalCounters not used, was used previously for shopping cart.
// const NavBar = ({ totalCounters }) => {
  
  render() {
    
    console.log("NavBar - Rendered");
    const classStyle = "navbar bg-";
    let activePage = "Home";
    let theme = this.props.theme;
    return (
      <nav className={(classStyle + theme)}>
        <div className="container-fluid">
          {/*TODO: Fix theme on local routes 
                   setup an Activate variable for a few areas*/}
          <Link to="/" className="navbar-brand navLogo"/>

          <div className="navLinkContainer">
            {/* TODO: Page Selected here then when click/hover opens underneat for options 
                      Page youre on shows up, rest go in a drop down div*/}
            <p className={theme}>{activePage}</p>
            <div className={"navLinkDrawer " + theme}>
              <ul className="noBullet">
                <li>
                  <Link 
                    to="/aboutme" 
                    className={theme}
                    onClick={() => this.props.currentPage("About Me")}>About Me</Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio" 
                    className={theme}
                    onClick={() => this.props.currentPage("Portfolio")}>Portfolio</Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={theme}
                    onClick={() => this.props.currentPage("Contact")}>Contact</Link>
                </li>
                <li>
                  <Link 
                    to="/service" 
                    className={theme}
                    onClick={() => this.props.currentPage("Services")}>Service</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="radar-toggle">
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={() => this.props.themeUpdate()}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div>
            {/* TODO: Social Media Icons with hover over for expanding options */}
            <Socials
              theme={theme}
              themeUpdate={this.props.themeUpdate} />
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
