import React from "react";
import Footer from "./components/Footer/Footer";
import FaqSection from "./components/Faq/faqSection";
import Navbar from "./components/Navbar/Navbar";
import AboutCrypticHunt from "./components/AboutCrypticHunt/AboutCrypticHunt";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AboutCrypticHunt />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
