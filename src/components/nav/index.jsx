import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Nav() {
  return (
    <div className="nav">
      <h1>My Site</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
}
