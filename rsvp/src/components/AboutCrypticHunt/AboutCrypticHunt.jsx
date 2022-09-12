import "./AboutCrypticHunt.css";
import storeBadge from "../../assets/app-playstore-badge.svg";
import appDemo from "../../assets/cryptichunt-demo.svg";
const AboutCrypticHunt = () => {
  return (
    <section className="hero">
      <div className="heading">
        <p>
          Get Ready for experiencing the excitment and thrill of hunt,{" "}
          <span>Go Cryptic</span>
        </p>
      </div>
      <div className="store__badge">
        <a href="#Store-Link">
          <img
            src={storeBadge}
            className="badge"
            alt="App and Play Store Demo"
          />
        </a>
      </div>
      <div className="app__demo">
        <img src={appDemo} className="appDemo" alt="Cryptic Hunt App Demo" />
      </div>
      <p className="explore">Find and explore a new world</p>
      <p className="details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis blandit
        neque viverra proin porta placerat. Diam et tempus sollicitudin eget
        odio. viverra proin porta placerat. Diam et tempus sollicitudin eget
        odio.
      </p>
    </section>
  );
};

export default AboutCrypticHunt;
