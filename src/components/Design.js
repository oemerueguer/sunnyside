import React from "react";
import "./Design.scss";

export default function Design() {
  return (
    <>
      <div className="flex-container">
        <div className="info-graphic">
          <div className="info-text">
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              atttention.
            </p>
          </div>
        </div>
        <div className="info-photo">
          <div className="info-text">
            <h1>Photography</h1>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
