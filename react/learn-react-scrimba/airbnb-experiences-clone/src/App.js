import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Card
        img="katie-zaferes.jpeg"
        rating="4.9"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      ></Card>
    </div>
  );
}

export default App;
