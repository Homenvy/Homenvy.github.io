import React, { Component } from "react";
import Socials from "./socials";
import AccountInteraction from "./accountInteraction";
import AppRoutes from "../Routes.json";
import { Link, Routes } from "react-router-dom";

class NavBar extends Component {
// Stateless Functional Component (shortcut sfc)
// totalCounters not used, was used previously for shopping cart.
// const NavBar = ({ totalCounters }) => {
  
  render() {
    
    console.log("NavBar - Rendered");
    const classStyle = "navbar bg-";
    let activePage = this.props.activePage;
    let theme = this.props.theme;
    console.log(activePage);
    return (
      <nav className={(classStyle + theme)}>
        <div className="container-fluid">
          {/*TODO: Fix theme on local routes 
                   setup an Activate variable for a few areas*/}
          <Link 
            to="/" 
            className="navbar-brand navLogo"
            onClick={() => this.props.currentPage("Project Zeal")}
          />

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

          <div className="navLinkContainer">
            {/* TODO: Page Selected here then when click/hover opens underneat for options 
                      Page youre on shows up, rest go in a drop down div*/}
            <h1 className={theme} style={{fontSize: "2em", margin: "0"}}>{activePage}</h1>
            <div className={"navLinkDrawer " + theme}>
              <ul className="noBullet">
                  {AppRoutes.routes.map((item, i) => (
                    (item.isEnabled) ?
                    <li key={item.name}>
                      <Link 
                        to={item.to}
                        className={theme}
                        onClick={() => this.props.currentPage(item.name)}>{item.name}</Link>
                    </li> :
                      ""
                  ))} 
              </ul>
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
