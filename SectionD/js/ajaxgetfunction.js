function getajaxdata(){

$.ajax({
  url:"data/data.xml",
  type:"GET",
  datatype:"xml",
  success: successFun,
  error: errorFun,
  complete: function(xhr,status){
    console.log("The request has been completed"+ status)
  }
})
};

function successFun(result){
  console.log(result);
  $("#ajax_text").html(result.);
}

function errorFun(xhr,status,strErr){
  console.log("Error"+ strErr)
}

$("#ajax_get").click(getajaxdata);
