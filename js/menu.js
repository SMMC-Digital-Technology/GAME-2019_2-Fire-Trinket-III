/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
  create: function() {
    // create the scene

    game.add.sprite(0, 0, 'GalaxyMap');

    button1 = game.add.button(game.world.centerX - 343, game.world.centerY - 50, 'planet1');
    button1.anchor.setTo(0.5, 0.5);
    button1.onInputUp.add(this.startLevel1);

    button2 = game.add.button(game.world.centerX - 250, game.world.centerY, 'planet2');
    button2.anchor.setTo(0.5, 0.5);
    button2.onInputUp.add(this.startLevel2);

    button3 = game.add.button(game.world.centerX - 250, game.world.centerY, 'planet3');
    button3.anchor.setTo(0.5, 0.5);
    button3.onInputUp.add(this.startLevel3);

    button4 = game.add.button(game.world.centerX - 250, game.world.centerY, 'planet4');
    button4.anchor.setTo(0.5, 0.5);
    button4.onInputUp.add(this.startLevel4);

    button5 = game.add.button(game.world.centerX - 250, game.world.centerY, 'planet5');
    button5.anchor.setTo(0.5, 0.5);
    button5.onInputUp.add(this.startLevel5);

    //if (storyStatus > 5) {
    button6 = game.add.button(game.world.centerX - 250, game.world.centerY, 'ship1');
    button6.anchor.setTo(0.5, 0.5);
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

  startLevel1: function() {
    game.state.start('level1');
  },

  startLevel2: function() {
    game.state.start('level2');
  },

  startLevel3: function() {
    game.state.start('level3');
  },

  startLevel4: function() {
    game.state.start('level4');
  },

  startLevel5: function() {
    game.state.start('level5');
  },

  startLevel6: function() {
    game.state.start('level6');
  },

};