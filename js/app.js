var myGame = new SimonGame ();

console.log( myGame);

$(document).ready (function () {
myGame.startGame ();

});

$(document).ready (function () {
  $("button").click(function () {
    var colorJustClicked = $(this).prop("id");
    var currentSequenceColor = myGame.sequence[myGame.userClickCount];

    if (currentSequenceColor === colorJustClicked) {
      myGame.userClickCount += 1;

      if (myGame.userClickCount >= myGame.sequence.length) {
      $("body").addClass("sequence-entered");

        setTimeout(function () {
          $("body").removeClass("sequence-entered");
        }, 1000);
        myGame.nextRound ();
      }
    }
    else {
      $("body").addClass ("game-ended");

      setTimeout(function () {
        $("body").removeClass("game-ended");

      // alert("GAME OVER");
      myGame.gameOver();
    }, 2000);
    }
  });

});
