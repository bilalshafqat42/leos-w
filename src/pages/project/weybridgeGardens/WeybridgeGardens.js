import React from "react";
import "../projectPage.css";
// import LeftSidebar from "../../components/leftsidebar/LeftSidebar";
import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";

const WeybridgeGardens = () => {
  return (
    <section className="project-page-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>ProjectPage</h1>
          </div>
        </div>
      </div>
      <LeftSidebar />
    </section>
  );
};

export default WeybridgeGardens;
