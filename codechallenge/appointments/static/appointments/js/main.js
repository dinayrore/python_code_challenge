$(".btn").click(function() {

 var label = $(".btn").text();

 if(label == "ADD") {
   $(".btn").text("NEW");
   $("#form").hide();
 }
 else {
   $(".btn").text("ADD");
   $("#form").show();
 }

});
