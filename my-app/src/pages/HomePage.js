import React, { useEffect } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar/Navbar.js";
import DivineeCover from "../images/DivineeFace.jpeg";

const HomePage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="homeWrapper">
      <div className="background d-flex align-items-center justify-content-center">
        <div className="container content">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container">
                <img src={DivineeCover} alt="Divinee Cover" />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="mainText display-4 fw-bold text-center">
                HI I'M {"<DIV>"}
              </h2>
              <p className="subHeading fw-light text-center">
                Hi Hi! As one of the less than 2% of black female software
                machine learning engineers, I'm excited to share my passion for
                data and artificial intelligence with you. To me, data is a
                fascinating subject that goes against the law of supply and
                demand - the more high-quality data you have, the more value
                you can gain and the greater impact you can make. In today's
                world, where artificial intelligence is becoming increasingly
                prevalent, I believe that understanding and utilizing data is
                more important than ever. Join me as I explore the possibilities
                of this exciting field and share my insights with you.
              </p>
              <button className="btn btn-primary btn-lg mt-3">
                View My Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
