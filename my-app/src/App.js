import React, { Component } from 'react';
import Background from './images/Background.png';
import DivineeCover from './images/DivineeCover.jpg';
import './App.css';

const divStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: "fixed"
};

const rightPic = {
  height: '100%',
  backgroundImage: `url(${DivineeCover})`,
  backgroundPosition: "right"
};

class App extends Component {
  render() {
    return (
       <div style={divStyle}>
       	<div>
            <div style={rightPic}>
        	</div>
	    </div>
       </div>
    );
  }
}

export default App;