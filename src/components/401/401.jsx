import React from "react";
import { useNavigate } from "react-router-dom";

import "./401.css";

import error from "../../assets/error.svg";

const NotAuth401 = () => {
  let navigate = useNavigate();
  return (
    <div className="na-container">
      <img src={error} alt="error" />
      <div className="na-heading">401</div>
      <div className="na-sub-heading">Not Authorized</div>
      <div className="na-content">
        Looks like this user does not exist. <br />
        You have not paid for this event using this email.
      </div>
      <a href="/">
        <button className="back-button">Go Back</button>
      </a>
    </div>
  );
};

export default NotAuth401;
