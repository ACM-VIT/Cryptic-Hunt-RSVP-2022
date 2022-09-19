import React from "react";
import "../../Styles/faq.css";

// const faq = () => {
//   return (
//     <div className="contentbox">
//       <div className="eachQuestion">
//         <div className="number">
//           <h1>1</h1>
//         </div>
//         <div className="question">
//           <p>When does it begin?</p>
//         </div>
//         <div>
//           <p>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.
//           </p>
//         </div>
//       </div>
//       <div className="eachQuestion">
//         <div className="number">
//           <h1>2</h1>
//         </div>
//         <div className="question">
//           <p>When does it begin?</p>
//         </div>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry.
//         </p>
//       </div>
//       <div className="eachQuestion">
//         <div className="number">
//           <h1>3</h1>
//         </div>
//         <div className="question">
//           <p>When does it begin?</p>
//         </div>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry.
//         </p>
//       </div>
//       <div className="lastQuestion">
//         <div className="number">
//           <h1>4</h1>
//         </div>
//         <div className="question">
//           <p>When does it begin?</p>
//         </div>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry.
//         </p>
//       </div>
//     </div>
//   );
// };

const Faq = (props) => {

  return (
      <div className="contentbox">  
        <div className="eachQuestion">
        <div className="number">{props.id}</div>
        <div className="question">{props.title}</div>
        <div className="answer">{props.content}</div>
        </div>
        <div className={props.id != 8 ? `line` : ``}></div>
      </div>
  );
};

export default Faq;
