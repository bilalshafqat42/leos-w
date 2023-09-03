import React from "react";
import "../../projectPage.css";
// import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";
import "../hadleyHeights.css";
import "../exterior.css";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faDoorOpen,
  faShield,
  faWindowRestore,
  faHeart,
  faLocationDot,
  faPersonShelter,
  faTableCellsLarge,
  faArrowRight,
  faArrowLeft,
  faPuzzlePiece,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const Floor2 = () => {
  const handleRightNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").appendChild(lists[0]);
  };
  const handleLeftNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };

  const [listToggle, setListToggle] = useState(true);

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
      {/* <div className="container">
        <div className="row">
          <div className="col">
            <h1>ProjectPage</h1>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containings">
              <div id="slide">
                <div
                  className="items exterior-one-slide-floor-one"
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
            to={"/projects/hadley-heights/floors"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faPersonShelter}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Floors</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/units"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faPuzzlePiece}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Units</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/floorplans"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faVectorSquare}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Floor Plans</h4>
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
              <h4 className="bottom-navigation-item">Units & Floor</h4>
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
      <div className="right-navigation-menu">
        <div className="left-navigation-menu">
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors"}
              className="d-flex flex-direction-row text-center align-items-center"
              // onClick={() => setListToggle(!listToggle)}
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 1</h4>
            </Link>
          </div>
          {/* {listToggle && (
            <div className="mb-3">
              <div className="mini-navigation-bar-left units-buttons-design d-flex flex-row justify-content-between mb-5">
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 101
                    </h4>
                  </Link>
                </span>
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 102
                    </h4>
                  </Link>
                </span>
              </div>
              <div className="mini-navigation-bar-left units-buttons-design d-flex flex-row justify-content-between mb-5">
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 103
                    </h4>
                  </Link>
                </span>
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 104
                    </h4>
                  </Link>
                </span>
              </div>
              <div className="mini-navigation-bar-left units-buttons-design d-flex flex-row justify-content-between mb-5">
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 105
                    </h4>
                  </Link>
                </span>
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 106
                    </h4>
                  </Link>
                </span>
              </div>
              <div className="mini-navigation-bar-left units-buttons-design d-flex flex-row justify-content-between mb-5">
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 107
                    </h4>
                  </Link>
                </span>
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 108
                    </h4>
                  </Link>
                </span>
              </div>
              <div className="mini-navigation-bar-left units-buttons-design d-flex flex-row justify-content-between mb-5">
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 109
                    </h4>
                  </Link>
                </span>
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 110
                    </h4>
                  </Link>
                </span>
              </div>
            </div>
          )} */}
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors"}
              className="d-flex flex-direction-row text-center align-items-center"
              onClick={() => setListToggle(!listToggle)}
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 1</h4>
            </Link>
          </div>
          {listToggle && (
            <div className="mb-3">
              <div className="mini-navigation-bar-left units-buttons-design d-flex flex-row justify-content-between mb-5">
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 101
                    </h4>
                  </Link>
                </span>
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 102
                    </h4>
                  </Link>
                </span>
              </div>
              <div className="mini-navigation-bar-left units-buttons-design d-flex flex-row justify-content-between mb-5">
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 103
                    </h4>
                  </Link>
                </span>
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 104
                    </h4>
                  </Link>
                </span>
              </div>
              <div className="mini-navigation-bar-left units-buttons-design d-flex flex-row justify-content-between mb-5">
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 105
                    </h4>
                  </Link>
                </span>
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 106
                    </h4>
                  </Link>
                </span>
              </div>
              <div className="mini-navigation-bar-left units-buttons-design d-flex flex-row justify-content-between mb-5">
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 107
                    </h4>
                  </Link>
                </span>
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 108
                    </h4>
                  </Link>
                </span>
              </div>
              <div className="mini-navigation-bar-left units-buttons-design d-flex flex-row justify-content-between mb-5">
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 109
                    </h4>
                  </Link>
                </span>
                <span className="units-boxes-design m-1">
                  <Link
                    to={"/projects/hadley-heights/exterior1"}
                    className="d-flex flex-column text-center align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTableCellsLarge}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      Unit 110
                    </h4>
                  </Link>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Floor2;
