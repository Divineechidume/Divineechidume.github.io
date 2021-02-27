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

const rightPic = {
  height: "100%",
  backgroundImage: `url(${DivineeCover})`,
  backgroundPosition: "right",
};

class App extends Component {
  render() {
    return (
      <div style={divStyle}>
        <img
          src={DivineeCover}
          alt="DivineeCover"
          height="100%"
          width="auto"
          style={{ float: "right" }}
        />
      </div>
    );
  }
}

export default App;
