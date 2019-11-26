/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
  create: function() {
    // create the screen
    gameOver = game.add.sprite(0, 0, 'lose');
    gameOver.animations.add('loseAnimation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5, false);

    gameOver.smoothed = false;

    gameOver.scale.x = 10;
    gameOver.scale.y = 8;

    gameOver.animations.play('loseAnimation');
  }

  //use the following to go back to the menu
  //game.state.start('menu');
};