$(document).ready(function() {

/* ------------------------- Variable Declarations ------------------------- */

  currentScore = 0;

/* ---------------------------- Event Handlers ---------------------------- */

  $("#game-mode-practice").on("click", function() {
    $("#gamestart-overlay-background").addClass("hidden");
  });

  $("#corner-quit").on("click", function() {
    $("#gamestart-overlay-background").removeClass("hidden");
    $("#putting-instructions").removeClass("hidden");
    $("#putt-start-line-left").removeClass("putt-start-line-left-collapsed");
    $("#putt-start-line-right").removeClass("putt-start-line-right-collapsed");
    currentScore = 0;
    $("#player-score").html("Score: " + currentScore);
  });

  $("#disc").draggable({
    axis: "y",
    containment: "#arrow-container", scroll: false,

    start: function( event, ui ) {
      $("#disc").removeClass("disc-start");
    },

    stop: function( event, ui ) {
      $("#putting-instructions").addClass("hidden");
      $("#putt-start-line-left").addClass("putt-start-line-left-collapsed");
      $("#putt-start-line-right").addClass("putt-start-line-right-collapsed");

  /* ---------------------- Missed Putt Low ---------------------- */
      if($("#disc").position().top >= 0 && $("#disc").position().top <= 54) {
        for(shotPower = 0; shotPower <= 54; shotPower++) {
          if($("#disc").position().top === shotPower) {
            var powerChange = 0 - shotPower;
            var shotHeight = powerChange + -386 + powerChange + (powerChange / 4);
            $("#disc").addClass("putt");
            $("#disc").css({"transform": "translate(18px," + shotHeight + "px) rotate(-15deg)"});

            setTimeout(function() {
              var dropHeight = powerChange + -380;
              $("#disc").addClass("putt-drop");
              $("#disc").css({"transform": "translate(18px," + dropHeight + "px) rotate(0deg)"});
            }, 1100);

            setTimeout(function() {
              $("#disc").removeClass("putt");
              $("#disc").removeClass("putt-drop");
              $("#disc").addClass("disc-start");
              $("#disc").css({"transform": "translate(0px, 0px) rotate(0deg)"});
            }, 2250);
          }
        }
      }

  /* ------------------------- Made Putt ------------------------- */
      if($("#disc").position().top >= 55 && $("#disc").position().top <= 75) {
        for(shotPower = 55; shotPower <= 75; shotPower++) {
          if($("#disc").position().top === shotPower) {
            var powerChange = 55 - shotPower;
            var shotHeight = powerChange + -515 + powerChange + powerChange;
            $("#disc").addClass("putt");
            $("#disc").css({"transform": "translate(18px," + shotHeight + "px) rotate(-15deg)"});

            setTimeout(function() {
              var dropHeight = powerChange + -480;
              $("#disc").addClass("putt-drop");
              $("#disc").css({"transform": "translate(18px," + dropHeight + "px) rotate(0deg)"});
              $("#cage").addClass("cage-overlay");
            }, 1100);

            setTimeout(function() {
              currentScore++;
              $("#player-score").html("Score: " + currentScore);
            }, 2000);

            setTimeout(function() {
              $("#disc").removeClass("putt");
              $("#disc").removeClass("putt-drop");
              $("#cage").removeClass("cage-overlay");
              $("#disc").addClass("disc-start");
              $("#disc").css({"transform": "translate(0px, 0px) rotate(0deg)"});
            }, 2250);
          }
        }
      }

  /* ---------------------- Missed Putt Belt ---------------------- */
      if($("#disc").position().top >= 76 && $("#disc").position().top <= 91) {
        for(shotPower = 76; shotPower <= 91; shotPower++) {
          if($("#disc").position().top === shotPower) {
            var powerChange = 76 - shotPower;
            var shotHeight = powerChange + -580 + powerChange + powerChange;
            $("#disc").addClass("putt");
            $("#disc").css({"transform": "translate(18px," + shotHeight + "px) rotate(-15deg)"});

            setTimeout(function() {
              var dropHeight = powerChange + -456;
              $("#disc").addClass("putt-drop");
              $("#disc").css({"transform": "translate(18px," + dropHeight + "px) rotate(0deg)"});
            }, 1100);

            setTimeout(function() {
              $("#disc").removeClass("putt");
              $("#disc").removeClass("putt-drop");
              $("#disc").addClass("disc-start");
              $("#disc").css({"transform": "translate(0px, 0px) rotate(0deg)"});
            }, 2250);
          }
        }
      }

  /* ---------------------- Missed Putt High ---------------------- */
      if($("#disc").position().top >= 92 && $("#disc").position().top <= 110) {
        for(shotPower = 92; shotPower <= 110; shotPower++) {
          if($("#disc").position().top === shotPower) {
            var powerChange = 92 - shotPower;
            var shotHeight = powerChange + -629 + powerChange + powerChange;
            $("#disc").addClass("putt-high");
            $("#disc").css({"transform": "translate(18px," + shotHeight + "px) rotate(-15deg)"});

            setTimeout(function() {
              var dropHeight = powerChange + -472;
              $("#disc").addClass("putt-drop-behind");
              $("#disc").css({"transform": "translate(0px," + dropHeight + "px) rotate(0deg)"});
            }, 1000);

            setTimeout(function() {
              $("#disc").removeClass("putt-high");
              $("#disc").removeClass("putt-drop-behind");
              $("#disc").addClass("disc-start");
              $("#disc").css({"transform": "translate(0px, 0px) rotate(0deg)"});
            }, 2250);
          }
        }
      }

    }
  });

});
