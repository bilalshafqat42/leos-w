import React from "react";
import { Link } from "react-router-dom";
import "./projectBottomBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationDot,
  faHeart,
  faWindowRestore,
  faShield,
  faDoorOpen,
  faVrCardboard,
  faCube,
} from "@fortawesome/free-solid-svg-icons";

const ProjectBottomBar = () => {
  return (
    <div className="bottom-navigations-bar">
      <div className="mini-navigation-bar">
        <div className="navigation-content">
          <Link to={"/projects/hadley-heights"}>
            <FontAwesomeIcon
              icon={faHouse}
              className="icons-section-bottom-navigation"
            />
            <br />
            <h4 className="bottom-navigation-item">Home</h4>
          </Link>
        </div>
        <div className="navigation-content">
          <Link to={"/projects/hadley-heights/location"}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="icons-section-bottom-navigation"
            />
            <br />
            <h4 className="bottom-navigation-item">Location</h4>
          </Link>
        </div>
        <div className="navigation-content">
          <Link to={"/projects/hadley-heights/floorplans"}>
            <FontAwesomeIcon
              icon={faCube}
              className="icons-section-bottom-navigation"
            />
            <br />
            <h4 className="bottom-navigation-item">2d Floor Plans</h4>
          </Link>
        </div>
        <div className="navigation-content">
          <Link to={"/projects/hadley-heights/units"}>
            <FontAwesomeIcon
              icon={faWindowRestore}
              className="icons-section-bottom-navigation"
            />
            <br />
            <h4 className="bottom-navigation-item">Units & Floors</h4>
          </Link>
        </div>
        <div className="navigation-content">
          <Link to={"/projects/hadley-heights/virtual-tour"}>
            <FontAwesomeIcon
              icon={faVrCardboard}
              className="icons-section-bottom-navigation"
            />
            <br />
            <h4 className="bottom-navigation-item">360° Virtual Tour</h4>
          </Link>
        </div>
        <div className="navigation-content">
          <Link to={"/"}>
            <FontAwesomeIcon
              icon={faDoorOpen}
              className="icons-section-bottom-navigation"
            />
            <br />
            <h4 className="bottom-navigation-item">Back to main page</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectBottomBar;
