/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
   create: function() {
      // create the screen
      gameOver = game.add.text(250, 300, "YOU'VE...won?", {fill :  'white'});
      gameOver.scale.x = 3;
      gameOver.scale.y = 3;
      gameOverFail = game.add.text(250, 350, "you saved one of your friends, he is thanking you...but what about the your other friend...", {fill :  'white'});
   }

   //use the following to go back to the menu
   //game.state.start('menu');
};
