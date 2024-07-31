import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Entries from "./components/Entries";
import { useState, useEffect } from "react";

const initialData = [
  {
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://maps.app.goo.gl/j1bYMM7rSZSAHs4a6",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description: "Today we hiked Mount Fuji, it was very beautiful.",
    imageUrl:
      "https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1531981666/fujiguide/SG010_6",
  },
];

function App() {
  const [data, setData] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("data"));
    return localData || initialData;
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const addEntry = (entry) => {
    alert("add entry");
    setData((prevData) => [...prevData, entry]); //
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <Form addEntry={addEntry}></Form>
      <Entries data={data}></Entries>
      <Footer></Footer>
    </div>
  );
}

export default App;
