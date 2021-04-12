import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavBar] = useState(false);
  const [navbarLink, setNavBarlink] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return;
  <nav className="NavBar">
    <div className="NavBar_container"></div>;
  </nav>;
};

export default NavBar;
