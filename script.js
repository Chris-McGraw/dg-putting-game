$(document).ready(function() {

  $("#disc").draggable({
    axis: "y",
    stop: function( event, ui ) {

      /* console.log($("#disc").position()); */

      $("#disc").addClass("madePutt");

      setTimeout(function() {
        $("#disc").addClass("madePuttDrop");
        $("#cage").addClass("cageOverlay");
      }, 1100);

      /* setTimeout(function() {
        console.log($("#disc").position());
      }, 1100); */

      setTimeout(function() {
        $("#disc").removeClass("madePutt");
        $("#disc").removeClass("madePuttDrop");
        $("#cage").removeClass("cageOverlay");
      }, 2250);
    }
  });

});
