/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */
var level1State = {

    create: function() {
      cameraSprite = game.add.sprite(game.world.width / 2, -1000, 'planet3');
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

      map.setCollisionBetween(4, 5, true, this.layer, true);

      wallA1 = game.add.sprite(200, 0, 'wall');
      wallA2 = game.add.sprite(600, 300, 'wall');
      terminalA = game.add.sprite(0, 300, 'wall');

      wallB = game.add.sprite(800, 1000, 'wall');
      terminalB = game.add.sprite(1000, 900, 'wall');

      blulethI = game.add.sprite(350, 650, 'planet3');
      game.physics.arcade.enable(blulethI);
      blulethI.anchor.setTo(0.5, 0.5);
      blulethI.scale.x = 3;
      blulethI.scale.y = 3;
      blulethI.smoothed = false;

      bluleth = game.add.button(354, 662, 'planet3');
      bluleth.anchor.setTo(0.5, 0.5);
      bluleth.scale.x = 3;
      bluleth.scale.y = 3;
      bluleth.smoothed = false;
      bluleth.onInputUp.add(this.blulethMove);

      game.input.mouse.capture = true;
    },

    update: function() {
      rpg.angle += 1;

      rpg.x = bluleth.x;
      rpg.y = bluleth.y;

      if (game.global.alien1HP == 0) {
        alien1.kill();
      }

      game.physics.arcade.collide(blulethI, layer);

      game.physics.arcade.overlap(blulethI, terminalA, this.terminalAActivate, null, this);
      game.physics.arcade.overlap(blulethI, terminalB, this.terminalBActivate, null, this);

      if (game.global.wallA == 0) {
        game.physics.arcade.overlap(blulethI, wallA1);
        game.physics.arcade.overlap(blulethI, wallA2);
      }
      if (game.global.wallB == 1) {
        game.physics.arcade.overlap(blulethI, wallB);
      }

      game.camera.follow(cameraSprite);
      cameraSprite.body.velocity.x = -60;

      bluleth.x = blulethI.x;
      bluleth.y = blulethI.y;

      // do things on the game loop
      if (game.input.activePointer.leftButton.isDown && game.global.moving == 1) {
        if (Math.abs(Math.floor((this.input.mousePointer.x + 50) / 100 - game.global.charX / 100)) + Math.abs(Math.floor((this.input.mousePointer.y + 50) / 100 - game.global.charY / 100)) < 4) {
          if (game.global.char == 'bluleth') {
            alien1.onInputUp.add(this.attackalien1);
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

    interaction: function(blulethI, layer2) {
      console.log("oh lol it works");
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
    },

    terminalAActivate: function(blulethI, terminalA) {
      game.global.wallA = 1;
    },

    terminalBActivate: function(blulethI, terminalB) {
      game.global.wallB = 1;

      attackalien1: function() {
        rpgRocket.x = rpg.x;
        rpgRocket.y = rpg.y;
        rpgRocket.rotation = game.math.angleBetween(rpgRocket.x, rpgRocket.y, alien1.x, alien1.y);
        //rpgRocket.angle = (Math.floor(bluleth.x / 100) - Math.floor(alien1.x / 100)) - (Math.floor(bluleth.y / 100) - Math.floor()) * 360;
        game.global.alien1HP = game.global.alien1HP - 1;
        blulethI.body.velocity.x = 0;
        blulethI.body.velocity.y = 0;
        rpgRocket.alpha = 1;
        rpg.x = blulethI.x;
        rpg.y = blulethI.y;
        console.log(game.global.alien1HP);
        rpg.alpha = 1;
        console.log(Math.floor(alien1.x / 100) - Math.floor(bluleth.x / 100));
        if (Math.abs(Math.floor(alien1.x / 100) - Math.floor(bluleth.x / 100)) + Math.abs(Math.floor(alien1.y / 100) - Math.floor(bluleth.y / 100)) < 4) {
          console.log('Bluleth Is Attacking Alien 1');
          rpgRocket.body.velocity.x = (Math.floor(alien1.x / 100) - Math.floor(rpg.x / 100)) * 60;
          rpgRocket.body.velocity.y = (Math.floor(alien1.y / 100) - Math.floor(rpg.y / 100)) * 60;
        }
      }

    };