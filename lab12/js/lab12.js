//Author: Jacob Hanshaw
//Date: 2/18/2021
//Lab 12: Conditionals

//Attach click handler to sumbit button
//get the value in the input text box
// get the lenght of the name
//get the remainder divided by 4 of the length
//create an if else to show house
//add house to output div

//given a number, return a hogwarts house
function sortingHat(str) {
  var len = str.length;
  var mod = len % 4;
    if (mod == 0) {
      return "Gryffindor"
    }
    else if (mod == 1) {
      return "Slytherin"
    }
    else if (mod == 2) {
      return "Hufflepuff"
    }
    else if (mod == 3) {
      return "Ravenclaw"
    }
}

// Create an event listener attached to #button
var myButton = document.getElementById("submit-button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})
