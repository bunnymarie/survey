$(document).ready(function(){
  //FrontEnd
  $("#survey").submit(function(event){
    var name = $("input#nameInput").val();
    var dob = $("#born").val();
    var music = $("input:radio[name=genre]:checked").val();
    var food = $("#favfood").val();
    debugger;
    console.log(dob);
    console.log(music);
    console.log(food);
    console.log(name);

    $("#nameConfirm").text(name);
    $("#dobConfirm").text(dob);
    $("#foodConfirm").text(food);
    $("#musicConfirm").text(music);


    event.preventDefault();
  });
});
