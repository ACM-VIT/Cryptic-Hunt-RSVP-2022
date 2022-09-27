import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutCrypticHunt from "./components/AboutCrypticHunt/AboutCrypticHunt";
import CodexCryptum from "./components/Register/Register";
import RegisterDiv from "./components/Rsvp/Rsvp";
import FaqSection from "./components/Faq/faqSection";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "./App.css";

// require("dotenv").config();
console.log(process.env.REACT_APP_URL);
console.log(process.env.REACT_APP_reCaptchaKey);

function App() {
  return (
    <div className="app">
      <Navbar />
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AboutCrypticHunt />
      <CodexCryptum />
      <RegisterDiv />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
