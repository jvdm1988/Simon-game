function SimonGame() {
  this.colors = ["red", "green", "blue", "yellow"];
  this.sequence = [];

  //This will keep track of where the user is in the sequence.
  this.userClickCount = 0;

  //What the player's score is
  this.round = 1;
}


SimonGame.prototype.startGame = function() {
  console.log("Starting the game...");

  this.addColor();
  this.showSequence();
};

//Chooses one of the 4 colors at random and adds it to the sequence
SimonGame.prototype.addColor = function() {
  var randomIndex = Math.floor(Math.random() * 4); //to get a random array index

  // random index of array colors
  this.sequence.push(this.colors[randomIndex]);
};

SimonGame.prototype.showSequence = function() {
  var ourSequence = this.sequence;
  var i = 0;

  $("#buttons-container").addClass("blocked");

  var intervalId = setInterval(function() {
    if (i >= ourSequence.length) {
      clearInterval(intervalId);
        $("#buttons-container").removeClass("blocked");
      return;
    }

    // turns on the light by adding class lighton
    $("#" + ourSequence[i]).addClass("lighton");

    setTimeout(function() {
      //turns off the light by removing the class
      $("button").removeClass("lighton");
    }, 700);

    i += 1;
  }, 1250);
};

SimonGame.prototype.nextRound = function () {
  this.addColor();
  this.showSequence();
  this.userClickCount = 0;

  $("#counter").html(this.round);
  this.round += 1;
};

SimonGame.prototype.gameOver = function () {
  this.sequence = [];
  this.userClickCount = 0;
  this.round = 1;
  $("#counter").html(0);

  this.startGame();
};
