// A $( document ).ready() block.
// $ = jquery world

$( document ).ready(function() {
  
  console.log( "ready!" );
  
  // click the button
  $("#btnUserName").click(function(){
    console.log("button clicked")
    let fname = $("#fname").val()
    
    console.log(fname);
    $("#something").text("Hello " + fname + ".");
    
  });
});