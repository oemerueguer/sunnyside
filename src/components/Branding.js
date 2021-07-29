import React from "react";
import Egg from './img/image-transform.jpg';

export default function Branding() {
  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Transform your brand</h1>
          <p>
            We are full-service creative agency specializing in helping brands
            grwo fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="box">
            <img src={Egg} alt="Egg with yellow background" />
        </div>
      </div>
    </>
  );
}
