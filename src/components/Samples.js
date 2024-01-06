import React from 'react';
import "./Samples.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";

function Samples() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="samples">
      <h1>Samples</h1>
      <div className="sample-grid">
        {images.map((image, index) => (
          <div key={index} className="sample-item">
            <img src={image} alt={`Sample ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Samples;

