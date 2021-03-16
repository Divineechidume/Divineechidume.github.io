import React, { Component } from "react";
import "./App.css";
import "./containers/NavagationBar";
import NavagationBar from "./containers/NavagationBar";

class App extends Component {
  render() {
    return (
      <div class="background">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <NavagationBar />

              <div div class="container">
                <div class="mainText">DIVINEE CHIDUME</div>
                <div class="subHeading">
                  SOFTWARE ENGINEER - ENTREPRENUER - LIFE LEARNER
                </div>
              </div>
            </div>
            <div
              class="col-sm-4 divineeCover"
              style={{ paddingRight: 0 }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
