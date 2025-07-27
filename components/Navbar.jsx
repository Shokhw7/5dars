import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-base-200">
      <div className="navbar">
        <div className="navbar-start"></div>
          <div className="navbar-center">
            <ul className="menu menu-horizontal">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end"></div>
      </div>
    </header>
  );
}

export default Navbar;
