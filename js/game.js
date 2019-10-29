var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'game-world');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
//game.state.add('level', levelState);
game.state.add('level1', level1State);
game.state.add('level2', level2State);
game.state.add('level3', level3State);
game.state.add('level4', level4State);
game.state.add('level5', level5State);
game.state.add('level6', level6State);
// remember to add in additional levels as they are made
game.state.add('gameover', gameoverState);

game.global = {
  //var turn = 0;
  // set variables that travel between the states here
  // eg score = 0;
  // access using game.global
  // eg game.gloabl.score
};

game.state.start('boot');