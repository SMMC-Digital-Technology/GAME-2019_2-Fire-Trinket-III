var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'game-world');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);

game.state.add('level1', level1State);
game.state.add('level2', level2State);
game.state.add('level3', level3State);
game.state.add('level4', level4State);
game.state.add('level5', level5State);
game.state.add('level6', level6State);
// remember to add in additional levels as they are made
game.state.add('gameover', gameoverState);

game.global = {
  storyStatus: 1,
  turn: 1,
  moving: 0,
  charX: 0,
  charY: 0,
  level1TMA: '0,0,3,0,0,0,1,0,0,0,\n1,1,1,0,0,0,3,0,0,0,\n0,0,0,0,0,0,1,1,1,1,\n2,0,0,0,0,0,1,0,0,0,\n0,0,0,0,0,0,0,0,0,0,\n1,0,0,1,1,1,1,1,0,\n0,0,0,0,0,0,1,0,0,0,\n0,0,0,0,0,0,1,0,0,0,\n1,1,1,0,0,1,1,0,0,4,\n0,0,0,0,0,0,1,0,0,0,\n0,0,0,0,0,0,1,1,5,1,\n0,0,0,0,0,0,1',
  alien1HP: 3,

  // set variables that travel between the states here
  // eg score = 0;
  // access using game.global
  // eg game.gloabl.score
};

game.state.start('boot');
