$(document).ready(function() {
  $("#disc").on("click", function() {
    $("#disc").addClass("madePutt");
    setTimeout(function() {
      $("#disc").addClass("madePuttDrop");
    }, 1050);
  })
});
