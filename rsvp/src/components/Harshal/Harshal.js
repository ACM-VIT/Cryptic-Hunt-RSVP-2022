import React, { useEffect } from "react";
import RegisterDiv from "../RegisterDiv/RegisterDiv";
import classes from "./Harshal.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Harshal(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white h-[100vh] mt-[200vh]">
      <h1
        style={{ fontFamily: "Poppins" }}
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-bottom"
        className={`${
          classes.heading
        } ${`relative w-[128.05vh] h=[12.66vh] mt-[25.79vh] ml-[15vh] leading-[84px] text-5xl font-semibold text-headingBlack md:ml-[55.25vh] sm:ml-[40vh] md:text-4xl xsm:text-5xl mod:text-5xl`}`}
      >
        Find and explore a new world within VIT!
      </h1>
      <p
        style={{ fontFamily: "Poppins" }}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
        className="relative w-[93.66vh] h=[27.14vh] mt-[11.7vh] ml-[30vh] mr-[60.48vh] font-normal text-3xl md:text-[18px] text-headingBlack leading-9 text-center md:ml-[45vh] xmd-ml[58.05vh] sm:ml-[30vh]"
      >
        ACM-VIT's Hybrid Cryptic Hunt is an elaborate Treasure Hunt where our
        participants will be given questions to solve using skills from the
        cryptography and cybersecurity domains. Through the Hunt, the
        participants will get to explore both the world of cybersec and that of
        VIT, in search of the answers to your problems in the most unexpected
        places! <br /> <b> Date: 30th September to 1st October Time: 8:00 A.M. TO 4:00 P.M. </b>
      </p>
      <RegisterDiv />
    </div>
  );
}

export default Harshal;
