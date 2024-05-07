import ReactDOM from "react-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

const root = document.getElementById("root");
/*
- Make separate components for:
  - Info (photo, name, buttons, etc.)
  - About
  - Interests
  - Footer (social icons)  
  */

function Info() {
  return (
    <div className="info">
      <img
        className="pfp"
        src={require("./img/profile.png")}
        alt="Profile photo"
      />
      <h1>
        <span className="firstname">Kirsten</span>{" "}
        <span className="lastname">Alafriz</span>
      </h1>
      <h3>Full Stack Developer</h3>
      <p>kirstenalafriz@gmail.com</p>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Software engineer with a passion for creating{" "}
        <strong>human-centered design for big data</strong>. Diverse experience
        portfolio in a wide range of applications{" "}
        <strong>
          from computational neuroscience research to formula racecar telemetry
        </strong>
        . Leader, excellent communicator, and always organized.{" "}
      </p>
    </div>
  );
}

function Interests() {
  return (
    <div className="interests">
      <h2>Interests</h2>
      <p>
        I hold both a love for and education in neuroscience and the fine arts.
        Always designing and structuring with <strong>your attention</strong> in
        mind. Also a sterotypical cat-lover.{" "}
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <button>
        <a href="https://www.linkedin.com/in/kalafriz/">LinkedIn</a>
      </button>
      <button>
        <a href="https://github.com/kalafriz">Github</a>
      </button>
      <button>
        <a href="https://leetcode.com/u/kalafriz/">LeetCode</a>
      </button>
    </footer>
  );
}

function App() {
  return (
    <div className="info-card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
export default App;
