/**
 * A "game over" screen for the end of the game
 */
var winState = {
  create: function() {
    // create the screen
    winScreen = game.add.sprite(0, 0, 'win');
    winScreen.animations.add('winAnimation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5, false);

    winScreen.smoothed = false;

    winScreen.scale.x = 10;
    winScreen.scale.y = 8;

    winScreen.animations.play('winAnimation');
  }

  //use the following to go back to the menu
  //game.state.start('menu');
};