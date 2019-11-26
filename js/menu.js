/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
  create: function() {

    //   creates the sprite for the background of the menu
    game.add.sprite(0, 0, 'GalaxyMap');

    //   creates a button that runs the level wwhen clicked
    button1 = game.add.button(game.world.centerX - 20, game.world.centerY - 50, 'planet1');
    button1.anchor.setTo(0.5, 0.5);
    button1.scale.x = 5;
    button1.scale.y = 5;
    button1.smoothed = false;
    button1.onInputUp.add(this.startLevel1);
  },

  //   these function when you are in the right part of the story, allow you to travel to different levels
  startLevel1: function() {
    if (game.global.storyStatus == 1) {
      game.state.start('level1');
    }
  },

};