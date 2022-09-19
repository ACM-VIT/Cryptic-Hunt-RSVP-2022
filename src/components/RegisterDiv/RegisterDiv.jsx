import React from "react";
import { useEffect } from "react";
import classes from "./RegisterDiv.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/Phone Mockup.svg";

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
      <div className="mt-40">
        <div
          // className={`${classes.orangeContainer} ${`bg-crypticOrange mr-10 w-[130vh] h-[200vh] md:w-[165vh] lg:w-[180vh] md:h-[61.84vh] xxsm:h-[300vh]`}`}
          className={`${
            classes.orangeContainer
          } ${`bg-crypticOrange mx-8 h-[200vh] md:h-[61.84vh] xxsm:h-[250vh] xsm:h-[180vh] md:mx-20 sm:h-[150vh] mod:h-[150vh]`}`}
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
                    classes.registerHeading
                  } ${`font-extrabold relative text-2xl xsm:text-3xl mod:text-5xl xxsm:text-3xl text-center text-[#fff] md:text-4xl md:mt-[8vh] ml-[5vw]`}`}
                >
                  Cryptic Hunt App
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
                  } ${`w-[100vh] h-[24.13vh] mt-[10vh] ml-[5vw] font-normal text-center md:text-normal text-3xl text-[#fff] md:text-base md:text-left md:mt-[9vh] xxsm:p-3 md:p-0`}`}
                >
                  The Cryptic Hunt app is your one stop destination for all your
                  Hunt related needs. Get on the trail with the leaderboard,
                  questions and timeline just one click away! What are you
                  waiting for download the app now!
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
                      } ${`relative w-[40vh] h-[10vh] md:h-[7.84vh] ml-[9vh] mt-[25vh] md:mt-[15vh]`}`}
                    ></input>
                    <button
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="2000"
                      className="h-[9vh] w-[16vh] bg-[#18191F] text-[#fff] font-medium"
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
