for (var index=0; index <100; index += 1){

  console.log(index);

  //create 10 div elements with a class name box inside the container div
  //var boxEl = document.createElement("div");
  //var boxEl = $()
  //boxEl.className="box";
  if (index % 2 == 0){
    $("#container").append("<div id='box_id_"+index+"' class='box_even'></div> ");
  } else {
    $("#container").append("<div id='box_id_"+index+"' class='box_odd'></div> ");
  }

  //ad
  //boxEl.id="box_id_"+index;
  //document.getElementById('container').appendChild(boxEl);
  //boxEl.innerHTML= "THis is number "+ index;
}
