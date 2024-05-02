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
        src={require("./img/profile.jpg")}
        alt="Profile photo"
      />
      <h1>Kirsten Alafriz</h1>
      <h3>Full Stack Developer</h3>
      <a href="https://github.com/kalafriz">@kalafriz</a>
      <div>
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>Lorem ipsum blah blah blah blah blah.</p>
    </div>
  );
}

function Interests() {
  return (
    <div className="interests">
      <h2>Interests</h2>
      <p>I like to eat and breathe and and and and and and and and and</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <a href="">LinkedIn</a>
      <a href="">Github</a>
      <a href="">LeetCode</a>
    </footer>
  );
}

function App() {
  return (
    <>
      <Info />
      <About />
      <Interests />
      <Footer />
    </>
  );
}
export default App;
