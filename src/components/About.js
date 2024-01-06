import "./About.css";
import main_image from "../images/main.jpeg";

import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about-section">
        <div className="about-heading">
          <h1>About</h1>
        </div>
        <div className="about-content">
    <p>Mom's Tailor is a modern platform that combines the skills of experienced tailors with the ease of technology. We're changing the way people think about and use tailoring services, making it more convenient and enjoyable for everyone.</p>    
    </div>
    <div className="about-image"><img src={main_image}/></div>
      </div>
    </div>
  );
}

export default About;

