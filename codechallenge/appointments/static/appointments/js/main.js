var label = $(".btn").text();

$(".btn-success").click(function() {

 if(label == "ADD") {
  //  $("#form").hide();
  // TODO: POST to DB on success do the same as btn-danger click
  // Submit post on submit
  $('#post-form').on('submit', function(event){
      event.preventDefault();
      console.log("Your appointment is saved")  // sanity check
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

$(document).ready(function() {
    $("#post").click(function(e) {
        e.preventDefault();
        var data = {
            'foo': 'bar'
        }

        $.ajax({
            "type": "POST",
            "dataType": "json",
            "url": "index",
            "data": data,
            "success": function(result) {
                console.log(result);
            },
        });
    });
});



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
