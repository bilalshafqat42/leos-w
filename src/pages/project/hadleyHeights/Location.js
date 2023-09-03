import React from "react";
import "../projectPage.css";
// import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";
import "./hadleyHeights.css";
import "./exterior.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faDoorOpen,
  faShield,
  faWindowRestore,
  faHeart,
  faLocationDot,
  faPersonShelter,
  faSun,
  faDungeon,
  faStore,
  faTableCellsLarge,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const Location = () => {
  const handleRightNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").appendChild(lists[0]);
  };
  const handleLeftNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };
  return (
    <section className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="main-mini-heading-section">
              <Link to="/">
                <h1 className="mt-4 mb-2 page-heading-title">
                  Hadley Heights Page
                </h1>
              </Link>
              <Link to="/">
                <img
                  src={Logo}
                  alt="Leos International"
                  width={130}
                  height={40}
                  className="mt-3 mb-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containing">
              <div id="slide">
                <div className="items exterior-one-slide-one-map-location">
                  <div className="content">
                    <div className="name">Lorem Ipsum</div>
                    <div className="des">
                      description lorem ipsum sedts at dummy text written here.
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                <div className="items exterior-one-slide-two">
                  <div className="content">
                    <div className="name">Lorem Ipsum</div>
                    <div className="des">
                      description lorem ipsum sedts at dummy text written here.
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                <div className="items exterior-one-slide-three">
                  <div className="content">
                    <div className="name">Lorem Ipsum</div>
                    <div className="des">
                      description lorem ipsum sedts at dummy text written here.
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                <div
                  className="items exterior-one-slide-four"
                  // style="background-image: url('./images/image1.jpg')"
                >
                  <div className="content">
                    <div className="name">Lorem Ipsum</div>
                    <div className="des">
                      description lorem ipsum sedts at dummy text written here.
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                <div
                  className="items exterior-one-slide-five"
                  // style="background-image: url('./images/image1.jpg')"
                >
                  <div className="content">
                    <div className="name">Lorem Ipsum</div>
                    <div className="des">
                      description lorem ipsum sedts at dummy text written here.
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                <div
                  className="items exterior-one-slide-one"
                  // style="background-image: url('./images/image1.jpg')"
                >
                  <div className="content">
                    <div className="name">Lorem Ipsum</div>
                    <div className="des">
                      description lorem ipsum sedts at dummy text written here.
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                <div className="buttons">
                  <button id="prev" onClick={handleLeftNavigation}>
                    <i className="fa-solid fa-angle-left">
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="icons-section-bottom-navigation"
                      />
                    </i>
                  </button>
                  <button id="next" onClick={handleRightNavigation}>
                    <i className="fa-solid fa-angle-right">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="icons-section-bottom-navigation"
                      />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LeftSidebar /> */}
      <div className="left-navigation-menu">
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/exterior1"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faPersonShelter}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Exterior 1</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/exterior2"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faPersonShelter}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Exterior 2</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/dusk"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faSun}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Dusk</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/entrance"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faDungeon}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Entrance</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/facade"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faStore}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Facade</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/balcony"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faTableCellsLarge}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Balcony</h4>
          </Link>
        </div>
      </div>
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
            <Link to={"/projects/hadley-heights/amenities"}>
              <FontAwesomeIcon
                icon={faHeart}
                className="icons-section-bottom-navigation"
              />
              <br />
              <h4 className="bottom-navigation-item">Amenities</h4>
            </Link>
          </div>
          <div className="navigation-content">
            <Link to={"/projects/hadley-heights/units"}>
              <FontAwesomeIcon
                icon={faWindowRestore}
                className="icons-section-bottom-navigation"
              />
              <br />
              <h4 className="bottom-navigation-item">Units</h4>
            </Link>
          </div>
          <div className="navigation-content">
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faShield}
                className="icons-section-bottom-navigation"
              />
              <br />
              <h4 className="bottom-navigation-item">Collaterals</h4>
            </Link>
          </div>
          <div className="navigation-content">
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faDoorOpen}
                className="icons-section-bottom-navigation"
              />
              <br />
              <h4 className="bottom-navigation-item">Back</h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
