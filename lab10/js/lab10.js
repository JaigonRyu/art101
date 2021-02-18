//Author: Jacob Hanshaw
//Date: 2/15/2021
//Lab10 sor or scramble a name


// find button element
buttonEl = document.getElementById("submit-button");

// add event listener to buttonEl
buttonEl.addEventListener("click", function(){
  // find user-name element
  nameEl = document.getElementById("user-name");
  // get value from user-name element
  var userName = nameEl.value;
  // modify the name
  userName = userName.toLowerCase().split('').sort().reverse().join('');
  console.log("user name: ", userName)
  // find the output element
  outputEl = document.getElementById("output");
  // change that element
  outputEl.innerText =userName;
});
