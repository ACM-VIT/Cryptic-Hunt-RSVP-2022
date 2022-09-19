import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutCrypticHunt from "./components/AboutCrypticHunt/AboutCrypticHunt";
import CodexCryptum from "./components/CodexCryptum/CodexCryptum";
import RegisterDiv from "./components/RegisterDiv/RegisterDiv";
import FaqSection from "./components/Faq/faqSection";
import Footer from "./components/Footer/Footer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AboutCrypticHunt />
      <CodexCryptum />
      <RegisterDiv />
      <FaqSection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
