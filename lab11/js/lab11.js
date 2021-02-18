//Author: Jacob Hanshaw
//Date: 2/17/2021
//Lab 11: Libraries and jquery



//Changing the challenge div
$("#challenge").append("<button id=challenge_button>Challenge</button>");
$("#challenge").css("padding", "20px");
$("#challenge_button").click(function(){
  $("#challenge").toggleClass("special");
  $("#results_button").css('background','Aquamarine');


});

//Changing the problem div
$("#problems").append("<button id=problems_button>Problems</button>");
$("#problems").css("padding", "20px");
$("#problems_button").click(function(){
  $("#problems").toggleClass("special");
  $("#challenge_button").css('background','DarkOliveGreen');

});
//Changing the results div
$("#results").append("<button id=results_button>Results</button>");
$("#results").css("padding", "20px");
$("#results_button").click(function(){
  $("#results").toggleClass("special");
  $("#problems_button").css('background','Tomato');


});
