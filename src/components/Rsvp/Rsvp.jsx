import React from "react";
import classes from "./Rsvp.module.css";
import image from "../../assets/Phone Mockup.svg";

const RegisterDiv = () => {
  return (
    <>
      <div className="mt-40">
        <div
          className={`${
            classes.orangeContainer
          } ${`bg-crypticOrange mx-8 h-[200vh] md:h-[61.84vh] xxsm:h-[250vh] xsm:h-[140vh] md:mx-20 sm:h-[150vh] mod:h-[150vh]`}`}
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
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-anchor-placement="top-bottom"
                style={{ fontFamily: "Inter" }}
                className={`${
                  classes.registerPara
                } ${`xsm:mt-[4vh] sm:mt-[10vh] mx-auto md:ml-[5vw] font-normal text-center md:text-xl text-3xl text-[#fff] md:text-base md:text-left md:mt-[9vh] xxsm:p-3 md:p-0`}`}
              >
                The Cryptic Hunt app is your one stop destination for all your
                Hunt related needs. Get on the trail with the leaderboard,
                questions and timeline just one click away! The app will go live
                soon, so RSVP to get more updates.
              </p>
              <div className={`${`text-center md:mt-[12vh]`}`}>
                <input
                  // data-aos="fade-up"
                  // data-aos-duration="2000"
                  // data-ao-anchor-placement="top-bottom"
                  type="text"
                  placeholder="Your email address here"
                  className={`${
                    classes.inputBox
                  } ${`relative w-[40vh] h-[9vh] rounded-l-md md:h-[7.84vh]`}`}
                ></input>
                <button
                  // data-aos="fade-up"
                  // data-aos-anchor-placement="top-bottom"
                  // data-aos-duration="2000"
                  type="submit"
                  className="h-[9vh] w-[16vh] rounded-r-md md:h-[7.84vh] bg-[#18191F] text-[#fff] font-medium"
                >
                  RSVP
                </button>
              </div>
            </div>
            <img className={`${classes.image}`} alt="acm" src={image}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterDiv;
