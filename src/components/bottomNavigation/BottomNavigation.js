import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
// import images from "../../assets/db/images";
import { bottomNavigationdatas } from "../../db/bottomNavigationdatas";
import { NavLink, Link } from "react-router-dom";

import "./bottomNavigation.css";

const BottomNavigation = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  console.log(bottomNavigationdatas);
  return (
    <section className="bottom-navigation-section">
      {/* <div className="container"> */}
      <div className="d-flex navigation-section">
        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {bottomNavigationdatas.map((bottomNavigationdata, index) => {
              return (
                <motion.div className="item" key={index}>
                  {
                    <>
                      <Link to={"/projects"}>
                        <img
                          src={bottomNavigationdata.imageURL}
                          alt="navigation"
                          className="bottom-navigation-section-image"
                        />
                      </Link>
                      <NavLink to={"/projects"}>
                        <h3 className="heading-item mt-2">
                          {bottomNavigationdata.title}
                        </h3>
                      </NavLink>
                    </>
                  }
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default BottomNavigation;
