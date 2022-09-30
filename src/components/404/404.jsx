import React from "react";
import { useNavigate } from "react-router-dom";

import "./404.css";

import error from "../../assets/error.svg";

const NotFound404 = () => {
  let navigate = useNavigate();
  return (
    <div className="nf-container">
      <img src={error} alt="error" />
      <div className="nf-heading">404</div>
      <div className="nf-sub-heading">Page Not Found</div>
      <div className="nf-content">
        Looks like you are lost! <br />
        But don't let that stop you, head back to the home page right away!
      </div>
      <a href="/">
        <button className="back-button">Go Back</button>
      </a>
    </div>
  );
};

export default NotFound404;
