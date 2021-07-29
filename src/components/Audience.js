import React from "react";
import "./Branding.scss";
import Glass from "./img/image-stand-out.jpg";

export default function Audience() {
  return (
    <>
      <div className="container">
        <div className="image-box">
          <img src={Glass} alt="Standout with rosa background" />
        </div>
        <div className="info-box">
          <div className="info-text">
            <h1>
              Stand out to the right <br /> audience
            </h1>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll <br/>
              build and extend your brand in digital places.
            </p>
            <div className="Btn-softRed">LEARN MORE</div>
          </div>
        </div>
      </div>
    </>
  );
}
