import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { BrowserRouter } from "react-router-dom";
import key from "./key/key";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={key[0].reCaptchaKey}>
      <GoogleReCaptcha
        onVerify={(token) => {
          window.sessionStorage.setItem("token", token);
        }}
      />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
