let total = 0;
let myNum = "";

const inputDisplay = document.getElementById("input");

function updateDisplay() {
  inputDisplay.innerHTML = myNum;
}

function operator(op) {
  alert(op);
}

function digit(x) {
  myNum = myNum.length < 9 ? myNum.concat(x) : myNum;
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
