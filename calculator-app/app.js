let total = 0;
let myNum = "";

const inputDisplay = document.getElementById("input");
inputDisplay.innerHTML = "12345";

function updateDisplay() {
  inputDisplay.innerHTML = myNum;
}

function operator(op) {
  alert(op);
}

function digit(x) {
  alert(x);
  myNum = x;
  updateDisplay();
}

function eval() {
  alert("=");
}

function clr() {
  alert("clear");
}

function sign() {
  alert("+/-");
}

function togglePercent() {
  alert("percent toggle");
}

function decimal() {
  alert("decimal");
}
