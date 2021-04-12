import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavBar] = useState(false);
  const [navbarLink, setNavBarlink] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const changeLink = () => {
    if (window.scrollY >= 80) {
      setNavBarlink(true);
    } else {
      setNavBarlink(false);
    }
  };

  const hambClass = () => {
    if (click && navbarLink) {
      return "fas fa-times hamburger-white";
    } else if (click && !navbarLink) {
      return "fas fa-times hamburger-orange";
    } else if (!click && navbarLink) {
      return "fas fa-bars hamburger-white";
    } else {
      return "fas fa-bars hamburger-orange";
    }
  };

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar_container">
          <div className="navbar_menu-icon" onClick={handleClick}>
            <i className={hambClass()} />
          </div>
          <ul className={click ? "navbar_menu active" : "navbar_menu"}>
            <li className="navbar_item">
              <Link
                to="/"
                className={navbarLink ? "navbarLink active" : "navbarLink"}
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className="navbar_item">
              <Link
                to="/activities"
                className={navbarLink ? "navbarLink active" : "navbarLink"}
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="navbar_item">
              <Link
                to="/challenges"
                className={navbarLink ? "navbarLink active" : "navbarLink"}
                onClick={closeMobileMenu}
              >
                Get In Touch
              </Link>
            </li>

            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
