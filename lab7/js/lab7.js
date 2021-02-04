/**
 * Author: Jacob Hanshaw
 * Created: 2/3/2021
 *
 **/

//Begin function for sorting names
function sortName(nameChoice) {
    //alert(nameChoice);
    //Turn the name into an array using split
    var nameArray = nameChoice.split('');
    console.log("nameArray=", nameArray);

    //Sort the array using the sort function
    var sortNameArray = nameArray.sort();
    console.log("sortNameArray=", sortNameArray);

    //Join the name back to make a string
    var sortedName = sortNameArray.join('');
    console.log("sortedName=", sortedName);

    //return the name back to be used in document.writeln
    return sortedName;
}

//Ask the user for their name and store as a vavriable
var nameChoice = window.prompt("please enter your name:");
console.log("Name Choice=", nameChoice);


//Call the function and print the new name with sentence
document.writeln("Here is your new name:", "</br>",
  sortName(nameChoice), "</br>");
