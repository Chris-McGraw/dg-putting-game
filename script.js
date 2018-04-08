$(document).ready(function() {

/* ------------------------- Variable Declarations ------------------------- */

  gameMode = "";
  timerStart = false;
  currentTime = 0;
  currentScore = 0;

  $gamestartOverlayBackground = $("#gamestart-overlay-background");
  $gamestartOverlayMenu = $("#gamestart-overlay-menu");
  $gameTitleTop = $("#game-title-top");
  $gameTitleBottom = $("#game-title-bottom");
  $gameModeTimed = $("#game-mode-timed");
  $gameModePractice = $("#game-mode-practice");
  $overlayPlayAgain = $("#overlay-play-again");
  $overlayQuit = $("#overlay-quit");
  $gameTimer = $("#game-timer");
  $playerScore = $("#player-score");
  $cage = $("#cage");
  $cornerQuit = $("#corner-quit");
  $puttingInstructions = $("#putting-instructions");
  $puttStartLineLeft = $("#putt-start-line-left");
  $disc = $("#disc");
  $puttStartLineRight = $("#putt-start-line-right");

/* ------------------------- Function Declarations ------------------------- */

  function startGameModeTimed() {
    gameMode = "timed";
    $gamestartOverlayBackground.addClass("hidden");
    currentTime = 45;
    $gameTimer.html("Remaining Time: " + currentTime);
    currentScore = 0;
    $playerScore.html("Score: " + currentScore);
    timerStart = false;
  }


  function startGameModePractice() {
    gameMode = "practice";
    $gamestartOverlayBackground.addClass("hidden");
    currentTime = "&infin;";
    $gameTimer.html("Remaining Time: " + currentTime);
    currentScore = 0;
    $playerScore.html("Score: " + currentScore);
  }


  function displayGameStartOverlay() {
    gameMode = "";
    $gamestartOverlayBackground.removeClass("hidden");
    $puttingInstructions.removeClass("hidden");
    $puttStartLineLeft.removeClass("putt-start-line-left-collapsed");
    $puttStartLineRight.removeClass("putt-start-line-right-collapsed");
    currentTime = 0;
    $gameTimer.html("Remaining Time: " + currentTime);
    currentScore = 0;
    $playerScore.html("Score: " + currentScore);
    timerStart = false;
    $gameTitleTop.html("Disc Golf");
    $gameTitleBottom.html("Putting Challenge");
    $overlayPlayAgain.remove();
    $overlayQuit.remove();
    $gameModeTimed.remove();
    $gameModePractice.remove()
    $gamestartOverlayMenu.append("<div id='game-mode-timed'>Time Attack</div>");
    $gameModeTimed = $("#game-mode-timed");
    $gamestartOverlayMenu.append("<div id='game-mode-practice'>Practice</div>");
    $gameModePractice = $("#game-mode-practice");

  /* ------------------ Overlay Event Handlers ------------------ */
    $gameModeTimed.on("click", function() {
      startGameModeTimed();
    });
    $gameModePractice.on("click", function() {
      startGameModePractice();
    });
  }


  function displayTimedScoreOverlay() {
    $gamestartOverlayBackground.removeClass("hidden");
    $puttingInstructions.removeClass("hidden");
    $puttStartLineLeft.removeClass("putt-start-line-left-collapsed");
    $puttStartLineRight.removeClass("putt-start-line-right-collapsed");
    currentTime = 0;
    $gameTimer.html("Remaining Time: " + currentTime);
    $gameTitleTop.html("Total Score:");
    $gameTitleBottom.html("--");
    $gameModeTimed.remove();
    $gameModePractice.remove();
    $overlayPlayAgain.remove();
    $overlayQuit.remove();

    setTimeout(function() {
      $gameTitleTop.html("Total Score:");
      $gameTitleBottom.html(currentScore);
      $gamestartOverlayMenu.append("<div id='overlay-play-again'>Play Again</div>");
      $overlayPlayAgain = $("#overlay-play-again");
      $gamestartOverlayMenu.append("<div id='overlay-quit'>Quit</div>");
      $overlayQuit = $("#overlay-quit");

  /* ------------------ Overlay Event Handlers ------------------ */
      $overlayPlayAgain.on("click", function() {
        startGameModeTimed();
      });
      $overlayQuit.on("click", function() {
        displayGameStartOverlay();
      });
    }, 2000);
  }


  function startTimerCountDown() {
    currentTime--;

    /* console.log(currentTime); */

    $gameTimer.html("Remaining Time: " + currentTime);
    setTimeout(function() {
      if(currentTime > 0) {
        startTimerCountDown();
      }
    }, 1000);
    if(currentTime === 0) {
      displayTimedScoreOverlay();
      setTimeout(function() {
        gameMode = "";
      }, 2000);
    }
  }


  function missedPuttLow() {
    for(shotPower = 0; shotPower <= 54; shotPower++) {
      if($disc.position().top === shotPower) {
        var powerChange = 0 - shotPower;
        var shotHeight = powerChange + -386 + powerChange + (powerChange / 4);
        $disc.addClass("putt");
        $disc.css({"transform": "translate(18px," + shotHeight + "px) rotate(-15deg)"});

        setTimeout(function() {
          var dropHeight = powerChange + -380;
          $disc.addClass("putt-drop");
          $disc.css({"transform": "translate(18px," + dropHeight + "px) rotate(0deg)"});
        }, 1100);

        setTimeout(function() {
          $disc.removeClass("putt");
          $disc.removeClass("putt-drop");
          $disc.addClass("disc-start");
          $disc.css({"transform": "translate(0px, 0px) rotate(0deg)"});
        }, 2250);
      }
    }
  }


  function madePutt() {
    for(shotPower = 55; shotPower <= 75; shotPower++) {
      if($disc.position().top === shotPower) {
        var powerChange = 55 - shotPower;
        var shotHeight = powerChange + -515 + powerChange + powerChange;
        $disc.addClass("putt");
        $disc.css({"transform": "translate(18px," + shotHeight + "px) rotate(-15deg)"});

        setTimeout(function() {
          var dropHeight = powerChange + -480;
          $disc.addClass("putt-drop");
          $disc.css({"transform": "translate(18px," + dropHeight + "px) rotate(0deg)"});
          $cage.addClass("cage-overlay");
        }, 1100);

        setTimeout(function() {
          if(gameMode === "timed" && currentTime >= 0) {
            currentScore++;
            $playerScore.html("Score: " + currentScore);
          }
        }, 2000);

        setTimeout(function() {
          if(gameMode === "practice" && currentTime === "&infin;") {
            currentScore++;
            $playerScore.html("Score: " + currentScore);
          }
        }, 2000);

        setTimeout(function() {
          $disc.removeClass("putt");
          $disc.removeClass("putt-drop");
          $cage.removeClass("cage-overlay");
          $disc.addClass("disc-start");
          $disc.css({"transform": "translate(0px, 0px) rotate(0deg)"});
        }, 2250);
      }
    }
  }


  function missedPuttBelt() {
    for(shotPower = 76; shotPower <= 91; shotPower++) {
      if($disc.position().top === shotPower) {
        var powerChange = 76 - shotPower;
        var shotHeight = powerChange + -580 + powerChange + powerChange;
        $disc.addClass("putt");
        $disc.css({"transform": "translate(18px," + shotHeight + "px) rotate(-15deg)"});

        setTimeout(function() {
          var dropHeight = powerChange + -456;
          $disc.addClass("putt-drop");
          $disc.css({"transform": "translate(18px," + dropHeight + "px) rotate(0deg)"});
        }, 1100);

        setTimeout(function() {
          $disc.removeClass("putt");
          $disc.removeClass("putt-drop");
          $disc.addClass("disc-start");
          $disc.css({"transform": "translate(0px, 0px) rotate(0deg)"});
        }, 2250);
      }
    }
  }


  function missedPuttHigh() {
    for(shotPower = 92; shotPower <= 110; shotPower++) {
      if($disc.position().top === shotPower) {
        var powerChange = 92 - shotPower;
        var shotHeight = powerChange + -629 + powerChange + powerChange;
        $disc.addClass("putt-high");
        $disc.css({"transform": "translate(18px," + shotHeight + "px) rotate(-15deg)"});

        setTimeout(function() {
          var dropHeight = powerChange + -472;
          $disc.addClass("putt-drop-behind");
          $disc.css({"transform": "translate(0px," + dropHeight + "px) rotate(0deg)"});
        }, 1000);

        setTimeout(function() {
          $disc.removeClass("putt-high");
          $disc.removeClass("putt-drop-behind");
          $disc.addClass("disc-start");
          $disc.css({"transform": "translate(0px, 0px) rotate(0deg)"});
        }, 2250);
      }
    }
  }

/* ---------------------------- Event Handlers ---------------------------- */

  $gameModeTimed.on("click", function() {
    startGameModeTimed();
  });

  $gameModePractice.on("click", function() {
    startGameModePractice();
  });

  $cornerQuit.on("click", function() {
    displayGameStartOverlay();
  });

  $disc.draggable({
    axis: "y",
    containment: "#arrow-container", scroll: false,

    start: function(event, ui ) {
      $disc.removeClass("disc-start");
    },

    stop: function(event, ui ) {
      if(gameMode !== "" && currentTime === 45 || gameMode !== "" && currentTime === "&infin;") {
        $puttingInstructions.addClass("hidden");
        $puttStartLineLeft.addClass("putt-start-line-left-collapsed");
        $puttStartLineRight.addClass("putt-start-line-right-collapsed");
      }

      if(gameMode === "timed" && timerStart === false) {
        timerStart = true;
        setTimeout(function() {
          startTimerCountDown();
        }, 500);
      }

  /* ---------------------- Missed Putt Low ---------------------- */
      if($disc.position().top >= 0 && $("#disc").position().top <= 54) {
        missedPuttLow();
      }

  /* ------------------------- Made Putt ------------------------- */
      if($disc.position().top >= 55 && $("#disc").position().top <= 75) {
        madePutt();
      }

  /* ---------------------- Missed Putt Belt ---------------------- */
      if($disc.position().top >= 76 && $("#disc").position().top <= 91) {
        missedPuttBelt();
      }

  /* ---------------------- Missed Putt High ---------------------- */
      if($disc.position().top >= 92 && $("#disc").position().top <= 110) {
        missedPuttHigh();
      }
    }
  });

});
