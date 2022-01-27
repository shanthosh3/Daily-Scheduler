$(document).ready(function () {
  $(".saveBtn").click(function () {

    let userInput = $(this).siblings(".description").val();
    let timeBlock = $(this).parent().attr("id");

    console.log("parent ID and userINPUT", userInput, timeBlock);
    localStorage.setItem(timeBlock, userInput);
  });

  function getCurrentDate() {
    document.getElementById("currentDay").innerHTML =
      moment().format("dddd MMMM Do YYYY");
  }
  getCurrentDate();

// add css style

  function getCurrentTime() {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
      var timeBlockValue = parseInt($(this).attr("value"));
      console.log(timeBlockValue);

      if (timeBlockValue < currentTime) {
        $(this).addClass("past");
      } else if (timeBlockValue === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  getCurrentTime();

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
