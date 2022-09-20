import React from "react";
import Faq from "./faq";
import "./faqSection.css";
import data from "./Data";

const FaqSection = () => (
  <article id="Faq" className="faqcontainer">
    <div className="tabscontainer">
      {data.map((ques) => (
        <Faq
          key={ques.id}
          id={ques.id}
          title={ques.question}
          content={ques.answer}
        />
      ))}
    </div>
  </article>
);

export default FaqSection;
