import React from "react";
import "./faq.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className=" contentbox"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-anchor-placement="top-bottom"
    >
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
