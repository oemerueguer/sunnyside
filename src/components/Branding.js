import React from "react";
import Egg from './img/image-transform.jpg';
import './Branding.scss';

export default function Branding() {
  return (
    <>
      <div className="container">
        <div className="info-box">
          <div className="info-text">  
          <h1>Transform your <br/> brand</h1>
          <p>
            We are full-service creative agency specializing in helping brands
            grwo fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <div className="Btn-yellow">LEARN MORE</div>
        </div>
        </div>
        <div className="image-box">
            <img src={Egg} alt="Egg with yellow background" />
        </div>
      </div>
    </>
  );
}
