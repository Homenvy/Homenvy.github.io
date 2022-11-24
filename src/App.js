import React, { Component, useState } from "react";
import { ReactDOM } from "react-dom/client";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import AboutMe from "./pages/AboutMe";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    themeState: "dark",
  };

  //only called once and used to initiate properties of App
  constructor() {
    super();
    console.log("App - Constructor state: " + this.state.themeState);
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
      <>
      
      <React.Fragment>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout theme={this.themeState}/>}>
                  <Route index element={<Home />} />
                  <Route path="portfolio" element={<Portfolio />}/>
                  <Route path="contact" element={<Contact />}/>
                  <Route path="aboutme" element={<AboutMe />}/>
                  <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
        </BrowserRouter>
        {/* <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length} stateTheme={this.state.stateTheme} /> */}
        {/* <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete} />
        </main> */}
      </React.Fragment>
      <p>Welcome to Project Zeal. Be hyped for what's to come.
    </p></>
      
    );
  }
}

export default App;
