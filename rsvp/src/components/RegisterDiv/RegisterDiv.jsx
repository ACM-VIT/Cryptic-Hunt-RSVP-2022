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
          className={`${
            classes.orangeContainer
          } ${`bg-crypticOrange gap-2.5 ml-[12vh] w-[130vh] h-[200vh] md:w-[165vh] lg:w-[180vh] md:h-[61.84vh] xxsm:h-[300vh]`}`}
        >
          <div className={`${classes.flexContainer}`}>
            <div className={`${classes.registerContent}`}>
              <h1
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-anchor-placement="top-bottom"
                style={{ fontFamily: "Inter" }}
                className={`${
                  classes.registerHeading
                } ${`font-extrabold relative text-9xl text-center text-[#fff] md:text-4xl md:ml-[-7vw] md:mt-[6.033vh]`}`}
              >
                Cryptic Hunt App
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-anchor-placement="top-bottom"
                style={{ fontFamily: "Inter" }}
                className={`${
                  classes.registerPara
                } ${`relative w-[100vh] h-[24.13vh] mt-[10vh] ml-[9vh]  font-normal text-center md:text-normal text-5xl text-[#fff] md:text-base md:text-left md:mt-[9vh]`}`}
              >
                The Cryptic Hunt app is your one stop destination for all your
                Hunt related needs. Get on the trail with the leaderboard,
                questions and timeline just one click away! What are you waiting
                for download the app now!
              </p>
              <div className="text-center mt-32 md:m-0 xxsm:mt-[60vh] xxsm:ml-3 md:mt-[-30vh] md:ml-[-6vw]">
                <form onSubmit={handleSubmit}>
                  <input
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    data-aos-anchor-placement="top-bottom"
                    type="text"
                    placeholder="Your email address here"
                    className={`${
                      classes.inputBox
                    } ${`relative gap-2.5 w-[40vh] h-[10vh] md:h-[7.84vh] md:w-[37.40vh] ml-[9vh] mt-[25vh] md:mt-[15vh]`}`}
                  ></input>
                  <button className="h-[9vh] w-[16vh] bg-[#18191F] text-[#fff] font-medium">
                    Register
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="acm"
              src={image}
              className={`${classes.image} ${`mt-[-15vh] md:ml-[10vw]`}`}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterDiv;
