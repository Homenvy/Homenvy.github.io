import React, { Component } from "react";

class Footer extends Component {
  render() {
    console.log("Footer - Rendered");
    /*TODO: Sitemap
            Brainstorm other elements to go here
    */
    return (
        <div className={"footer"}>
            <iframe 
                src={("https://discord.com/widget?id=362750172385509377&theme="+this.props.theme)}
                width="350" 
                height="500" 
                allowtransparency="true" 
                className="disWidget"
                frameBorder="0" >
            </iframe>
        <div>
            <p style={{textAlign: "center"}}>This is the footer</p>
        </div>
        </div>
      
    );
  }
}

export default Footer;
