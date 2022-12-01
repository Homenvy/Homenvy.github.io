import React, { Component, useState, useEffect } from "react";
import { ReactDOM } from "react-dom/client";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import AboutMe from "./pages/AboutMe";
import Service from "./pages/Service";
import Resume from "./pages/Resume";

class App extends Component {
  state = {
    theme: "light",
    activePage: "Project Zeal"
  };

  //only called once and used to initiate properties of App
  constructor() {
    super();
    console.log("App - Constructor state: " + this.state.theme);
    //if this line is used, props must be sent in constructor parameters AND super parameters
    //this.state = this.props.something;
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  render() {

    return (
      <>
        <React.Fragment>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout theme={this.state.theme} 
                                            activePage={this.state.activePage}
                                          />}>
                    <Route index element={<Home />} />
                    <Route path="portfolio" element={<Portfolio />}/>
                    <Route path="contact" element={<Contact />}/>
                    <Route path="aboutme" element={<AboutMe />}/>
                    <Route path="service" element={<Service />}/>
                    <Route path="resume" element={<Resume />}/>
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
          </BrowserRouter>
          {/* <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete} />
          </main> */}
        </React.Fragment>
        <p style={{textAlign: "center"}}>Be hyped for what's to come.
      </p>
    </>
    );
  }
}

export default App;
