$(document).ready(function() {

  $("#disc").draggable({
    axis: "y",
    containment: "#containment-wrapper", scroll: false ,

    start: function( event, ui ) {
      $("#disc").removeClass("disc-start");
    },

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
        $("#disc").addClass("disc-start");
      }, 2250);
    }
  });

  $("#disc").on("click", function() {
    console.log($(this).position())
  });

});
