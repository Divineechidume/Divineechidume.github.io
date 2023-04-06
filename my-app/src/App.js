import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/AboutPage">
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

