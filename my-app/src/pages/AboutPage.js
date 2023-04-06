import React from "react";
import Navbar from "../components/Navbar/Navbar.js";

const sections = [
  {
    title: "DEI Work",
    description:
      "I'm passionate about creating a more diverse and inclusive tech industry, and have worked on a variety of initiatives to promote DEI.",
  },
  {
    title: "Engineering",
    description:
      "I have experience in full-stack web development, as well as machine learning and data engineering.",
  },
  {
    title: "Entrepreneurship",
    description:
      "I co-founded a startup that focused on creating accessible education solutions for low-income students.",
  },
  {
    title: "Venture Capital",
    description:
      "I'm interested in learning more about the venture capital industry and the process of investing in and supporting startups.",
  },
];

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <h1>About Me</h1>
        <p>
          Hi Hi! As one of the less than 2% of black female software machine
          learning engineers, I'm excited to share my passion for data and
          artificial intelligence with you. To me, data is a fascinating subject
          that goes against the law of supply and demand - the more high-quality
          data you have, the more value you can gain and the greater impact you
          can make. In today's world, where artificial intelligence is becoming
          increasingly prevalent, I believe that understanding and utilizing
          data is more important than ever. Join me as I explore the
          possibilities of this exciting field and share my insights with you.
        </p>
        <div className="container">
          <div className="row">
            {sections.map((section) => (
              <div className="col-md-6 col-lg-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h2 className="card-title">{section.title}</h2>
                    <p className="card-text">{section.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
