import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";  //todo: Transform this into 2 navigational panes: PC use and Mobile use.
import Counters from "./components/counters"; //todo: set this aside for later use
import Banner from "./components/banner/banner"; 

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //only called once and used to initiate properties of App
  constructor() {
    super();
    console.log("App - Constructor");
    //if this line is used, props must be sent in constructor parameters AND super parameters
    //this.state = this.props.something;
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    //console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    //console.log(this.state.counters[0]);
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {

    return (
      <><React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length} />
        {/* <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete} />
        </main> */}
        <Banner />
      </React.Fragment>
      <p>Welcome to Project Zeal. This is currently a work in progress but
      I will be adding things I make here. I will make this a presentable site
      that I can use to refer traffic to me for services. This site will be constantly 
      updated when I am able to. Maybe I will add in a changelog at some point when 
      it is the right time. 
    </p></>
      
    );
  }
}

export default App;
