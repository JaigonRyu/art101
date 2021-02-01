/**
 * Author:    Jacob Hanshaw
 * Created:   01.31.2021
 **/

 //Array of my transport
var myTransport = ["Ford", "Skateboard", "Bike", "Prius"];


//Object containing my main ride
var myMainRide = {Make:"Ford",
                  Model:"Mustang GT",
                  Color:"Black",
                  Year:2006};

//Output for my transport
document.writeln("Getting around: " + myTransport + "<br>");

//Output for my main ride
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
