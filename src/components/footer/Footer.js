import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="logo-clubname">
            <div className="logo">LOG</div>
            <div className="clubname">
              <span>spec</span>trum
            </div>
          </div>
          <div className="text">
            <span>SPECTRUM </span> a place for all technical enthusiasts to learn, discover
            and innovate new things in the field of Technology and Design.
          </div>
          <div className="social-links">
            <BsInstagram className="icon" />
            <FaLinkedinIn className="icon" />
            <BsGithub className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
