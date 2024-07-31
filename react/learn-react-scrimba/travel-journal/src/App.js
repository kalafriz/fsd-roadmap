import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Entry from "./components/Entry";
import Form from "./components/Form";
import data from "./data";

function App() {
  const entries = data.map((entry) => {
    return (
      <Entry
        img={entry.imageUrl}
        title={entry.title}
        location={entry.location}
        googleMapsUrl={entry.googleMapsUrl}
        startDate={entry.startDate}
        endDate={entry.endDate}
        description={entry.description}
      ></Entry>
    );
  });

  return (
    <div className="App">
      <Navbar></Navbar>
      <Form></Form>
      <div className="entries">{entries}</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
