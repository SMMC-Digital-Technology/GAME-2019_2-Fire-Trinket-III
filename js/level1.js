/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */
var level1State = {

  create: function() {

    game.world.setBounds(0, 0, 1000, 1400);

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
    blulethI = game.add.sprite(350, 1050, 'planet3');
    game.physics.arcade.enable(blulethI);
    blulethI.anchor.setTo(0.5, 0.5);
    blulethI.scale.x = 2;
    blulethI.scale.y = 2;
    blulethI.smoothed = false;

    //   creates the button which the player will click on to control
    bluleth = game.add.button(350, 650, 'planet3');
    bluleth.anchor.setTo(0.5, 0.5);
    bluleth.alpha = 0;
    bluleth.scale.x = 4;
    bluleth.scale.y = 4;
    bluleth.smoothed = false;
    bluleth.onInputUp.add(this.blulethMove);


    //   creates an enemy with physics
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

    cameraSprite = game.add.sprite(200, 400, 'wall');
    cameraSprite.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(cameraSprite);
    //   creates an invisible sprite which the camera will follow

    playerHP = game.add.sprite(blulethI.x, (blulethI.y - 20), 'playerHPSprite');
    playerHP.anchor.setTo(0.5, 0.5);

    playerHP.animations.add("playerHP1Sprite", [6], 1, true);
    playerHP.animations.add("playerHP2Sprite", [5], 1, true);
    playerHP.animations.add("playerHP3Sprite", [4], 1, true);
    playerHP.animations.add("playerHP4Sprite", [3], 1, true);
    playerHP.animations.add("playerHP5Sprite", [3], 1, true);
    playerHP.animations.add("playerHP6Sprite", [1], 1, true);
    playerHP.animations.add("playerHP7Sprite", [0], 1, true);
  },

  update: function() {
    playerHP.x = blulethI.x;
    playerHP.y = blulethI.y - 50;
    playerHP.scale.x = 0.7;
    playerHP.scale.y = 0.5;

    if (game.global.playerHP == 7) {
      playerHP.animations.play("playerHP7Sprite")
    } else if (game.global.playerHP == 6) {
      playerHP.animations.play("playerHP6Sprite")
    } else if (game.global.playerHP == 5) {
      playerHP.animations.play("playerHP5Sprite")
    } else if (game.global.playerHP == 4) {
      playerHP.animations.play("playerHP4Sprite")
    } else if (game.global.playerHP == 3) {
      playerHP.animations.play("playerHP3Sprite")
    } else if (game.global.playerHP == 2) {
      playerHP.animations.play("playerHP2Sprite")
    } else if (game.global.playerHP == 1) {
      playerHP.animations.play("playerHP1Sprite")
    }


    game.physics.arcade.collide(blulethI, layer);
    game.physics.arcade.collide(rpgRocket, alien1Body, this.hitAlien1, null, this);
    game.physics.arcade.collide(blulethI, alien1Body, this.alien1HitPlayer, null, this);

    console.log(game.global.charX + "X");
    console.log(game.global.charY + 'Y');

    //   makes sure the camera can scroll with the camera sprite
    game.camera.follow(cameraSprite);

    //   makes sure the rpg is always in bluleths hands
    rpg.x = bluleth.x;
    rpg.y = bluleth.y;

    //   makes bluleth not able to walk through walls
    game.physics.arcade.collide(blulethI, layer);
    game.physics.arcade.collide(rpgRocket, layer, this.attackFail, null, this);

    //   runs a function when the alien is hit
    game.physics.arcade.collide(rpgRocket, alien1Body, this.hitAlien1, null, this);

    //   makes the rpg on the correct side of bluleth
    if (game.global.right_side == 1) {
      rpg.x = bluleth.x + 40;
    } else {
      rpg.x = bluleth.x - 40;
    }

    //   removes the doors when you overlap the terminals
    game.physics.arcade.overlap(blulethI, terminalA, this.terminalAActivate, null, this);
    game.physics.arcade.overlap(blulethI, terminalB, this.terminalBActivate, null, this);

    //   makes sure you can't walk through walls when the terminals haven't been activated
    game.physics.arcade.overlap(blulethI, wallA1, this.wallABlock, null, this);
    game.physics.arcade.overlap(blulethI, wallA2, this.wallABlock, null, this);

    game.physics.arcade.collide(blulethI, wallB, this.wallBBlock, null, this);

    if (game.global.alien1HP == 0) {
      alien1.kill();
      alien1Body.kill();
      game.global.turn = 1;
    }

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

    bluleth.x = blulethI.x;
    bluleth.y = blulethI.y;


    if (game.global.turn == 0) {
      if (game.global.ammo > 0 && alien1Body.x > 60) {
        alien1Body.body.velocity.x = -80;
      }

      if (game.global.ammo == 0 && game.global.alien1HP > 0) {
        alien1Body.body.velocity.x = 80;
      }

      if (alien1Body.x < 50) {
            alien1Body.body.velocity.x = 0;
            alien1Body.x = alien1Body.x + 5;
            game.global.turn = 1;
      }
    }

    if (game.global.ammo == 0) {
      game.global.turn = 0;
    }

    if (game.global.turn == 1) {
      game.global.ammo = 1;
    }

    if (game.input.activePointer.leftButton.isDown && game.global.moving == 1) {
      console.log(this.input.activePointer.x + "x");
      console.log(this.input.activePointer.y + "y");
      if (Math.abs(Math.floor((this.input.mousePointer.x + 50) / 100 - blulethI.x / 100)) + Math.abs(Math.floor((this.input.mousePointer.y + game.global.charY + 50) / 100 - blulethI.y / 100)) < 4) {
        if (game.global.char == 'bluleth') {
          alien1.onInputUp.add(this.attackalien1);
          if (Math.abs(Math.floor(this.input.mousePointer.x / 100) - Math.floor(blulethI.x / 100)) > 0) {
            blulethI.body.velocity.x = (Math.floor(this.input.mousePointer.x / 100) - Math.floor(blulethI.x / 100)) * 60;
            blulethI.body.velocity.y = (Math.floor((this.input.mousePointer.y + game.global.charY) / 100) - Math.floor(blulethI.y / 100)) * 60;
            game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.characterStop, this);
            console.log('bluleth is moving');
            game.global.moving = 0;
          } else if (Math.abs(Math.floor((this.input.mousePointer.y + game.global.charY) / 100) - Math.floor(blulethI.y / 100)) > 0) {
            blulethI.body.velocity.x = (Math.floor(this.input.mousePointer.x / 100) - Math.floor(blulethI.x / 100)) * 60;
            blulethI.body.velocity.y = (Math.floor((this.input.mousePointer.y + game.global.charY) / 100) - Math.floor(blulethI.y / 100)) * 60;
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

    if (game.input.mousePointer.y > 650 && cameraSprite.y < 800) {
      cameraSprite.body.velocity.y = (this.input.mousePointer.y - 650);
      game.global.charY += cameraSprite.body.velocity.y / 60;
    } else if (game.input.mousePointer.y < 150 && cameraSprite.y > 400) {
      cameraSprite.body.velocity.y = (this.input.mousePointer.y - 150);
      game.global.charY += cameraSprite.body.velocity.y / 60;
    } else {
      cameraSprite.body.velocity.y = 0;
    }
  },

  render: function() {
    //   comment this to remove camera debug info
    game.debug.cameraInfo(game.camera, 32, 32);

    game.debug.spriteInfo(terminalA, 32, 600);

    game.debug.pointer(game.input.mousePointer);
  },

  // this is how you write a function
  // note the comma after the } above
  // see that variables go in the brackets still
  // to use this function in collision detection, write this.exampleFunction
  // to call it manually, write this.exampleFunction(1, 2)
  exampleFunction: function(something, somethingElse) {

  },


  blulethMove: function() {
    //   This function runs when bluleth movves
    if (game.global.turn == 1 && game.global.moving == 0) {
      console.log('bluleth is about to move');
      game.global.moving = 1;
      game.global.char = 'bluleth';
    }
  },

  attackFail: function(rpgRocket, layer) {
    rpgRocket.alpha = 0;
    rpgRocket.x = -100;
    rpgRocket.y = -100;
  },

  hitAlien1: function(rpgRocket, alien1Body) {
    //   This is what happens when the alien is hit with the rocket
    game.global.alien1HP = game.global.alien1HP - 1;
    rpgRocket.alpha = 0;
    rpgRocket.x = -100;
    rpgRocket.y = -100;
    console.log("alien HP = " + game.global.alien1HP);

    game.global.turn = 0;
    console.log("their turn!!")
    game.global.ammo = 0;

    if (game.global.alien1HP == 0) {
      alien1.kill();
      game.global.turn = 1;
      game.global.ammo = 1;
    }
  },

  characterStop: function() {
    //   This stops the characters velocity after they move
    blulethI.body.velocity.x = 0;
    blulethI.body.velocity.y = 0;
    game.global.moving = 0;
    blulethI.x = Math.floor(blulethI.x / 100) * 100 + 50;
    blulethI.y = Math.floor(blulethI.y / 100) * 100 + 50;
    if (game.global.storyStatus == 2) {
      game.global.storyStatus = 3;
    }
  },

  alien1HitPlayer: function() {
    blulethI.body.velocity.x = 0;

    game.global.playerHP = game.global.playerHP - 1;
    console.log("Ouch, you've been hit!");
    console.log("PlayerHP = " + game.global.playerHP);
    game.global.ammo = game.global.ammo + 1;
    console.log("Ammo: " + game.global.ammo);
    console.log("your turn!")
  },



  terminalAActivate: function(blulethI, terminalA) {
    //   this changes a variable when Bluleth touches the terminals
    game.global.wallA = 1;
    console.log(game.global.wallA);
  },

  terminalBActivate: function(blulethI, terminalB) {
    if (game.global.wallB == 0) {
      game.global.wallB = 1;
      console.log(game.global.wallB);
    }
  },

  wallABlock: function(blulethI, wallA1) {
    //   This forces the closed doors to act as walls
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

  attackalien1: function() {
    //   This points the rpg towards the alien
    console.log(game.math.angleBetween(rpg.x, rpg.y, alien1.x, alien1.y) > -2.5);
    if (game.math.angleBetween(rpg.x, rpg.y, alien1.x, alien1.y) > -2.5) {
      rpg.scale.y = -1;
      console.log("flipppp");
    } else {
      rpg.scale.y = 1;
      console.log("flipppp2");
    }
    blulethI.body.velocity.x = 0;
    blulethI.body.velocity.y = 0;
    rpgRocket.alpha = 1;

    console.log(Math.floor(alien1.x / 100) - Math.floor(bluleth.x / 100));
    rpg.rotation = game.math.angleBetween(rpg.x, rpg.y, alien1.x, alien1.y);
    if (Math.abs(Math.floor(alien1.x / 100) - Math.floor(bluleth.x / 100)) + Math.abs(Math.floor(alien1.y / 100) - Math.floor(bluleth.y / 100)) < 4) {
      console.log('Bluleth Is Attacking Alien 1');
      if (game.global.ammo == 1) {
        rpgRocket.x = rpg.x;
        rpgRocket.y = rpg.y;
        rpgRocket.rotation = game.math.angleBetween(rpgRocket.x, rpgRocket.y, alien1.x, alien1.y);
        rpgRocket.alpha = 1;
        rpg.alpha = 1;
        rpgRocket.body.velocity.x = (Math.floor(alien1.x / 100) - Math.floor(rpg.x / 100)) * 60;
        rpgRocket.body.velocity.y = (Math.floor(alien1.y / 100) - Math.floor(rpg.y / 100)) * 60;
      } else {
        console.log("Not enough ammo boomer");
      }
    }
  }
};
