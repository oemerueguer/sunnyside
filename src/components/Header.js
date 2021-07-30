import React from "react";
import "./Header.scss";
import Logo from "./img/logo.svg";
import ArrowDown from './img/icon-arrow-down.svg';

export default function Header() {
  return (
    <>
      <div className="section-banner">
        <div className="navigation">
          <div className="Logo">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="item-group">
            <ul>
              <a className="Underline" href="/">
                <li>About</li>
              </a>
              <a className="Underline" href="/">
                <li>Services</li>
              </a>
              <a className="Underline" href="/">
                <li>Projects</li>
              </a>
              <a className="ContactBtn" href="/">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
        <h1 className="Heading">We are creatives</h1>
        <div className="icon-arrow-down">
          <img src={ArrowDown} alt="arrow-down" />
        </div>
      </div>
    </>
  );
}
