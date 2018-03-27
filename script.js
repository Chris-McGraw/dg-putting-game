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
        for(shotPower = 55; shotPower <= 75; shotPower++) {
          if($("#disc").position().top === shotPower) {
            var powerChange = 55 - shotPower;
            console.log(powerChange);
            var shotHeight = powerChange + -525 + powerChange;
            console.log(shotHeight);
            $("#disc").addClass("made-putt");
            $("#disc").css({"transform": "translate(18px," + shotHeight + "px) rotate(-15deg)"});

            setTimeout(function() {
              var dropHeight = powerChange + -480;
              $("#disc").addClass("made-putt-drop");
              $("#disc").css({"transform": "translate(18px," + dropHeight + "px) rotate(0deg)"});
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
              $("#disc").css({"transform": "translate(0px, 0px) rotate(0deg)"});
            }, 2250);
          }
        }

      }

      /* $("#disc").addClass("made-putt");

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
      }, 2250); */
    }
  });

  $("#disc").on("click", function() {
    console.log($(this).position());
  });

});
