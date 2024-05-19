import logo from "./logo.svg";
import "./App.css";

import Drag from "./components/Drag";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>To-do list app yayyyy</h1>
      <Drag items={["a", "b", "c"]}></Drag>
    </div>
  );
}

export default App;
