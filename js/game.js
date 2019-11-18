var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'game-world');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);

//   creates different states for all 6 different levels
game.state.add('level1', level1State);
game.state.add('level2', level2State);
game.state.add('level3', level3State);
game.state.add('level4', level4State);
game.state.add('level5', level5State);
game.state.add('level6', level6State);
// remember to add in additional levels as they are made
game.state.add('gameover', gameoverState);

game.global = {
  //   creates the different variables to tell diffrerent parts of the story, which turn it is, and for movving the different characters
  alien1HP: 3,
  right_side: 1,
  playerHP: 7,
  ammo: 1,
  storyStatus: 1,
  turn: 1,
  moving: 0,
  charX: 0,
  charY: 0,
  //   this array creates a tilemap where \n creates a new line, with each number representing a different tile on the spritesheet
  level1TMA: '0,0,4,0,0,0,10,0,0,0,\n6,6,8,0,0,0,4,0,0,0,\n0,0,0,0,0,0,12,6,6,6,\n13,0,0,0,0,0,9,0,0,0,\n0,0,0,0,0,0,0,0,0,0,\n8,0,0,7,6,6,11,8,0,7\n0,0,0,0,0,0,10,0,0,0,\n0,0,0,0,0,0,10,0,0,0,\n6,6,8,0,0,7,13,0,0,14,\n1,1,1,2,2,1,10,0,0,0,\n2,2,2,2,2,1,12,6,5,6,\n1,1,1,1,1,1,10,3,3,3'
};

game.state.start('boot');
