import "./App.css";

import Card from "./components/Card";
import TaskList from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <h1>To-do list app yayyyy</h1>
      <TaskList items={["x", "y", "z"]}></TaskList>
    </div>
  );
}

export default App;
