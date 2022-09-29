import { useNavigate } from "react-router-dom";

import "./Welcome.css";

const Welcome = ({ count = 4 }) => {
  const navigate = useNavigate();

  return (
    <div className="welcome-main-container">
      <div className="welcome-heading">The Hunt Begins!</div>
      <div className="welcome-sub-heading">
        Welcome to Check-In!
        <br />
        Your one stop destination for all things Cryptic Hunt.
      </div>
      <p className="welcome-content">
        While ‘checking in’, keep the following in mind:
        <br />
        <br />
        <b>1.</b> Make sure that the details entered in the Check-In form are
        the same as those on the graVITas’22 website. <br />
        <b>2.</b> You will also have to check in for the participants for whom
        you have paid. You have to check-in only for these members and not for
        other members of your team. <br />
        <b>3.</b> Once all the members of your team have been checked-in, you
        can form the team on the official app for the Hybrid Cryptic Hunt. One
        member from your team will have to "Create the Team" and the rest can
        join that team using the code given.
      </p>
      <button
        className="get-started-btn"
        onClick={() => {
          navigate(`/form`);
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
