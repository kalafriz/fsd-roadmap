import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // useState
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      <form className="form">
        <input
          className="input"
          value={username} // retrieved from useState hook call: username is a state retrieved with useState
          placeholder="GitHub Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="button" onClick={handleSubmit}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
}

export default App;
