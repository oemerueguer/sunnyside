import React from "react";
import "./Header.scss";
import Logo from "./img/logo.svg";
import HeaderPic from './img/image-header.jpg'

export default function Header() {
  return (
    <>
    <div className="section-banner">
        <div className="navigation">
            <div className="Logo">
                <img src={Logo} alt="Logo" />
            </div>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>

    </>
  );
}
