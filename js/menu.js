/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
  create: function() {

    //   creates the sprite for the background of the menu
    game.add.sprite(0, 0, 'GalaxyMap');

    //   creates 6 buttons, one ofor each level that run a function when clicked.
    button1 = game.add.button(game.world.centerX - 343, game.world.centerY - 50, 'planet1');
    button1.anchor.setTo(0.5, 0.5);
    button1.scale.x = 2;
    button1.scale.y = 2;
    button1.smoothed = false;
    button1.onInputUp.add(this.startLevel1);

    button2 = game.add.button(game.world.centerX - 230, game.world.centerY - 50, 'planet2');
    button2.anchor.setTo(0.5, 0.5);
    button2.scale.x = 2;
    button2.scale.y = 2;
    button2.smoothed = false;
    button2.onInputUp.add(this.startLevel2);

    button3 = game.add.button(game.world.centerX - 138, game.world.centerY - 50, 'planet3');
    button3.anchor.setTo(0.5, 0.5);
    button3.scale.x = 2;
    button3.scale.y = 2;
    button3.smoothed = false;
    button3.onInputUp.add(this.startLevel3);

    button4 = game.add.button(game.world.centerX - 10, game.world.centerY - 50, 'planet4');
    button4.anchor.setTo(0.5, 0.5);
    button4.scale.x = 2;
    button4.scale.y = 2;
    button4.smoothed = false;
    button4.onInputUp.add(this.startLevel4);

    button5 = game.add.button(game.world.centerX + 130, game.world.centerY - 50, 'planet5');
    button5.anchor.setTo(0.5, 0.5);
    button5.scale.x = 2;
    button5.scale.y = 2;
    button5.smoothed = false;
    button5.onInputUp.add(this.startLevel5);

    //if (storyStatus > 5) {
    button6 = game.add.button(game.world.centerX + 300, game.world.centerY - 50, 'ship1');
    button6.anchor.setTo(0.5, 0.5);
    button6.scale.x = 2;
    button6.scale.y = 2;
    button6.smoothed = false;
    button6.onInputUp.add(this.startLevel6);
    //}
  },

  // this is how you write a function
  // note the comma after the } above
  // see that variables go in the brackets still
  // to use this function in collision detection, write this.exampleFunction
  // to call it manually, write this.exampleFunction(1, 2)
  exampleFunction: function(something, somethingElse) {

  },

  //   these function when you are in the right part of the story, allow you to travel to different levels
  startLevel1: function() {
    if (game.global.storyStatus == 1) {
      game.state.start('level1');
    }
  },

  startLevel2: function() {
    if (game.global.storyStatus == 2) {
      game.state.start('level2');
    }
  },

  startLevel3: function() {
    if (game.global.storyStatus == 3) {
      game.state.start('level3');
    }
  },

  startLevel4: function() {
    if (game.global.storyStatus == 4) {
      game.state.start('level4');
    }
  },

  startLevel5: function() {
    if (game.global.storyStatus == 5) {
      game.state.start('level5');
    }
  },

  startLevel6: function() {
    if (game.global.storyStatus == 6) {
      game.state.start('level6');
    }
  },

};