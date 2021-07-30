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
          <div class="icon">
            <i class="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
}
