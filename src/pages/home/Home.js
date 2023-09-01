import React from "react";
import "./home.css";

import Navigation from "../../components/navigation/Navigation";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";

const Home = () => {
  return (
    <div className="main-page-banner">
      <div className="container">
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
