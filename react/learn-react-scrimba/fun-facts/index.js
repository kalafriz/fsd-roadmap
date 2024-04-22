function MainContent() {
  return <p>I'm learning React!</p>;
}

const myElement = document.createElement("h1");
myElement.textContent = "This is an imperative way to program";
myElement.className = "header";

// JSX demo
const element = <h1 className="header">This is JSX!</h1>;
console.log(element);

ReactDOM.render(
  <div>
    <MainContent />
    {element}
  </div>,

  document.getElementById("root")
);
