import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  // useState
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); // Prevent browser from executing full-page form submit
    searchRepos(); // , instead handle it w React
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`, // returns array of all repos in user's account
    }).then((result) => {
      setLoading(false);
      setRepos(result.data);
    });
  }

  function renderRepo(repo) {
    return (
      <div className="row" key={repo.id}>
        <h2 className="repo-name">
          {
            repo.name // from GitHub API
          }
        </h2>
      </div>
    );
  }

  return (
    <div className="page-container">
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
      <div className="results-container">
        {
          repos.map(renderRepo) // iterate w .map, for every repo in repos, call renderRepo(repo)
        }
      </div>
    </div>
  );
}

export default App;
