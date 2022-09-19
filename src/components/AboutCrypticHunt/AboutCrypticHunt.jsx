import appDemo from "../../assets/cryptichunt-demo.svg";
import appStore from "../../assets/App Store Badge.svg";
import playStore from "../../assets/Google Play Badge.svg";
import "./AboutCrypticHunt.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutCrypticHunt = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="hero">
      <div className="heading">
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
        >
          Get Ready for experiencing the excitment and thrill of hunt,{" "}
          <span
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
          >
            Go Cryptic
          </span>
        </p>
      </div>
      <div className="store__badge">
        <a href="#app-store">
          <img src={appStore} className="badge" alt="App and Play Store Demo" />
        </a>
        <a href="#play-store">
          <img
            src={playStore}
            className="badge"
            alt="App and Play Store Demo"
          />
        </a>
      </div>
      <div className="app__demo">
        <img src={appDemo} className="appDemo" alt="Cryptic Hunt App Demo" />
      </div>
      <p
        className="explore"
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
        ACM-VIT's Hybrid Cryptic Hunt is an elaborate Treasure Hunt where our
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
          Date: 30th September to 1st October Time: 8:00 A.M. TO 4:00 P.M.
        </span>
      </p>
    </section>
  );
};

export default AboutCrypticHunt;
