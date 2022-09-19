import Navbar from "./components/Navbar/Navbar";
import AboutCrypticHunt from "./components/AboutCrypticHunt/AboutCrypticHunt";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AboutCrypticHunt />
    </div>
  );
}

export default App;
