import React from "react";
import "./leftSidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCouch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const LeftSidebar = () => {
  return (
    <>
      {/* <div className="left-sidebar-design">
        <ul className="left-sidebar-navigation">
          <li>
            <Link to="/projects/hadley-heights/exterior">
              <faBuilding />
              Exterior
            </Link>
          </li>
          <li>
            <Link to="/projects/hadley-heights/interior">Interior </Link>
          </li>
          <li>
            <Link to="/projects/hadley-heights/amenities">Amenities </Link>
          </li>
        </ul>
      </div> */}
      {/* vertical navigation menu for hadley heights  */}
      <div className="left-navigation-menu">
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/exterior"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faBuilding}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Exteriors</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/interior"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faCouch}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Interiors</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/amenities"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Amenities</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
