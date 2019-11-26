var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'game-world');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);

//   creates different states for all 6 different levels
game.state.add('level1', level1State);
// remember to add in additional levels as they are made
game.state.add('gameover', gameoverState);
game.state.add('win', winState);

game.global = {
  //   creates the different variables to tell diffrerent parts of the story, which turn it is, and for movving the different characters
  alienPathfinding: 0,
  alien1X: 0,
  alien1Y: 0,

headingText1: "Jeo",
headingText2: "Bluleth",
bodyText1: "H-h-h hello? Is there anyone out there, please\nwe need help.",
bodyText2: "Hello, who is this? This radio signal is private,\nhow did you get in?",
bodyText3: "P-p-please send help, I'm currently on Urk the \ndying planet, aliens have taken over and are \nplanning on using the fire trinket to blow up \nthe solar system, please send help!!!",
bodyText4: "Alright, I'm heading your way! Stay tight!",
bodyTextStart: "T-t-there they are the aliens please help us",
bodyTextTerminal: "Yes!!!, now get me out of this dreadful place!. Thank you so much!",


  alien1Moved: 1,
  alien2Moved: 1,
  alien3Moved: 1,
  alien4Moved: 1,

  dummyVar: 0,

  alienSet: 0,

  alienXRelative: 0,
  alienYRelative: 0,
  alien2XRelative: 0,
  alien2YRelative: 0,
  alien3XRelative: 0,
  alien3YRelative: 0,
  alien4XRelative: 0,
  alien4YRelative: 0,

  alien1HP: 3,
  alien2HP: 3,
  alien3HP: 3,
  alien4HP: 3,

  charC1: 0,
  charC2: 0,
  charC3: 0,
  charC4: 0,

  charCX1: 0,
  charCX2: 0,
  charCX3: 0,
  charCX4: 0,

  charCY1: 0,
  charCY2: 0,
  charCY3: 0,
  charCY4: 0,

  availMove: 1,
  charNumber: 1,

  right_side: 1,

  playerHP: 7,

  ammo: 1,
  storyStatus: 1,
  turn: 1,
  moving: 0,

  wallA: 0,
  wallB: 0,

  charX: 0,
  charY: 400,
  char: 'bluleth',

  mouseX: 0,
  mouseY: 0,

  bluX: 0,
  bluY: 0,
  //   this array creates a tilemap where \n creates a new line, with each number representing a different tile on the spritesheet
  level1TMA: '0,0,4,0,0,0,10,0,0,0,\n6,6,8,0,0,0,4,0,0,0,\n0,0,0,0,0,0,12,6,6,6,\n14,0,0,0,0,0,9,0,0,0,\n0,0,0,0,0,0,0,0,0,0,\n8,0,0,7,6,6,11,8,0,7\n0,0,0,0,0,0,10,0,0,0,\n0,0,0,0,0,0,10,0,0,0,\n6,6,8,0,0,7,13,0,0,15,\n1,1,1,2,2,1,10,0,0,0,\n2,2,2,2,2,1,12,6,5,6,\n1,1,1,1,1,1,10,3,3,3'
};

game.state.start('boot');
