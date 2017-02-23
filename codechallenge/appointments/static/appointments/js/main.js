// TODO: use double quotes

var apptFormContainer = $('#appt-form-container');
var apptForm = $('#appt-form');
var newApptBtn = $('#new-appt');
var cancelApptBtn = $('#cancel-appt');
var dateInput = $('#appt-date-input');
var timeInput = $('#appt-time-input');
var descriptionInput = $('#appt-description-input');

newApptBtn.click(function() {
  var btnText = $(this).text();
  if (btnText == "ADD") {
    apptForm.submit();
  } else {
    newApptBtn.text("ADD");
    apptFormContainer.show();
  }
});

cancelApptBtn.click(function() {
  newApptBtn.text("NEW");
  apptFormContainer.hide();
});

$(document).ready(function() {
  getAppointments();
});

function getAppointments(searchString) {
  $.ajax({
    method: "GET",
    url: "/getAppointments",
    dataType: "json"
  }).then(function(appointments) {
    console.log(appointments);
  }).catch(function(err) {
    console.error(err);
  })
}

// // Something I need to use CSRF?
// function getCookie(name) {
//     var cookieValue = null;
//     if (document.cookie && document.cookie != '') {
//         var cookies = document.cookie.split(';');
//         for (var i = 0; i < cookies.length; i++) {
//             var cookie = jQuery.trim(cookies[i]);
//             if (cookie.substring(0, name.length + 1) == (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }
//
// $.ajaxSetup({
//     beforeSend: function(xhr, settings) {
//         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
//             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
//         }
//     }
// });
