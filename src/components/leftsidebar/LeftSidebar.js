import React from "react";
import "./leftSidebar.css";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar-design">
      <ul className="left-sidebar-navigation">
        <li>
          <Link to="/">Exterior 1</Link>
        </li>
        <li>
          <Link to="/">Exterior 2 </Link>
        </li>
        <li>
          <Link to="/">Dusk </Link>
        </li>
        <li>
          <Link to="/">Entrance </Link>
        </li>
        <li>
          <Link to="/">Facade </Link>
        </li>
        <li>
          <Link to="/">Balcony </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
