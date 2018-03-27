$(document).ready(function() {

  $("#disc").draggable({
    axis: "y",
    containment: "#arrow-container", scroll: false ,

    start: function( event, ui ) {
      $("#disc").removeClass("disc-start");
    },

    stop: function( event, ui ) {

      console.log($("#disc").position());

      if($("#disc").position().top >= 55 && $("#disc").position().top <= 75) {
        $("#disc").addClass("made-putt");
      }

      /* $("#disc").addClass("made-putt"); */

      setTimeout(function() {
        $("#disc").addClass("made-putt-drop");
        $("#cage").addClass("cage-overlay");
      }, 1100);

      setTimeout(function() {
        console.log($("#disc").position());
      }, 1100);

      setTimeout(function() {
        $("#disc").removeClass("made-putt");
        $("#disc").removeClass("made-putt-drop");
        $("#cage").removeClass("cage-overlay");
        $("#disc").addClass("disc-start");
      }, 2250);
    }
  });

  $("#disc").on("click", function() {
    console.log($(this).position());
  });

});
