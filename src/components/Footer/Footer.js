import React from "react";
import "../../Styles/footer.css";

import Instagram from "../../images/Instagram.svg";
import Medium from "../../images/Medium.svg";
import Twitter from "../../images/Twitter.svg";
import Youtube from "../../images/Youtube.svg";
import Component from "../../images/Component.svg";

const Footer = () => {
  return (
    <div className="top">
      <div className="leftSection">
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://acmvit.in/"
          >
            <img src={Component} alt="ACM-Logo" />
          </a>
        </div>
        <div className="footer1">
          <div>
            <p>Download Now</p>
          </div>
          <div>
            <p>License</p>
          </div>
        </div>
        <div className="footer2">
          <div className="footer2-inner">
            <p>About</p>
          </div>
          <div className="footer2-inner">
            <p>Features</p>
          </div>
          <div className="footer2-inner">
            <p>Pricing</p>
          </div>
          <div className="footer2-inner">
            <p>Careers</p>
          </div>
          <div className="footer2-inner">
            <p>Help</p>
          </div>
          <div className="footer2-inner">
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/ACM_VIT"
          className="logo"
        >
          <img src={Twitter} alt="Twitter" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/acmvit"
          className="logo"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/acmvit"
          className="logo"
        >
          <img src={Medium} alt="Medium" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="" className="logo">
          <img src={Youtube} alt="Youtube" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
