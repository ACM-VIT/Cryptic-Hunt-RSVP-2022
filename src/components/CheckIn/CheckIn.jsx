import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image from "../../assets/codexCryptum.svg";

import "./CheckIn.css";

const RegisterDiv = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-10 -mt-10" id="CheckIn">
        <div className="mt-20">
          <div className="orangeContainer mx-8 h-[200vh] md:h-[61.84vh] xxsm:h-[250vh] xsm:h-[160vh] md:mx-20">
            <div className="flex flex-col-reverse md:flex-row lg:flex-row">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="top-bottom"
                    style={{ fontFamily: "Inter" }}
                    className="codexHeading font-extrabold relative text-2xl xsm:text-3xl mod:text-5xl xxsm:text-3xl text-center text-crypticOrange md:text-4xl md:mt-[8vh] ml-[5vw]"
                  >
                    How to Check In?
                  </h1>
                </div>
                <div className="flex flex-row">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="top-bottom"
                    style={{ fontFamily: "Inter" }}
                    className="registerPara w-[100vh] mt-[2vh] mx-auto md:ml-[5vw] font-normal text-center md:text-normal text-3xl text-black md:text-base md:text-left xxsm:p-3 md:p-0"
                  >
                    While ‘checking in’, keep the following in mind:
                    <br />
                    <br />
                    <b>1.</b> Make sure that the details entered in the Check-In
                    form are the same as those on the graVITas’23 website.{" "}
                    <br />
                    <b>2.</b> You will also have to check in for the
                    participants for whom you have paid. You have to check-in
                    only for these members and not for other members of your
                    team. <br />
                    <b>3.</b> Once all the members of your team have been
                    checked-in, you can form the team on the official app for
                    the Hybrid Cryptic Hunt. One member from your team will have
                    to "Create the Team" and the rest can join that team using
                    the code given.
                  </p>
                </div>
                <div className="mx-auto md:ml-[5vw]">
                  {/* <Link to="/form"> */}
                  <button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                    className="register-btn h-[6vh] w-[46vw] mt-8 rounded-md bg-crypticOrange text-[#fff] font-medium md:w-[18vw]"
                    onClick={async () => {
                      try {
                        await signInWithGoogle();
                        navigate(`/welcome`);
                      } catch (error) {
                        toast.error(error.message);
                      }
                    }}
                  >
                    Check In
                  </button>
                  {/* </Link> */}
                </div>
              </div>
              <img className="image mt-[8vh]" alt="acm" src={image}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterDiv;
