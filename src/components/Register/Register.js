import React from "react";
import { useEffect } from "react";
import classes from "./Register.module.css";
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
      <div className="pt-10 -mt-10" id="Register">
        <div className="mt-20">
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
                    How to Register?
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
                    } ${`w-[100vh] mt-[2vh] ml-[5vw] font-normal text-center md:text-normal text-3xl text-black md:text-base md:text-left xxsm:p-3 md:p-0`}`}
                  >
                    Once you have clicked on the button below and are at the
                    graVITas '22 events website, follow the given instructions
                    to register for The Hybrid Cryptic Hunt! <br />
                    <b>1.</b> Click on the "Register" button if this is your
                    first time using the page.
                    <br />
                    <b>2.</b> Fill in all the required details to register your
                    account.
                    <br />
                    3. Once you've verified your email id, you can sign in using
                    the email id and your password. <br />
                    4. In the list of events, scroll to the 4th event, which is
                    the Hybrid Cryptic Hunt, and click add to cart. <br />
                    5. Go to your cart and select the number of participants
                    that your team would have. <br />
                    6. Pay the required amount.
                    <br />
                  </p>
                </div>
                <div className="ml-[5vw]">
                  <a
                    href="https://events.vit.ac.in/events/gravitas2022/Dashboard/index"
                    target="_blank"
                  >
                    <button
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="2000"
                      className="h-[6vh] w-[18vw] mt-8 rounded-md bg-crypticOrange text-[#fff] font-medium"
                    >
                      Register
                    </button>
                  </a>
                </div>
                {/* <div className={`${classes.formDiv} ${`flex`}`}>
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
              </div> */}
              </div>
              {/* <div className={`${`relative`}`}> */}
              <img
                className={`${classes.image} ${`mt-[8vh]`}`}
                alt="acm"
                src={image}
              ></img>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterDiv;
