import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => (
  <div className="notfound-container">
    <h3>We couldn't find what you were looking for</h3>
    <div className="notfound-button">
      <Link to="/convert">You can convert a new playlist here</Link>
    </div>
  </div>
);

export default NotFound;
