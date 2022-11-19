import React, { Component } from "react";


class NavBar extends Component {
// Stateless Functional Component (shortcut sfc)
// totalCounters not used, was used previously for shopping cart.
// const NavBar = ({ totalCounters }) => {
  render() {
    console.log("NavBar - Rendered");
    let themeState = "light";
    const classStyle = "navbar bg-";

    return (
      <nav className={(classStyle + themeState)}>
        <div className="container-fluid">

          <a className="navbar-brand" href="#">
            Logo Here{" "}
            <span className="badge badge-pill badge-secondary">
              
            </span>
          </a>

          <div>
            {/* TODO: Navigation to other pages */}
          </div>

          <div>
            <div className="radar-toggle">
              <label className="switch">
                <input
                  type="checkbox"
                  // onClick={this.themeChange} TODO: get themechange to work and render page
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div>
            {/* TODO: Social Media Icons with hover over for expanding options */}
          </div>
        
          <div>
            {/* TODO: Web 3 Wallet connection button place holder for later research */}
          </div>
        </div>
      </nav>
    );
  }

  // themeChange() {
  //   console.log("this happened. " + themeState);
  //   if (themeState == "dark"){
  //     themeState = "light";
  //   } else {
  //     themeState = "dark";
  //   }
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
