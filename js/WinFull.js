/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
   create: function() {
      // create the screen
      gameOver = game.add.text(250, 300, "YOU'VE WON!", {fill :  'white'});
      gameOver.scale.x = 3;
      gameOver.scale.y = 3;
      gameOverFail = game.add.text(250, 350, "you got everyone to safety well done, your friends cannot thank you enough now u can go an eradicate this parisite!", {fill :  'white'});
   }

   //use the following to go back to the menu
   //game.state.start('menu');
};
