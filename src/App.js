import "./styles/App.css";
import React, { useState, useRef, useEffect } from "react";
import CountdownTimer from "./timer";
import SocialMedia from "./footer";
import test1 from "./assets/sri.mp4";
import gifImage from "./assets/under.gif";
import EncapsulateLogo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <section className="top-section">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="video"
        >
          <source src={test1} type="video/mp4" />
        </video> */}
        <img src={gifImage} alt="Under_Construction" />
      </section>

      <section className="footer-Media">
        <div className="footer-1">
          <p>
            EN<span>CAPS</span>ULATE
          </p>
          <img src={EncapsulateLogo} alt="Encapsulate Log" />
          <p className="quote">Capturing Ambition, Passion and Success</p>

          {/* <CountdownTimer /> */}
          <SocialMedia />
        </div>
      </section>
    </div>
  );
}

export default App;
