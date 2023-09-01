import React from "react";
import "./home.css";
import Logo from "../../assets/images/logo.png";

// import Navigation from "../../components/navigation/Navigation";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import { Link } from "react-router-dom";

import "../project/hadleyHeights/exterior.css";

const Home = () => {
  return (
    <div className="main-page-banner">
      <div className="container-fluid home-page-topbar">
        <div className="row">
          <div className="col">
            <div className="main-mini-heading-sections">
              <h1 className="mt-4 mb-2 page-heading-title">
                <Link to="/">Project Page</Link>
              </h1>
              <img
                src={Logo}
                alt="Leos International"
                width={130}
                height={40}
                className="mt-3 mb-3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2 className="mt-5">Home Page</h2>
          </div>
        </div>
      </div>
      {/* <Navigation /> */}
      <BottomNavigation />
    </div>
  );
};

export default Home;
