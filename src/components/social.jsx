import React, { Component } from "react";
import SocialMedia from "../SocialMedia.json";

class Social extends Component {
  // state = {
  //     value: this.props.counter.value,
  //     tags: []

  // };

  // this below constructor is only used if = () => no longer works
  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);

  // }

  // renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //     return  <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>;
  // };

  // handleIncrement = product => {
  //     console.log(product);

  //     this.setState({ value: this.state.value + 1 })

  // };

//   componentDidUpdate(prevProps, prevState) {
//     console.log("prevProps", prevProps);
//     console.log("prevState", prevState);
//     if (prevProps.counter.value !== this.props.counter.value) {
//       //ajax call and get new data from server
//     }
//   }

  componentWillUnmount() {
    console.log("Social - Unmount");
  }

  render() {
    console.log("Social - Rendered");

    
    return ( 
      <div className="iObjContainer">
        {SocialMedia.socialMedia.map((item, i) => (
            (item.isEnabled === "1")
                ? <a 
                    href={item.url} 
                    id={(item.name + "-" + this.props.theme)}
                    key={item.name} 
                    alt={item.name}
                    target="_blank"
                    />
                : <div></div>
        ))}
      </div>
    );
  }
}

export default Social;
