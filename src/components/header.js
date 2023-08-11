// header.js
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <h1 className="name">SURAKSHA MORE</h1>
      <div>
        <ul className="navContainer">
          <li className="navItems"></li>
          <Link to="/">
            <li className="navItems">About me </li>
          </Link>
          <Link to="/projects">
            <li className="navItems">Projects </li>
          </Link>
          <Link to="/skills">
            <li className="navItems">Skills</li>
          </Link>
          <Link to="/contact">
            <li className="navItems">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
