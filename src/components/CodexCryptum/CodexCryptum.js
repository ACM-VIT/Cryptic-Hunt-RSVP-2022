import React from "react";
import { useEffect } from "react";
import classes from "./CodexCryptum.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/codexCryptum.svg";

const RegisterDiv = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="mt-40" id="Register">
        <div
          // className={`${classes.orangeContainer} ${`bg-crypticOrange mr-10 w-[130vh] h-[200vh] md:w-[165vh] lg:w-[180vh] md:h-[61.84vh] xxsm:h-[300vh]`}`}
          className={`${
            classes.orangeContainer
          } ${` mx-8 h-[200vh] md:h-[61.84vh] xxsm:h-[250vh] xsm:h-[180vh] md:mx-20`}`}
        >
          <div className="flex flex-col-reverse md:flex-row lg:flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="top-bottom"
                  style={{ fontFamily: "Inter" }}
                  className={`${
                    classes.codexHeading
                  } ${`font-extrabold relative text-2xl xsm:text-3xl mod:text-5xl xxsm:text-3xl text-center text-crypticOrange md:text-4xl md:mt-[8vh] ml-[5vw] `}`}
                >
                  Codex Cryptum
                </h1>
              </div>
              <div className="flex flex-row">
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="top-bottom"
                  style={{ fontFamily: "Inter" }}
                  className={`${
                    classes.registerPara
                  } ${`w-[100vh] h-[24.13vh] mt-[10vh] ml-[5vw] font-normal text-center md:text-normal text-3xl text-black md:text-base md:text-left md:mt-[9vh] xxsm:p-3 md:p-0`}`}
                >
                  Codex Cryptum 2.0 Codex Cryptum ‘22 is the second edition of
                  the ACM’s cryptography workshop which is an incredibly
                  fun-filled and informative session where the participants will
                  get an opportunity to learn, develop and refine their skills
                  in the field of cybersecurity and cryptography. The workshop
                  is a pre-graVITas ‘22 event.
                  <br />{" "}
                  <b>
                    Date: 25th September 2022, Sunday <br />
                    <b>Time: 2.00 P.M. to 6.00P.M</b>
                  </b>
                </p>
              </div>
              <div className={`${classes.formDiv} ${`flex`}`}>
                <div
                  className={`${`text-center mt-32 md:m-0 xxsm:mt-[60vh] xxsm:ml-3 md:mt-[-35vh]`}`}
                >
                  <form onSubmit={handleSubmit}>
                    <input
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-anchor-placement="top-bottom"
                      type="text"
                      placeholder="Your email address here"
                      className={`${
                        classes.inputBox
                      } ${`relative w-[40vh] h-[10vh] md:h-[7.84vh] ml-[9vh] mt-[25vh] md:mt-[15vh] border-2 border-crypticOrange`}`}
                    ></input>
                    <button
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="2000"
                      className="h-[9vh] w-[16vh] bg-crypticOrange text-[#fff] font-medium"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className={`${`relative`}`}> */}
            <img className={`${classes.image}`} alt="acm" src={image}></img>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterDiv;
