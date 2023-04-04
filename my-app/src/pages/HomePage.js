import React from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar/Navbar.js";
import DivineeCover from "../images/DivineeFace.jpeg"

const HomePage = () => {
  return (
    <div className="homeWrapper">
      <Navbar />
      <div className="background d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container">
                <img src={DivineeCover} alt="Divinee Cover"/>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="mainText display-1 fw-bold">DIVINEE CHIDUME</h1>
              <p className="subHeading fw-light">SOFTWARE ENGINEER - ENTREPRENUER - LIFE LEARNER</p>
              <button className="btn btn-primary btn-lg">View My Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
