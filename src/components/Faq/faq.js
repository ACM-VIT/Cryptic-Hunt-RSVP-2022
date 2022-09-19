import React from "react";
import "./faq.css";

const Faq = (props) => {
  return (
    <div className=" contentbox">
      <div className="eachQuestion">
        <div className="number">{props.id}</div>
        <div className="question">{props.title}</div>
        <div className=" lg:text-xl answer">{props.content}</div>
      </div>
      <div className={props.id !== 8 ? `line` : ``}></div>
    </div>
  );
};

export default Faq;
