function getajaxdata(){

$.ajax({
  url:"https://dog.ceo/api/breeds/image/random",
  type:"GET",
  datatype:"json",
  success: successFun,
  error: errorFun,
  complete: function(xhr,status){
    console.log("The request has been completed"+ status)
  }
})
};

function successFun(result){
  console.log(result);
  var img = document.createElement('img');
  img.src = result.message;
  $("#ajax_text").append(img);
}

function errorFun(xhr,status,strErr){
  console.log("Error"+ strErr)
}

$("#ajax_get").click(getajaxdata);
