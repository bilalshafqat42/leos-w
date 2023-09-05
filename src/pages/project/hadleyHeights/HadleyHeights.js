import React from "react";
import "../projectPage.css";
import "./hadleyHeights.css";
import "./exterior.css";
import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";
import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const HadleyHeights = () => {
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
                <div className="items exterior-one-slide-one">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                <div className="items exterior-one-slide-two">
                  <div className="content">
                    <div className="name">MODERN ARCHITECTURE & DESIGN</div>
                    <div className="des">
                      Designed and built to the highest quality specifications
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                <div className="items exterior-one-slide-three">
                  <div className="content">
                    <div className="name">PREMIUM QUALITY APARTMENTS</div>
                    <div className="des">
                      Choose from studios, 1 & 2 bedroom apartments
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                <div className="items exterior-one-slide-four">
                  <div className="content">
                    <div className="name">PREMIUM QUALITY APARTMENTS</div>
                    <div className="des">
                      Choose from studios, 1 & 2 bedroom apartments
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
      <LeftSidebar />

      <ProjectBottomBar />
    </section>
  );
};

export default HadleyHeights;
