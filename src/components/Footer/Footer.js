import React from "react";
import "./footer.css";

import Component from "../../assets/Component.svg";
import Instagram from "../../assets/Instagram.svg";
import Medium from "../../assets/Medium.svg";
import Twitter from "../../assets/Twitter.svg";
import Youtube from "../../assets/Youtube.svg";
import facebook from "../../assets/facebook.svg";
import discord from "../../assets/discord.svg";
import linkedin from "../../assets/linkedin.svg";

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
        {/* <div className="footer1">
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
        </div> */}
      </div>
      <div className="social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/acmvit"
          className="logos"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/ACM_VIT"
          className="logos"
        >
          <img src={Twitter} alt="Twitter" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.com/invite/2yxdXGQB4e"
          className="logos"
        >
          <img src={discord} alt="Discord" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/acmvit"
          className="logos"
        >
          <img src={Medium} alt="Medium" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCaV36jEoK5SI59ly0Mxa_ZA"
          className="logos"
        >
          <img src={Youtube} alt="Youtube" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/acmvit/"
          className="logos"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/acmvitvellore/"
          className="logos"
        >
          <img src={facebook} alt="Facebook" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
