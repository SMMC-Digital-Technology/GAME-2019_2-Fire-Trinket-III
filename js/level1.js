/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */
var level1State = {
  create: function() {
    game.add.sprite(0, -400, 'level1BG');

    bluleth = game.add.button(353.5, 661.5, 'planet3');
    bluleth.anchor.setTo(0.5, 0.5);
    bluleth.scale.x = 3;
    bluleth.scale.y = 3;
    bluleth.smoothed = false;
    bluleth.onInputUp.add(this.blulethMove);

    game.input.mouse.capture = true;
  },

  update: function() {
    // do things on the game loop
    if (game.input.activePointer.leftButton.isDown && game.global.movingBluleth == 1) {
      if (Math.abs(Math.floor((this.input.mousePointer.x + 50) / 100 - bluleth.x / 100)) + Math.abs(Math.floor((this.input.mousePointer.y + 50) / 100 - bluleth.y / 100)) < 4) {
        bluleth.x = Math.round((this.input.mousePointer.x - 50) / 101) * 101 + 50;
        bluleth.y = Math.round((this.input.mousePointer.y - 50) / 101) * 101 + 50;
        console.log('bluleth is moving');
        game.global.movingBluleth = 0;
      } else {
        console.log('bluleth attempted to move');
      }
    }
  },

  // this is how you write a function
  // note the comma after the } above
  // see that variables go in the brackets still
  // to use this function in collision detection, write this.exampleFunction
  // to call it manually, write this.exampleFunction(1, 2)
  exampleFunction: function(something, somethingElse) {

  },
  blulethMove: function() {
    if (game.global.turn == 1 && game.global.movingBluleth == 0) {
      console.log('bluleth is about to move');
      game.global.movingBluleth = 1;
    }
  }

};