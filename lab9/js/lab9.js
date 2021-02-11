//Author: Jacob Hanshaw
//Date: 2/10/2021
//License: MIT
//Get the output div
var outputEl = document.getElementById("output");

//create and style two new divs and append them
var new1El = document.createElement("p");
new1El.innerHTML = "This is something new!"
new1El.style.font = "italic bold 25px arial,serif";
new1El.style.textAlign = "center";

var new2El = document.createElement("p");
new2El.innerHTML = "This is something newer!";
new2El.style.font = "italic bold 30px arial,serif";
new2El.style.textAlign = "center";

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

//Create a button that changes some text
var divEl = document.getElementById("div_1");
divEl.innerHTML = "Click the button?";
divEl.style.font = "italic bold 35px arial,serif";
divEl.style.textAlign = "center";
divEl.style.paddingBottom = "40px";
console.log(divEl.innerHTML);

var button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "Press me!";

button.onclick = function(){
  divEl.innerHTML= "Thanks for clicking!"

}
