const root = document.getElementById("root");

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./cat.png" alt="Cat icon" height="50px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Facts() {
  return (
    <div className="page-content">
      <h1>Fun Facts about Me!</h1>
      <ul>
        <li>I prefer chocolate over vanilla</li>
        <li>Boston University is my alma mater</li>
        <li>My favorite season is summer</li>
        <li>I prefer having an Apple phone but a Windows computer</li>
        <li>I dislike seafood</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>
        2024 <a href="https://github.com/kalafriz">@kalafriz</a>. All rights
        reserved.
      </small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <Header />
      <Facts />
      <Footer />
    </>
  );
}

ReactDOM.render(<Page />, root);
