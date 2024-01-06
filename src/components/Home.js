import React from 'react';
import About from "./About";
import Navbar from "./Navbar";
import Samples from "./Samples";
import Mission from "./Mission";

function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Samples />
      <Mission />
    </div>
  );
}

export default Home;

