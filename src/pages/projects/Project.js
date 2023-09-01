import React from "react";
import "./project.css";

import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import MainBannerImage from "../../assets/images/headley-featured-image.jpg";

// import Navigation from "../../components/navigation/Navigation";
import ProjectNavigation from "../../components/projectsNavigation/ProjectNavigation";
// import HomepageBanner from "../../assets/images/main-homepage-banner.jpg";

const Project = () => {
  return (
    <section className="project-section">
      <div className="container-fluid home-page-topbar">
        <div className="row">
          <div className="col">
            <div className="main-mini-heading-sections">
              <h1 className="mt-4 mb-2 page-heading-title">
                <Link to="/">LEO'S PROJECTS</Link>
              </h1>
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
      {/* <div className="container"> */}
      <div className="row">
        <div className="col">
          {/* <h2 className="mt-5">Properties Page</h2> */}
          <div className="main-banner-properties-page">
            <img
              src={MainBannerImage}
              alt="main-banner-system"
              width={1800}
              height={600}
              className="projects-banner-images"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
      <ProjectNavigation />
      {/* <Navigation /> */}
    </section>
  );
};

export default Project;
