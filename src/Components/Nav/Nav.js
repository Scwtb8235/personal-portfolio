import React from 'react'
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Nav() {
return (
  <div className="outer-wrapper">
    <div className="logo-wrapper"></div>
    <div className="inner-wrapper">
      <span>
        <FontAwesomeIcon  icon="fa-solid fa-house" />{" "} Home
      </span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);
}

export default Nav
