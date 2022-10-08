import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import AboutCrypticHunt from "./components/AboutCrypticHunt/AboutCrypticHunt";
import Register from "./components/Register/Register";
import CheckIn from "./components/CheckIn/CheckIn";
import Rsvp from "./components/Rsvp/Rsvp";
import FaqSection from "./components/Faq/faqSection";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Welcome from "./components/Welcome/Welcome";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { auth } from "./services/firebase";
import FormWrapper from "./components/Form/FormWrapper";
import NotFound404 from "./components/404/404";
import NotAuth401 from "./components/401/401";

function App() {
  const [user, loading, error] = useAuthState(auth);
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
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <AboutCrypticHunt />
              {/* <Register /> */}
              <CheckIn />
              <Rsvp />
              <FaqSection />
              <Footer />
            </>
          }
        />
        {user ? (
          <>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/form" element={<FormWrapper />} />
          </>
        ) : null}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/401" element={<NotAuth401 />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

function Solutions() {
  window.location.href = "https://github.com/ACM-VIT/Cryptic-Hunt-22-solutions";
  return null;
}

export default App;
