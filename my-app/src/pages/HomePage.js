import React, { Component } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar/Navbar.js";

class HomePage extends Component {
  render() {
    return (
      <div class="homeWrapper">
        <div class="background">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <Navbar />
                <div div class="container">
                  <div class="mainText">DIVINEE CHIDUME</div>
                  <div class="subHeading">
                    SOFTWARE ENGINEER - ENTREPRENUER - LIFE LEARNER
                  </div>
                </div>
              </div>
              <div
                class="col-xl divineeCover"
                style={{ paddingRight: 0 }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
