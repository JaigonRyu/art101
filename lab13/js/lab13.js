//Author: Jacob Hanshaw
//Date: 2/24/2021
//Lab 13: Loops


//Put a comment block (Links to an external site.) at the top of your program
//Create a "FizzBuzz" function similar to how we did in class.
//Loop through numbers 1 to 200, listing them as you go
//If the number is a multiple of 3, if should print "Fizz!"
//If the number is a multiple of 5, it should print "Buzz!"
//If the number is a multiple of 7, it should print "Boom!"
//If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.

function fizzBuzzBoom(){
  for (var num=1; num <= 200; num++) {

    str = num + " - " + "";

    if (num % 3 == 0){
    str += "Fizz";
    }

    if (num % 5 == 0){
      str += "Buzz";
    }

    if (num % 7 == 0){
      str += "Boom";

    }

    if (num % 9 == 0){
      str += "Bang";
    }

    else{
      str += ""
    }
    $("#output").append("<p>" + str + "</p>");

}};

$("#submit-button").click(function(){
  $("#output").append(fizzBuzzBoom());
});
