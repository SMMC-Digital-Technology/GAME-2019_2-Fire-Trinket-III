/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
   create: function() {
      // create the screen
      gameOver = game.add.text(250, 300, "you've won, yayyy :/!", {fill :  'white'});
      gameOver.scale.x = 3;
      gameOver.scale.y = 3;
      gameOverFail = game.add.text(250, 350, "you stand there, alone and cold, your friends lifeless bodies at your feet, why do you get to live? they were better than you...", {fill :  'white'});
   }

   //use the following to go back to the menu
   //game.state.start('menu');
};
