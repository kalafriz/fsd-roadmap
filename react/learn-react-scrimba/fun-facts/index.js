function MainContent() {
  return <p>I'm learning React!</p>;
}
ReactDOM.render(
  <div>
    <MainContent />
  </div>,

  document.getElementById("root")
);

const myElement = document.createElement("h1");
myElement.textContent = "This is an imperative way to program";
myElement.className = "header";
document.getElementById("root").append(myElement);
