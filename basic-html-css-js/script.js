"use strict";

// Script used by simple-page.html

let user = 'John', age = 25;
const bday = '18.03.2995';

const COLOR_BLUE="00F"
alert(`${user} is ${age} years old.`);

let yourAge = prompt("How old are you?", ["50"]);

let ageDiff= (age1, age2) => Math.abs(age1-age2);
if(confirm(`Are you really ${yourAge} years old?!`)){

    let message = (yourAge > age) ? `You're ${ageDiff(age, yourAge)} years older than ${user}!`:
        (yourAge==age) ? `You're the same age as ${user}!`:
        `You're ${ageDiff(age, yourAge)} years younger than ${user}!`;
    alert(message);
}


function countToThree(){
    let i=1;
    alert("Let's count to 3!");
    while(i<4){
        alert(i);
        i++;
    }
}

function removeFancy(){
    let message = "Are you sure you want to remove all fancy elements on this page?";
    if(confirm(message)){
        let x = document.getElementsByClassName("fancy");
        for (let i=0; i< x.length; i++){
            x[i].style.display="none";
        }
    }
}

function changeText(){
    document.getElementById("changeMe").innerHTML="Ouch!";
}

function fillCanvas(){
        
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