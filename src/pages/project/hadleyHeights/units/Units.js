import React from "react";
import "../../projectPage.css";
// import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";
import "../hadleyHeights.css";
import "../exterior.css";

import { firstFloors } from "../../../../db/firstFloor";
import { secondFloors } from "../../../../db/secondFloor";
import { thirdFloors } from "../../../../db/threeFloor";
import { fourthFloors } from "../../../../db/fourthFloor";
import { fifthFloors } from "../../../../db/fifthFloor";
import { sixthFloors } from "../../../../db/sixthFloor";
import { seventhFloors } from "../../../../db/seventhFloor";
import { eighthFloors } from "../../../../db/eightFloor";
import { ninthFloors } from "../../../../db/ninthFloor";
import { tenthFloors } from "../../../../db/tenthFloor";
import { eleventhFloors } from "../../../../db/eleventhFloor";
import { twelthFloors } from "../../../../db/twelthFloor";
import { thirteenFloors } from "../../../../db/thirteenFloor";
import { fourteenFloors } from "../../../../db/fourteenFloor";
import { fifteenFloors } from "../../../../db/fifteenFloor";
import { sixteenFloors } from "../../../../db/sixteenFloor";
import { seventeenFloors } from "../../../../db/seventeenFloor";
import { eighteenFloors } from "../../../../db/eighteenFloor";
import { ninteenFloors } from "../../../../db/ninteenFloor";
import { twentyFloors } from "../../../../db/twentyFloor";
import { twentyoneFloors } from "../../../../db/twentyoneFloor";
import { twentytwoFloors } from "../../../../db/twentytwoFloor";
import { twentythreeFloors } from "../../../../db/twentythreeFloor";

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
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const Units = () => {
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
                <div
                  className="items exterior-one-slide-two"
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
                  className="items exterior-one-slide-three"
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
        {/* <div className="mini-navigation-bar-left">
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
        </div> */}
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
          <div className="row gx-2 m-1">
            {firstFloors.map((firstFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    firstFloor.status == true
                      ? "green-bg"
                      : firstFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {firstFloor.unitNumber}
                    </h4>
                    <p className="small-text">{firstFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {secondFloors.map((secondFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    secondFloor.status == true
                      ? "green-bg"
                      : secondFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {secondFloor.unitNumber}
                    </h4>
                    <p className="small-text">{secondFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {thirdFloors.map((thirdFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    thirdFloor.status == true
                      ? "green-bg"
                      : thirdFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {thirdFloor.unitNumber}
                    </h4>
                    <p className="small-text">{thirdFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {fourthFloors.map((fourthFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    fourthFloor.status == true
                      ? "green-bg"
                      : fourthFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {fourthFloor.unitNumber}
                    </h4>
                    <p className="small-text">{fourthFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {fifthFloors.map((fifthFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    fifthFloor.status == true
                      ? "green-bg"
                      : fifthFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {fifthFloor.unitNumber}
                    </h4>
                    <p className="small-text">{fifthFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {sixthFloors.map((sixthFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    sixthFloor.status == true
                      ? "green-bg"
                      : sixthFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {sixthFloor.unitNumber}
                    </h4>
                    <p className="small-text">{sixthFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {seventhFloors.map((seventhFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    seventhFloor.status == true
                      ? "green-bg"
                      : seventhFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {seventhFloor.unitNumber}
                    </h4>
                    <p className="small-text">{seventhFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {eighthFloors.map((eighthFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    eighthFloor.status == true
                      ? "green-bg"
                      : eighthFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {eighthFloor.unitNumber}
                    </h4>
                    <p className="small-text">{eighthFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {ninthFloors.map((ninthFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    ninthFloor.status == true
                      ? "green-bg"
                      : ninthFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {ninthFloor.unitNumber}
                    </h4>
                    <p className="small-text">{ninthFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {tenthFloors.map((tenthFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    tenthFloor.status == true
                      ? "green-bg"
                      : tenthFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {tenthFloor.unitNumber}
                    </h4>
                    <p className="small-text">{tenthFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {eleventhFloors.map((eleventhFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    eleventhFloor.status == true
                      ? "green-bg"
                      : eleventhFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {eleventhFloor.unitNumber}
                    </h4>
                    <p className="small-text">{eleventhFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {twelthFloors.map((twelthFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    twelthFloor.status == true
                      ? "green-bg"
                      : twelthFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {twelthFloor.unitNumber}
                    </h4>
                    <p className="small-text">{twelthFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {thirteenFloors.map((thirteenFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    thirteenFloor.status == true
                      ? "green-bg"
                      : thirteenFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {thirteenFloor.unitNumber}
                    </h4>
                    <p className="small-text">{thirteenFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {fourteenFloors.map((fourteenFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    fourteenFloor.status == true
                      ? "green-bg"
                      : fourteenFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {fourteenFloor.unitNumber}
                    </h4>
                    <p className="small-text">{fourteenFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {fifteenFloors.map((fifteenFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    fifteenFloor.status == true
                      ? "green-bg"
                      : fifteenFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {fifteenFloor.unitNumber}
                    </h4>
                    <p className="small-text">{fifteenFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {sixteenFloors.map((sixteenFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    sixteenFloor.status == true
                      ? "green-bg"
                      : sixteenFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {sixteenFloor.unitNumber}
                    </h4>
                    <p className="small-text">{sixteenFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {seventeenFloors.map((seventeenFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    seventeenFloor.status == true
                      ? "green-bg"
                      : seventeenFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {seventeenFloor.unitNumber}
                    </h4>
                    <p className="small-text">{seventeenFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {eighteenFloors.map((eighteenFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    eighteenFloor.status == true
                      ? "green-bg"
                      : eighteenFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {eighteenFloor.unitNumber}
                    </h4>
                    <p className="small-text">{eighteenFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {ninteenFloors.map((ninteenFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    ninteenFloor.status == true
                      ? "green-bg"
                      : ninteenFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {ninteenFloor.unitNumber}
                    </h4>
                    <p className="small-text">{ninteenFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {twentyFloors.map((twentyFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    twentyFloor.status == true
                      ? "green-bg"
                      : twentyFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {twentyFloor.unitNumber}
                    </h4>
                    <p className="small-text">{twentyFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {twentyoneFloors.map((twentyoneFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    twentyoneFloor.status == true
                      ? "green-bg"
                      : twentyoneFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {twentyoneFloor.unitNumber}
                    </h4>
                    <p className="small-text">{twentyoneFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {twentytwoFloors.map((twentytwoFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    twentytwoFloor.status == true
                      ? "green-bg"
                      : twentytwoFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {twentytwoFloor.unitNumber}
                    </h4>
                    <p className="small-text">{twentytwoFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="row gx-2 m-1">
            {twentythreeFloors.map((twentythreeFloor, index) => (
              <div key={index} className="col-6">
                <div
                  className={`${
                    twentythreeFloor.status == true
                      ? "green-bg"
                      : twentythreeFloor.status == null
                      ? "white-bg"
                      : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {twentythreeFloor.unitNumber}
                    </h4>
                    <p className="small-text">{twentythreeFloor.unitType}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Units;
