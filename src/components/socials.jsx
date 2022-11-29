import React, { Component } from "react";
import Social from "./social";

class Socials extends Component {
  render() {
    console.log("Socials - Rendered");

    const theme = this.props.theme;
    const sMedBtn = "socialMediaButton-";
    return (
      <div className="sMedia">
        <div 
          className="iContainer" 
          id={sMedBtn + theme}
          //onClick={""}
          >
            {/* TODO: Obtain more Social Media Icons
                      Hover and Tap effect transitions
                      onClick effect to lock menu out
                      Setup the Main Icon to be comprised of small sm icons */}
          <div className={"socialObjContainer"+"-"+theme}>
            <Social 
              theme={theme}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Socials;
