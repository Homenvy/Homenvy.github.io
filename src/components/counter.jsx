import React, { Component } from "react";

class Counter extends Component {
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

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        {/* { this.state.tags.length === 0 && 'Please create a new tag!'} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          //onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                </ul> */}
        {/* {this.renderTags() } */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    const x = <h1>Zero</h1>;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
