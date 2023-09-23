import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import appDemo from "../../assets/cryptichunt-demo.svg";
import appStore from "../../assets/App Store Badge.svg";
import playStore from "../../assets/Google Play Badge.svg";

import "./AboutCrypticHunt.css";

const AboutCrypticHunt = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <section className="hero">
      <div className="heading">
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
        >
          Get ready to experience the excitment and thrill of the hunt!
          <span
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
          >
            <br />
            Expect the Unexpected
          </span>
        </p>
      </div>
      <button
        className="checkin-btn"
        onClick={async () => {
          try {
            await signInWithGoogle();
            navigate(`/welcome`);
          } catch (error) {
            toast.error(error.message);
          }
        }}
      >
        Check In Now!
      </button>
      <div className="app__demo__div" id="apps">
        <img src={appDemo} className="appDemo" alt="Cryptic Hunt App Demo" />
      </div>
      {/* <div className="text-3xl font-bold	pb-4 ">Coming Soon on</div> */}
      <div className="store__badge">
        <a
          href="https://play.google.com/store/apps/details?id=com.acmvit.cryptic_hunt"
          target="_blank"
        >
          <img
            src={playStore}
            className="badge"
            alt="App and Play Store Demo"
          />
        </a>
      </div>
      <p
        id="About"
        className="pt-40 -mt-40 explore"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-bottom"
      >
        Find and explore a new world within VIT!
      </p>
      <p
        className="details"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-bottom"
      >
        ACM-VIT's Hybrid Cryptic Hunt is an elaborate treasure hunt where our
        participants will be given questions to solve using skills from the
        cryptography and cybersecurity domains. Through the Hunt, the
        participants will get to explore both the world of cybersec and that of
        VIT, in search of the answers to your problems in the most unexpected
        places!
        <span
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
        >
          <b>Date:</b> 23rd September to 24th September 2023
          <br />
          <b>Time:</b> 11:30 A.M. TO 5:00 P.M.
        </span>
      </p>
    </section>
  );
};

export default AboutCrypticHunt;
