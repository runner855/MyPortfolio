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
      <nav className="NavBar">
        <div className="NavBar_container"></div>;
      </nav>
      ;
    </>
  );
};

export default NavBar;
