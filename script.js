$(document).ready(function () {
  $(".saveBtn").click(function () {
    //console.log("The button has been clicked");

    var userInput = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");

    console.log("parent ID and userINPUT", userInput, timeBlock);
    localStorage.setItem(timeBlock, userInput);
  });

  //add fucntion to display the Day Months Year ( using Moment JS)
  function getCurrentDate() {
    document.getElementById("currentDay").innerHTML =
      moment().format("dddd MMMM Do YYYY");
  }
  getCurrentDate();

  //Add function to apply proper css style to the current time

  function getCurrentTime() {
    var currentTime = moment().hours();
    //console.log(currentTime);

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
