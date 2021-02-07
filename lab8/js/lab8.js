/**
 * Author:    Jacob Hanshaw
 * Created:   02.06.2021
**/

//Function 1 for first thing
function firstThing(test){
  console.log(test + ": This is the first thing.<br>")

}

//firstFunction 2 for first thing
function secondtThing(test){
  console.log(test + ": This is the second thing.<br>")

}

//Function 3 for first thing
function thirdThing(test){
  console.log(test + ": This is the third thing.<br>")

}
//First set of tests
firstThing("TEST 1");
secondtThing("TEST 1");
thirdThing("TEST 1");

//Second set of tests
setTimeout(function() {
  firstThing("TEST 2");
}, 0);

setTimeout(function() {
  secondtThing("TEST 2");
}, 0);

setTimeout(function() {
  thirdThing("TEST 2");
}, 0);

// Third set of tests
setTimeout(function() {
  firstThing("TEST 3");
}, 3000);
setTimeout(function() {
  secondtThing("TEST 3");
}, 1000);
setTimeout(function() {
  thirdThing("TEST 3");
}, 2000);

//Bonus Task
var numbers = [1, 2, 3, 4, 5, , 7, 8, 9]
var oddnumbers = numbers.filter(function(number){
  return number % 2;
});
console.log(oddnumbers);
