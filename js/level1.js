/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */
var level1State = {

  create: function() {
    cameraSprite = game.add.sprite(game.world.width / 2, -1000, 'wall');
    cameraSprite.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(cameraSprite);
    //   creates an invisible sprite which the camera will follow


    game.cache.addTilemap('level1Map', null, game.global.level1TMA, Phaser.Tilemap.CSV);

    //   creates a tilemap from the asset which was added in the line above 100 is the width and height of each tile
    map = game.add.tilemap('level1Map', 100, 100);

    //   tells the game to use the 'tile' spritesheet for the tilemap
    map.addTilesetImage('tiles', 'tiles', 100, 100);

    layer = map.createLayer(0);

    layer.resizeWorld();

    //   creates collision for parts of the spritesheep on the tilemap
    map.setCollisionBetween(6, 12, true, this.layer, true);


    //   creates the first set of doors (blue) and it's terminal
    wallA1 = game.add.sprite(198, 0, 'wall');
    wallA2 = game.add.sprite(598, 100, 'wall');
    terminalA = game.add.sprite(0, 300, 'wall');

    //   creates the physics for the doors and for the terminal and stops them from moving
    game.physics.arcade.enable(wallA1);
    wallA1.body.immovable = true;
    game.physics.arcade.enable(wallA2);
    wallA2.body.immovable = true;

    game.physics.arcade.enable(terminalA);
    terminalA.body.immovable = true;

    //   creates the red doors and terminals
    wallB = game.add.sprite(800, 1000, 'wall');
    terminalB = game.add.sprite(1000, 900, 'wall');

    game.physics.arcade.enable(wallB);
    wallB.body.immovable = true;

    game.physics.arcade.enable(terminalB);
    terminalB.body.immovable = true;


    //   creats a sprite which has a body
    blulethI = game.add.sprite(350, 650, 'planet3');
    game.physics.arcade.enable(blulethI);
    blulethI.anchor.setTo(0.5, 0.5);
    blulethI.scale.x = 2;
    blulethI.scale.y = 2;
    blulethI.smoothed = false;

    //   creates the button which the player will click on to control
    bluleth = game.add.button(354, 662, 'planet3');
    bluleth.anchor.setTo(0.5, 0.5);
    bluleth.scale.x = 2;
    bluleth.scale.y = 2;
    bluleth.smoothed = false;
    bluleth.onInputUp.add(this.blulethMove);


    //   creates an enemy with physics
    alien1 = game.add.button(50, 450, "planet1");
    alien1.anchor.setTo(0.5, 0.5);
    alien1.smoothed = false;
    game.physics.arcade.enable(alien1);


    //   creates a weapon
    rpg = game.add.sprite(0, 0, 'RPGAsset');
    rpg.alpha = 1;
    rpg.x = blulethI.x + 50;
    rpg.y = blulethI.y;

    //   creates the rocket which fires out of the weapon from a spritesheet and gives it physics
    rpgRocket = game.add.sprite(10, 10, 'rocketAsset');
    rpgRocket.animations.add("rocketAsset", [0, 1, 2, 3, 4], 5, true);
    rpgRocket.scale.x = 1;
    rpgRocket.scale.y = 1;
    game.physics.arcade.enable(rpgRocket);
    rpgRocket.anchor.setTo(0.5, 0.5);
    rpgRocket.alpha = 0;

    rpgRocket.animations.play('rocketAsset');

    //   allows us to use the mouse to control the character
    game.input.mouse.capture = true;
  },

  update: function() {

    //   makes sure the rpg is always in bluleths hands
    rpg.x = bluleth.x;
    rpg.y = bluleth.y;

    //   makes bluleth not able to walk through walls
    game.physics.arcade.collide(blulethI, layer);

    //   removes the doors when you overlap the terminals
    game.physics.arcade.overlap(blulethI, terminalA, this.terminalAActivate, null, this);
    game.physics.arcade.overlap(blulethI, terminalB, this.terminalBActivate, null, this);

    //   makes sure you can't walk through walls when the terminals haven't been activated
    game.physics.arcade.collide(blulethI, wallA1, this.wallABlock, null, this);
    game.physics.arcade.collide(blulethI, wallA2, this.wallABlock, null, this);

    game.physics.arcade.collide(blulethI, wallB, this.wallBBlock, null, this);

    //   makes sure the camera can scroll with the camera sprite
    game.camera.follow(cameraSprite);

    //   makes sure the button you click on always follow the body that has physics
    bluleth.x = blulethI.x;
    bluleth.y = blulethI.y;

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
    if (game.global.wallA == 0) {
      game.global.wallA = 1;
      console.log(game.global.wallA);
    }
  },

  terminalBActivate: function(blulethI, terminalB) {
    if (game.global.wallB == 0) {
      game.global.wallB = 1;
      console.log(game.global.wallB);
    }
  },

  wallABlock: function(blulethI, wallA1) {
    if (game.global.wallA == 0) {
      blulethI.body.velocity.x = 0;
      blulethI.body.velocity.y = 0;
      console.log('Wall A Collision');
      console.log('Door A is Closed' + game.global.wallA);
    }
  },

  wallBBlock: function(blulethI, wallB) {
    if (game.global.wallB == 0) {
      blulethI.body.velocity.x = 0;
      blulethI.body.velocity.y = 0;
      console.log('Wall B Collision');
      console.log('Door B is Closed' + game.global.wallB);
    }
  },

  alienDeath: function() {
    if (game.global.alien1HP == 0) {
      alien1.kill();
    }
  },

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
      game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.alienDeath, this);
    }
  }

};