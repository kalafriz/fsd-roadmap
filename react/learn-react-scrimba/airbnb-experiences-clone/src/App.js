import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import Footer from "./components/footer";

import data from "./data"; // card data

function App() {
  const cards = data.map((card) => {
    return (
      <Card
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country={card.location}
        title={card.title}
        price={card.price}
      ></Card>
    );
  });
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="cards--grid">{cards}</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
