let total = 0;
let myNum = "";
let myOp = "";
let showingTotal = false;

let allClear = true;

const inputDisplay = document.getElementById("input");
const clearBtn = document.getElementById("clear-button");

const currentDebug = document.getElementById("current-display");
const totalDebug = document.getElementById("total-display");
const operatorDebug = document.getElementById("operator-display");
function showDebug() {
  currentDebug.innerHTML = `x: ${myNum}`;
  totalDebug.innerHTML = `total: ${total}`;
  operatorDebug.innerHTML = `opeartor : ${myOp}`;
}

function eNotation(x) {
  s = Number.parseFloat(x).toExponential(5);
  s = s.replace("+", "");
  return s;
}

function updateDisplay(x) {
  x = x.toString().length > 9 ? eNotation(x) : x;
  inputDisplay.innerHTML = x ? x : "0";
  showDebug();
}

function updateNum(x, doDisplay = true) {
  myNum = x;
  if (doDisplay) {
    updateDisplay(parseFloat(myNum ? myNum : 0));
    showingTotal = false;
  }
  showDebug();
}

function updateTotal(x) {
  total = x ? x : 0;
  //alert(`total = ${total}`);
  showDebug();
}

function updateClear(state) {
  allClear = state;
  clearBtn.innerHTML = allClear ? "AC" : "C";
}

function updateOp(op) {
  myOp = op;
}

function operator(op) {
  if (showingTotal) {
    updateOp("");
  } else {
    eval();
  }
  updateOp(op);
  updateNum("", false);
}

function doOp(op, t, n) {
  let res = 0;
  x = parseFloat(t);
  y = parseFloat(n);
  switch (op) {
    case "+":
      res = x + y;
      break;
    case "-":
      res = x - y;
      break;
    case "*":
      res = x * y;
      break;
    case "/":
      res = x / y;
      break;
    default:
      console.log("Unknown operator!");
  }

  //alert(`Result = ${res}`);
  return res;
}

function digit(x) {
  updateNum(myNum.length < 9 ? myNum.concat(x) : myNum);
  updateClear(false);
}

function eval() {
  if (myOp) {
    updateTotal(doOp(myOp, total, myNum));
  } else {
    updateTotal(myNum);
  }
  updateDisplay(total);
  showingTotal = true;
}

function clr() {
  if (allClear) {
    updateTotal(0);
    updateNum("");
    updateOp("");
  } else {
    updateNum("");
    updateClear(true);
  }
}

function sign() {
  if (showingTotal) {
    updateTotal(-1 * total);
    updateDisplay(total);
    showingTotal = true;
  } else if (myNum.charAt(0) === `-`) {
    updateNum(myNum.slice(1));
  } else {
    updateNum(myNum ? "-".concat(myNum) : "-0");
  }
}

function percent() {
  updateNum(myNum ? parseFloat(myNum) / 100 : "");
}

function decimal() {
  alert("decimal");
}
