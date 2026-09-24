import React, { Component } from "react";
import Socials from "./socials";
import AccountInteraction from "./accountInteraction";
import AppRoutes from "../Routes.json";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

class NavBar extends Component {
  state = { menuOpen: false };
// Stateless Functional Component (shortcut sfc)
// totalCounters not used, was used previously for shopping cart.
// const NavBar = ({ totalCounters }) => {

  componentDidMount() {
    console.log("NavBar - Mounted");
    if (Cookies.get('theme') === "dark") {
      console.log("test successful");
      document.getElementById("themeButton").checked = true;
    }
  }
  
  render() {
    
    console.log("NavBar - Rendered");
    const classStyle = "navbar ";
    let activePage = this.props.activePage;
    let theme = this.props.theme;
    return (
      <div style={{paddingBottom: "75px"}}>
        <nav className={(classStyle + theme)}>
          <div className="container-fluid">
            {/*TODO: Fix theme on local routes 
                    setup an Activate variable for a few areas*/}
            <Link 
              to="/" 
              className="navbar-brand navLogo" aria-label="Project Zeal home"
              onClick={() => this.props.currentPage("Project Zeal")}
            />

            <div>
              <div className="radar-toggle">
                <label className="switch">
                  <input
                    type="checkbox" aria-label="Toggle dark theme"
                    onClick={() => this.props.toggleTheme()}
                    id="themeButton"
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>

            <div className={'navLinkContainer site-menu' + (this.state.menuOpen ? ' is-open' : '')}
              onKeyDown={event => { if (event.key === 'Escape') { this.setState({ menuOpen: false }); document.getElementById('site-menu-toggle').focus(); } }}
              onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) this.setState({ menuOpen: false }); }}>
              {/* TODO: Page Selected here then when click/hover opens underneat for options 
                        Page youre on shows up, rest go in a drop down div*/}
              <button id="site-menu-toggle" type="button" className={'site-menu-toggle ' + theme}
                aria-expanded={this.state.menuOpen} aria-controls="site-menu-links"
                onClick={() => this.setState(state => ({ menuOpen: !state.menuOpen }))}>{activePage} ▾</button>
              <div id="site-menu-links" className={"navLinkDrawer " + theme} hidden={!this.state.menuOpen}>
                <ul className="noBullet">
                    {AppRoutes.routes.map((item, i) => (
                      (item.isEnabled === "1") ?
                      <li key={item.name}>
                        <Link 
                          to={item.to}
                          className={theme}
                          onClick={() => { this.props.currentPage(item.name); this.setState({ menuOpen: false }); }}>{item.name}
                        </Link>
                      </li> :
                        ""
                    ))} 
                </ul>
              </div>
            </div>
            <div>
              {/* TODO: Social Media Icons with hover over for expanding options */}
              <Socials theme={theme} />
            </div>
          
            <div>
              {/* TODO: Web 3 Wallet connection button place holder for later research 
                        Account interaction hub. Web3/Signin etc*/}
              <AccountInteraction></AccountInteraction>
            </div>
          </div>
        </nav>
      </div>
    )
  };
};


export default NavBar;
