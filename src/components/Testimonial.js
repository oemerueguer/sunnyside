import React from "react";
import "./Testimonial.scss";

export default function Testimonial() {
  return (
    <>
      <div className="section-heading">
        <h2>Client Testimonials</h2>
      </div>
      <div className="section-testimonials">
        <div className="section-testimonial-item">
          <div className="testimonial-pic emily"></div>
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="test-name">Emily R.</div>
          <div className="test-position">Marketing Director</div>
        </div>
        <div className="section-testimonial-item">
          <div className="testimonial-pic thomas"></div>
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div className="test-name">Thomas S.</div>
          <div className="test-position">Chief Operating Officer</div>
        </div>
        <div className="section-testimonial-item">
          <div className="testimonial-pic jennie"></div>
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="test-name">Jennie F.</div>
          <div className="test-position">Business Owner</div>
        </div>
      </div>
    </>
  );
}
