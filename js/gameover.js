/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
   create: function() {
      // create the screen
      gameOver = game.add.text(250, 300, "GAME OVER", {fill :  'white'});
      gameOver.scale.x = 3;
      gameOver.scale.y = 3;
   }

   //use the following to go back to the menu
   //game.state.start('menu');
};
