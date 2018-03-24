$(document).ready(function() {
  $("#disc").on("click", function() {
    $("#disc").addClass("madePutt");
    setTimeout(function() {
      $("#disc").addClass("madePuttDrop");
      $("#cage").addClass("cageOverlay");
    }, 1050);

    setTimeout(function() {
      $("#disc").removeClass("madePutt");
      $("#disc").removeClass("madePuttDrop");
      $("#cage").removeClass("cageOverlay");
    }, 2250);

  })
});
