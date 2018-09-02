import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = props => {
  return (
    <nav className="nav-container">
      <div className="header">
        <h2 className="logo">
          <Link to="/">Playlist Converter</Link>
        </h2>
        <ul className="main-nav">
          <li className="inverted">
            <Link to="/convert">Convert a playlist</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signup">Log In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
