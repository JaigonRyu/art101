//Author: Jacob Hanshaw
//Date: 3/7/2021
//Lab 16:


function getajaxdata(){

$.ajax({
  url:"https://xkcd.com/info.0.json ",
  type:"GET",
  datatype:"json",
  success: successFun,
  error: errorFun,
  complete: function(xhr,status){
    console.log("The request has been completed"+ status)
  }
})
};

function successFun(comicObj){
  console.log(comicObj);
  var img = document.createElement('img');
  img.src = comicObj.img;
  title = comicObj.title;
  img.alt = comicObj.alt;
  img.title = comicObj.alt;
  $("#output_1").html(title);
  $("#output_2").append(img);
}

function errorFun(xhr,status,strErr){
  console.log("Error"+ strErr)
}

$("#document").ready(getajaxdata)
