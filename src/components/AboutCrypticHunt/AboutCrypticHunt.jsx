import appDemo from "../../assets/cryptichunt-demo.svg";
import appStore from "../../assets/App Store Badge.svg";
import playStore from "../../assets/Google Play Badge.svg";
import "./AboutCrypticHunt.css";
const AboutCrypticHunt = () => {
  return (
    <section className="hero" id="About">
      <div className="heading">
        <p>
          Get Ready for experiencing the excitment and thrill of hunt,{" "}
          <span>Go Cryptic</span>
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
      <div className="app__demo__div">
        <img src={appDemo} className="appDemo" alt="Cryptic Hunt App Demo" />
      </div>
      <p className="explore">Find and explore a new world within VIT!</p>
      <p className="details">
        ACM-VIT's Hybrid Cryptic Hunt is an elaborate Treasure Hunt where our
        participants will be given questions to solve using skills from the
        cryptography and cybersecurity domains. Through the Hunt, the
        participants will get to explore both the world of cybersec and that of
        VIT, in search of the answers to your problems in the most unexpected
        places!
        <span>
          Date: 30th September to 1st October Time: 8:00 A.M. TO 4:00 P.M.
        </span>
      </p>
    </section>
  );
};

export default AboutCrypticHunt;
