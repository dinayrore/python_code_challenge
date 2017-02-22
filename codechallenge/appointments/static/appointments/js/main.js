var label = $(".btn").text();

$(".btn-success").click(function() {

 if(label == "ADD") {
  //  $("#form").hide();
  // TODO: POST to DB on success do the same as btn-danger click
 }
 else {
   $(".btn").text("ADD");
   $("#form").show();
 }

});

$(".btn-danger").click(function() {
  $(".btn-success").text("NEW");
  $("#form").hide();

});
