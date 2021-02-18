//var navEl = document.getElementById("nav");
//navEl.innerHTML = "THis is the navigation bar!";

function submitBio(){
  var nameVar = document.getElementById("name").value;
  console.log(nameVar);

  var emailVar = document.getElementById("email").value;
  console.log(emailVar)

  document.getElementById("name_email_id").innerHTML = "Name: " + nameVar + " Email: " + emailVar;

  var messageVar = document.getElementById("message").value;
  console.log(messageVar);
  var para_2_message = document.getElementById("bio_id");
  para_2_message.innerHTML = messageVar;


};
document.getElementById("submit_bio_id").addEventListener("click", submitBio);

buttonEl = document.getElementById("color_button");
buttonEl.addEventListener("click", function(){
    document.getElementById("bio_id").style.color = "red";
    document.getElementById("name_email_id").style.color = "red";
});
