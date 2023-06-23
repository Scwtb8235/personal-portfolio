import React from 'react'
import "./Nav.css"
import { FaHome, FaUser, FaImage } from "react-icons/fa/";
import {GrMailOption} from "react-icons/gr/"
import {ImStack} from "react-icons/im/"
import profile from "../images/Profilepic.JPG"
function Nav() {
return (
  <div className="outer-wrapper container-fluid">
    <div>
      <img className="logo-wrapper"src={profile}alt="Profile" />
    </div>
    <div className="inner-wrapper">
      <span>
        <FaHome /> Home
      </span>
      <span>
        <FaUser /> About{" "}
      </span>
      <span>
        <ImStack /> Service{" "}
      </span>
      <span>
        <FaImage /> Portfolio
      </span>
      <span>
        <GrMailOption /> Contact
      </span>
    </div>
  </div>
);
}

export default Nav
