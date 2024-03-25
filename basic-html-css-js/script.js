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