"use strict";

// Script used by simple-page.html

let user = {
  name: "John",
  age: 25,
  "likes birds": true,
};
const bday = "18.03.2995";

/*
const COLOR_BLUE = "00F";
alert(`${user.name} is ${user.age} years old.`);

let yourAge = prompt("How old are you?", ["50"]);

let ageDiff = (age1, age2) => Math.abs(age1 - age2);
if (confirm(`Are you really ${yourAge} years old?!`)) {
  let message =
    yourAge > user.age
      ? `You're ${ageDiff(user.age, yourAge)} years older than ${user.name}!`
      : yourAge == user.age
      ? `You're the same age as ${user.name}!`
      : `You're ${ageDiff(user.age, yourAge)} years younger than ${user.name}!`;
  alert(message);
}

let clone = structuredClone(user);
clone.name = "Bob";
alert(`${clone.name} is a structured clone of ${user.name}`);
 */
function Cat(name) {
  this.name = name;
  this.isHungry = true;
  this.feed = function () {
    this.isHungry = false;
    return this;
  };
}

let allcats = [];

function cats() {
  let name = prompt("Name your cat!", "Nameless");
  let kitty = new Cat(name);
  allcats.push(kitty);
  if (confirm(`Feed ${kitty.name}?`)) {
    kitty.feed();
  }
  let message = kitty.isHungry
    ? `${kitty.name} is hungry!`
    : `${kitty.name} isn't hungry.`;
  alert(message);
  message = "All of your cats: ";
  for (let cat of allcats) {
    message += cat.name;
    message += ", ";
  }
  alert(message);
}

function countToThree() {
  let i = 1;
  alert("Let's count to 3!");
  while (i < 4) {
    alert(i);
    i++;
  }
}

function Calculator() {
  this.read = function () {
    this.x = prompt("x=?", 0);
    this.y = prompt("y=?", 0);
  };
  this.sum = function () {
    return parseInt(this.x) + parseInt(this.y);
  };
  this.mul = function () {
    return this.x * this.y;
  };
}

function calcDemo() {
  let calculator = new Calculator();
  calculator.read();
  alert(`sum = ${calculator.sum()}`);
  alert(`product = ${calculator.mul()}`);
}

function removeFancy() {
  let message =
    "Are you sure you want to remove all fancy elements on this page?";
  if (confirm(message)) {
    let x = document.getElementsByClassName("fancy");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }
}

function changeText() {
  document.getElementById("changeMe").innerHTML = "Ouch!";
}

function fillCanvas() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  // Create gradient
  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, "red");
  grd.addColorStop(1, "white");

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(10, 10, 150, 80);

  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.font = "30px Arial";
  ctx.strokeText("Hello World", 10, 50);
}

const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}

/* DRAG AND DROP */
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
