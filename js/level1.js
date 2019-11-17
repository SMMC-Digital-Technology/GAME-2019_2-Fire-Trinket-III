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

    alien1 = game.add.button(50, 450, "planet1");
    alien1.scale.x = 2;
    alien1.scale.y = 2;
    alien1.anchor.setTo(0.5, 0.5);
    alien1.smoothed = false;
    game.physics.arcade.enable(alien1);

    alien1Body = game.add.sprite(50, 450, "planet1");
    alien1Body.scale.x = 2;
    alien1Body.scale.y = 2;
    alien1Body.anchor.setTo(0.5, 0.5);
    alien1Body.smoothed = false;
    game.physics.arcade.enable(alien1Body);
    alien1Body.body.immovable = true;

    rpg = game.add.sprite(0, 0, 'RPGAsset');
    rpg.anchor.setTo(0.5, 0.5);
    rpg.alpha = 1;
    rpg.x = blulethI.x + 40;
    rpg.y = blulethI.y;

    rpgRocket = game.add.sprite(10, 10, 'rocketAsset');
    rpgRocket.animations.add("rocketAsset", [0, 1, 2, 3, 4], 5, true);
    rpgRocket.scale.x = 1;
    rpgRocket.scale.y = 1;
    game.physics.arcade.enable(rpgRocket);
    rpgRocket.anchor.setTo(0.5, 0.5);
    rpgRocket.alpha = 0;
    rpgRocket.animations.play('rocketAsset');

   game.input.mouse.capture = true;
  },

  update: function() {
    game.physics.arcade.collide(blulethI, layer);
    game.physics.arcade.collide(rpgRocket, alien1Body, this.hitAlien1, null, this);
    game.physics.arcade.collide(blulethI, alien1Body, this.alien1HitPlayer, null, this);

    rpg.y = bluleth.y;

    if (game.global.right_side == 1) {
      rpg.x = bluleth.x + 40;
    } else {
      rpg.x = bluleth.x - 40;
    }

    if (game.global.alien1HP == 0) {
      alien1.kill();
      alien1Body.kill();
    }

    game.camera.follow(cameraSprite);
    cameraSprite.body.velocity.x = -60;

    alien1.x = alien1Body.x;
    alien1.y = alien1Body.y;

    if (alien1.x > blulethI.x) {
      game.global.right_side = 1;
    } else {
      game.global.right_side = 0;
    }

    if (game.global.right_side == 1) {
      rpg.x = blulethI.x + 40;
      rpg.y = blulethI.y;
      bluleth.scale.x = 3;
      blulethI.scale.x = 3;
    } else {
      rpg.x = blulethI.x - 40;
      rpg.y = blulethI.y;
      bluleth.scale.x = -3;
      blulethI.scale.x = -3;
    }

    if (game.global.ammo >= 1 && alien1Body.x > 50) {
      alien1Body.body.velocity.x = -80;
    }

    if (game.global.ammo == 0 && game.global.alien1HP > 0 && game.global.alien1HP < 3) {
      alien1Body.body.velocity.x = 80;
    }

    if (alien1Body.x < 50) {
          alien1Body.body.velocity.x = 0;
    }

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
  blulethMove: function() {
    if (game.global.turn == 1 && game.global.moving == 0) {
      console.log('bluleth is about to move');
      game.global.moving = 1;
      game.global.charX = bluleth.x;
      game.global.charY = bluleth.y;
      game.global.char = 'bluleth';
    }
  },

  hitAlien1: function(rpgRocket, alien1Body) {
    game.global.alien1HP = game.global.alien1HP - 1;
    rpgRocket.alpha = 0;
    rpgRocket.x = 0;
    rpgRocket.y = 0;
    console.log("alien HP = " + game.global.alien1HP);
  },

  characterStop: function() {
    blulethI.body.velocity.x = 0;
    blulethI.body.velocity.y = 0;
    game.global.moving = 0;
    blulethI.x = Math.floor(blulethI.x / 100) * 100 + 50;
    blulethI.y = Math.floor(blulethI.y / 100) * 100 + 50;
  },

  alien1HitPlayer: function() {
    blulethI.body.velocity.x = 80;

    game.global.playerHP = game.global.playerHP - 1;
    console.log("Ouch, you've been hit!");
    console.log("PlayerHP = " + game.global.playerHP);
    game.global.ammo = game.global.ammo + 1;
    console.log("Ammo: " + game.global.ammo);
    console.log("your turn!")
  },

  attackalien1: function() {
    if (game.math.angleBetween(rpg.x, rpg.y, alien1.x, alien1.y) > -2.5) {
      rpg.scale.y = -1;
      console.log("flipppp");
    } else {
      rpg.scale.y = 1;
      console.log("flipppp2");
    }
    blulethI.body.velocity.x = 0;
    blulethI.body.velocity.y = 0;
    rpg.rotation = game.math.angleBetween(rpg.x, rpg.y, alien1.x, alien1.y);
        if (Math.abs(Math.floor(alien1.x / 100) - Math.floor(bluleth.x / 100)) + Math.abs(Math.floor(alien1.y / 100) - Math.floor(bluleth.y / 100)) < 4) {
          console.log('Bluleth Is Attacking Alien 1');
          if (game.global.ammo >= 1) {
            game.global.ammo = game.global.ammo - 1;
            rpgRocket.x = rpg.x;
            rpgRocket.y = rpg.y;
            rpgRocket.rotation = game.math.angleBetween(rpgRocket.x, rpgRocket.y, alien1.x, alien1.y);
            rpgRocket.alpha = 1;
            rpg.alpha = 1;
          rpgRocket.body.velocity.x = (Math.floor(alien1.x / 100) - Math.floor(rpg.x / 100)) * 60;
          rpgRocket.body.velocity.y = (Math.floor(alien1.y / 100) - Math.floor(rpg.y / 100)) * 60;
        } else {
          console.log("Not enough ammo boomer");
          console.log(game.global.ammo);
        }
      }
  }

};
