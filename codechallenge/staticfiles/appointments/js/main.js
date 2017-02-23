var apptFormContainer = $("#appt-form-container");
var apptForm = $("#appt-form");
var newApptBtn = $("#new-appt");
var apptSearchInput = $("#appt-search-input");
var apptSearchBtn = $("#appt-search-btn");
var cancelApptBtn = $("#cancel-appt");
var dateInput = $("#appt-date-input");
var timeInput = $("#appt-time-input");
var descriptionInput = $("#appt-description-input");
var apptTableItems = $("#appt-table-items");

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

apptSearchBtn.click(function() {
  getAppointments(apptSearchInput.val());
});

apptSearchInput.keyup(function(e) {
  if (e.keyCode == 13) {
    getAppointments(apptSearchInput.val());
  }
});

$(document).ready(function() {
  getAppointments();
});

function getAppointments(searchString) {
  $.ajax({
    method: "GET",
    url: "/getAppointments",
    dataType: "json",
    data: { search: searchString }
  }).then(function(appointments) {
    displayAppointments(appointments);
  }).catch(function(err) {
    console.error(err);
  });
}

function displayAppointments(appointments) {
  apptTableItems.empty();

  appointments.forEach(function(appointment) {
    var row = $("<tr>");

    $("<td>").text(appointment.fields.date).appendTo(row);
    $("<td>").text(appointment.fields.time).appendTo(row);
    $("<td>").text(appointment.fields.description).appendTo(row);

    row.appendTo(apptTableItems);
  });
}
