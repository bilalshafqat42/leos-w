import React from "react";
import "./project.css";

// import Navigation from "../../components/navigation/Navigation";
import ProjectNavigation from "../../components/projectsNavigation/ProjectNavigation";

const Project = () => {
  return (
    <section className="project-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="mt-5">Properties Page</h2>
          </div>
        </div>
      </div>
      <ProjectNavigation />
      {/* <Navigation /> */}
    </section>
  );
};

export default Project;
