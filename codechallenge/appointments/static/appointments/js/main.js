var label = $(".btn").text();

$(".btn-success").click(function() {

 if(label == "ADD") {
  //  $("#form").hide();
  // TODO: POST to DB on success do the same as btn-danger click
  // Submit post on submit
  $('#post-form').on('submit', function(event){
      event.preventDefault();
      console.log("Your appointment is saved")
      create_post();
  });
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



// Another method for AJAX POST?
$(document).ready(function() {
    $("#post").click(function(e) {
        e.preventDefault();
        var data = {
            '': ''
        }

        $.ajax({
            "type": "POST",
            "dataType": "json",
            "url": "http://127.0.0.1:8000/",
            "data": data,
            "success": function(result) {
                console.log(result);
            },
        });
    });
});






// AJAX request from Postman
var form = new FormData();
form.append("date", "02/22/17");
form.append("time", "4:49 PM");
form.append("description", "Enter Data into sqlite db");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://127.0.0.1:8000/",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "124baa8a-0703-ec7d-ca71-cedde46d5ceb"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});






// Something I need to use CSRF?
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        }
    }
});
