import React, { Component } from "react";
import Background from "./images/Background.svg";
import DivineeCover from "./images/DivineeCover.jpg";
import "./App.css";

const divStyle = {
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

class App extends Component {
  render() {
    return (
      <div style={divStyle}>
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <nav class="navbar navbar-expand-lg navbar-transparent">
                <a class="navbar-brand" href="#">
                  Bootstrap
                </a>
              </nav>
            </div>
            <div class="col-sm-4 img-6" style={{ paddingRight: 0 }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
