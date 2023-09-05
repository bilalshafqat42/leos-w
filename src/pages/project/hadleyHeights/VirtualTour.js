import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import Logo from "../../../assets/images/logo.png";

import "./exterior.css";
import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";
import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";

const VirtualTour = () => {
  const handleRightNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").appendChild(lists[0]);
  };
  const handleLeftNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };
  return (
    <section className="exterior-page-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="main-mini-heading-section">
              <Link to="/">
                <h1 className="mt-4 mb-2 page-heading-title">
                  3d virtual tour
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
            <div className="containing-3d">
              <iframe
                width="1600"
                height="700"
                src="https://my.matterport.com/show/?m=ArEpYUX3ZkD"
                frameborder="0"
                allowfullscreen
                allow="xr-spatial-tracking"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <LeftSidebar />
      <ProjectBottomBar />
    </section>
  );
};

export default VirtualTour;
