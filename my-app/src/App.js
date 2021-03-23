import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.js";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
