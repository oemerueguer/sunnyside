import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="LogoFooter"></div>
        <ul className="NavFooter">
          <a className="nav-item-footer" href="/">
            <li>About</li>
          </a>
          <a className="nav-item-footer" href="/">
            <li>Services</li>
          </a>
          <a className="nav-item-footer" href="/">
            <li>Projects</li>
          </a>
        </ul>
        <div className="icon-group">
          <div className="icon">
            <i class="fab fa-facebook-square"></i>
          </div>
          <div class="icon">
            <i class="fab fa-instagram"></i>
          </div>
          <div class="icon">
          <i class="fab fa-twitter"></i>
          </div>
          <div class="icon">
          <i class="fab fa-pinterest"></i>
          </div>
        </div>
      </div>
    </>
  );
}
