/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */
var level1State = {
  create: function() {
    cameraSprite = game.add.sprite(game.world.width / 2, -1000, 'level1BG');
    cameraSprite.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(cameraSprite);

    //  Add data to the cache
    game.cache.addTilemap('level1Map', null, game.global.level1TMA, Phaser.Tilemap.CSV);

    //  Create our map (the 16x16 is the tile size)
    map = game.add.tilemap('level1Map', 100, 100);

    //  'tiles' = cache image key, 16x16 = tile size
    map.addTilesetImage('tiles', 'tiles', 100, 100);

    //  0 is important
    layer = map.createLayer(0);

    //  Scroll it
    layer.resizeWorld();

    map.setCollisionBetween(1, 5, true, this.layer, true);

    blulethI = game.add.sprite(353.5, 661.5, 'planet3');
    game.physics.arcade.enable(blulethI);
    blulethI.anchor.setTo(0.5, 0.5);
    blulethI.scale.x = 3;
    blulethI.scale.y = 3;
    blulethI.smoothed = false;

    bluleth = game.add.button(353.5, 661.5, 'planet3');
    bluleth.anchor.setTo(0.5, 0.5);
    bluleth.scale.x = 3;
    bluleth.scale.y = 3;
    bluleth.smoothed = false;
    bluleth.onInputUp.add(this.blulethMove);


    game.input.mouse.capture = true;
  },

  update: function() {
    game.physics.arcade.collide(blulethI, layer);

    game.camera.follow(cameraSprite);
    cameraSprite.body.velocity.x = -60;

    bluleth.x = blulethI.x;
    bluleth.y = blulethI.y;
    // do things on the game loop
    if (game.input.activePointer.leftButton.isDown && game.global.moving == 1) {
      if (Math.abs(Math.floor((this.input.mousePointer.x + 50) / 100 - game.global.charX / 100)) + Math.abs(Math.floor((this.input.mousePointer.y + 50) / 100 - game.global.charY / 100)) < 4) {
        if (game.global.char == 'bluleth') {
          if (Math.abs(Math.floor(this.input.mousePointer.x / 100) - Math.floor(bluleth.x / 100)) > 0) {
            blulethI.body.velocity.x = (Math.floor(this.input.mousePointer.x / 100) - Math.floor(bluleth.x / 100)) * 60;
            blulethI.body.velocity.y = (Math.floor(this.input.mousePointer.y / 100) - Math.floor(bluleth.y / 100)) * 60;
            game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.characterStop, this);
            console.log('bluleth is moving');
            game.global.moving = 0;
          } else if (Math.abs(Math.floor(this.input.mousePointer.y / 100) - Math.floor(bluleth.y / 100)) > 0) {
            blulethI.body.velocity.x = (Math.floor(this.input.mousePointer.x / 100) - Math.floor(bluleth.x / 100)) * 60;
            blulethI.body.velocity.y = (Math.floor(this.input.mousePointer.y / 100) - Math.floor(bluleth.y / 100)) * 60;
            game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.characterStop, this);
            console.log('bluleth is moving');
          } else {
            console.log('you cant move to yourself');
          }
        } else {
          console.log('no character');
        }
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
    if (game.global.turn == 1 && game.global.moving == 0) {
      console.log('bluleth is about to move');
      game.global.moving = 1;
      game.global.charX = bluleth.x;
      game.global.charY = bluleth.y;
      game.global.char = 'bluleth';
    }
  },

  characterStop: function() {
    blulethI.body.velocity.x = 0;
    blulethI.body.velocity.y = 0;
    game.global.moving = 0;
    blulethI.x = Math.floor(blulethI.x / 100) * 100 + 50;
    blulethI.y = Math.floor(blulethI.y / 100) * 100 + 50;
  }
};