//Auhtor: Jacob Hanshaw
//Date: 2/9/2021
//Lisence: MIT

//Create a div element that has id= "div_1" and text that says this is annoying
//console.log that text
//add a button
//change the text from this is annot=ying into this is more annoying than I thoguht when clicking the button

var divEl = document.getElementById("div_1");
divEl.innerHTML = "This is annoying!";
console.log(divEl.innerHTML);

var button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "Press me!";

button.onclick = function(){
  divEl.innerHTML= "This is more annoying than I thought!"

}
