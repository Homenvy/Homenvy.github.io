import React, { Component } from "react";

class Footer extends Component {
  render() {
    console.log("Footer - Rendered");
    /*TODO: Sitemap
            Brainstorm other elements to go here
    */
    return (
      <footer className={"footer"}>
        <iframe 
            src={("https://discord.com/widget?id=362750172385509377&theme="+this.props.theme)}
            width="350" 
            height="500" 
            allowtransparency="true" 
            className="disWidget"
            title="DiscordWidget">
        </iframe>
        <div>
          <p>Made by <a href="mailto:HomEnvy@gmail.com">HomEnvy</a></p>
        </div>
      </footer>
    
    );
  }
}

export default Footer;
