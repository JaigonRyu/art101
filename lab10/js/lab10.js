//Author: Jacob Hanshaw
//Date: 2/11/2021
//Lab10 sor or scramble a name


//find element
var buttonEl = document.getElementById("submit-button");

//add event listener to button
buttonEl.addEventListener("click", function(){
  //var nameChoice = window.prompt("please enter your name:");
  //console.log(nameChoice)
  nameEl = document.getElementById("name");
  var userName = nameEl.value;
  userName = userName.toLowerCase().split('').sort().reverse().join('');


  titleEl = document.getElementById("title");

  titleEl.innerText = userName;
});
