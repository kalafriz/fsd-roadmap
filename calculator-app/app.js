let total = 0;
let myNum = "";
let myOp = "";

let allClear = true;

const inputDisplay = document.getElementById("input");
const clearBtn = document.getElementById("clear-button");

const currentDebug = document.getElementById("current-display");
const totalDebug = document.getElementById("total-display");
const operatorDebug = document.getElementById("operator-display");
function showDebug() {
  currentDebug.innerHTML = myNum;
  totalDebug.innerHTML = total;
  operatorDebug.innerHTML = myOp;
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

function updateNum(x, doUpdate = true) {
  myNum = x;
  if (doUpdate) {
    updateDisplay(parseFloat(myNum ? myNum : 0));
  }
}

function updateTotal(x) {
  total = x ? x : 0;
  //alert(`total = ${total}`);
}

function updateClear(state) {
  allClear = state;
  clearBtn.innerHTML = allClear ? "AC" : "C";
}

function updateOp(op) {
  myOp = op;
}

function operator(op) {
  eval();
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
    console.log(String.valueOf(total));
    updateDisplay(total);
  } else {
    updateTotal(myNum);
    console.log(toString(total));
    updateDisplay(total);
  }
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
  alert("+/-");
}

function percent() {
  updateNum(myNum ? parseFloat(myNum) / 100 : "");
}

function decimal() {
  alert("decimal");
}
