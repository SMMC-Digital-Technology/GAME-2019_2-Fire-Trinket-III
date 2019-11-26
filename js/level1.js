1000
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
    terminalB = game.add.sprite(900, 800, 'wall');

    game.physics.arcade.enable(wallB);
    wallB.body.immovable = true;

    game.physics.arcade.enable(terminalB);
    terminalB.body.immovable = true;


    //   creats a sprite which has a body
    blulethI = game.add.sprite(350, 1050, 'Bluleth');
    game.physics.arcade.enable(blulethI);
    blulethI.anchor.setTo(0.5, 0.5);
    blulethI.scale.x = 1;
    blulethI.scale.x = 1;
    blulethI.smoothed = false;
    blulethI.body.immovable = true;

    blulethI.animations.add("Stand", [0], 1, true);
    blulethI.animations.add("walkRight", [1,2,3], 10, true);
    blulethI.animations.add("walkLeft", [4,5,6], 10, true);


    endTile = game.add.sprite(700, 1100, "wall");
    game.physics.arcade.enable(endTile);
    endTile.scale.x = 3;

    endTile = game.add.sprite(700, 1100, "wall");
    game.physics.arcade.enable(endTile);
    endTile.scale.x = 3;

    //   creates the button which the player will click on to control
    bluleth = game.add.button(350, 650, 'Bluleth');
    bluleth.anchor.setTo(0.5, 0.5);
    bluleth.alpha = 0;
    bluleth.scale.x = 1;
    bluleth.scale.y = 1;
    bluleth.smoothed = false;
    bluleth.onInputUp.add(this.blulethMove);

    //   creates 3 invisible sprites which help with movement around corners
    blulethMove1 = game.add.sprite(350, 1050, 'moveTool');
    game.physics.arcade.enable(blulethMove1);
    blulethMove1.anchor.setTo(0.5, 0.5);
    blulethMove1.scale.x = 2;
    blulethMove1.scale.y = 2;

    blulethMove2 = game.add.sprite(350, 1050, 'moveTool');
    game.physics.arcade.enable(blulethMove2);
    blulethMove2.anchor.setTo(0.5, 0.5);
    blulethMove2.scale.x = 2;
    blulethMove2.scale.y = 2;

    //creates allies to save and become part of your team

    //   creates an enemy with physics
    alien1 = game.add.button(50, 725, "Alien");
    alien1.scale.x = 1;
    alien1.scale.y = 1;
    alien1.anchor.setTo(0.5, 0.5);
    alien1.smoothed = false;
    game.physics.arcade.enable(alien1);

    alien1Body = game.add.sprite(50, 725, "Alien");
    alien1Body.scale.x = 1;
    alien1Body.scale.y = 1;
    alien1Body.anchor.setTo(0.5, 0.5);
    alien1Body.smoothed = false;
    game.physics.arcade.enable(alien1Body);
    alien1Body.body.immovable = true;

    alienMove1 = game.add.sprite(-1000, -1000, 'moveTool');
    game.physics.arcade.enable(alienMove1);

    alienMove2 = game.add.sprite(-1000, -1000, 'moveTool');
    game.physics.arcade.enable(alienMove2);

    alien2 = game.add.button(450, 125, "Alien");
    alien2.scale.x = 1;
    alien2.scale.y = 1;
    alien2.anchor.setTo(0.5, 0.5);
    alien2.smoothed = false;
    game.physics.arcade.enable(alien2);

    alien2Body = game.add.sprite(450, 125, "Alien");
    alien2Body.scale.x = 1;
    alien2Body.scale.y = 1;
    alien2Body.anchor.setTo(0.5, 0.5);
    alien2Body.smoothed = false;
    game.physics.arcade.enable(alien2Body);
    alien2Body.body.immovable = true;

    alien3 = game.add.button(250, 425, "Alien");
    alien3.scale.x = 1;
    alien3.scale.y = 1;
    alien3.anchor.setTo(0.5, 0.5);
    alien3.smoothed = false;
    game.physics.arcade.enable(alien3);

    alien3Body = game.add.sprite(250, 425, "Alien");
    alien3Body.scale.x = 1;
    alien3Body.scale.y = 1;
    alien3Body.anchor.setTo(0.5, 0.5);
    alien3Body.smoothed = false;
    game.physics.arcade.enable(alien3Body);
    alien3Body.body.immovable = true;

    alien4 = game.add.button(750, 325, "Alien");
    alien4.scale.x = 1;
    alien4.scale.y = 1;
    alien4.anchor.setTo(0.5, 0.5);
    alien4.smoothed = false;
    game.physics.arcade.enable(alien4);

    alien4Body = game.add.sprite(750, 325, "Alien");
    alien4Body.scale.x = 1;
    alien4Body.scale.y = 1;
    alien4Body.anchor.setTo(0.5, 0.5);
    alien4Body.smoothed = false;
    game.physics.arcade.enable(alien4Body);
    alien4Body.body.immovable = true;


    alien2 = game.add.button(450, 125, "Alien");
    alien2.scale.x = 1;
    alien2.scale.y = 1;
    alien2.anchor.setTo(0.5, 0.5);
    alien2.smoothed = false;
    game.physics.arcade.enable(alien2);

    alien2Body = game.add.sprite(450, 125, "Alien");
    alien2Body.scale.x = 1;
    alien2Body.scale.y = 1;
    alien2Body.anchor.setTo(0.5, 0.5);
    alien2Body.smoothed = false;
    game.physics.arcade.enable(alien2Body);
    alien2Body.body.immovable = true;

    alien3 = game.add.button(250, 425, "Alien");
    alien3.scale.x = 1;
    alien3.scale.y = 1;
    alien3.anchor.setTo(0.5, 0.5);
    alien3.smoothed = false;
    game.physics.arcade.enable(alien3);

    alien3Body = game.add.sprite(250, 425, "Alien");
    alien3Body.scale.x = 1;
    alien3Body.scale.y = 1;
    alien3Body.anchor.setTo(0.5, 0.5);
    alien3Body.smoothed = false;
    game.physics.arcade.enable(alien3Body);
    alien3Body.body.immovable = true;

    alien4 = game.add.button(750, 325, "Alien");
    alien4.scale.x = 1;
    alien4.scale.y = 1;
    alien4.anchor.setTo(0.5, 0.5);
    alien4.smoothed = false;
    game.physics.arcade.enable(alien4);

    alien4Body = game.add.sprite(750, 325, "Alien");
    alien4Body.scale.x = 1;
    alien4Body.scale.y = 1;
    alien4Body.anchor.setTo(0.5, 0.5);
    alien4Body.smoothed = false;
    game.physics.arcade.enable(alien4Body);
    alien4Body.body.immovable = true;


    rpg = game.add.sprite(0, 0, 'RPGAsset');
    rpg.anchor.setTo(0.5, 0.5);
    rpg.alpha = 1;
    rpg.scale.x = 0.8;
    rpg.scale.y = 0.8;
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
    playerHP.animations.add("playerHP5Sprite", [2], 1, true);
    playerHP.animations.add("playerHP6Sprite", [1], 1, true);
    playerHP.animations.add("playerHP7Sprite", [0], 1, true);

    tutorialScroll = game.add.text(150, 700, "Move Cursor up or down to scroll", {fill :  'white'});
    tutorialMove = game.add.text(0, 700, "Click on your charactor and then a tile to move there.\nit must be within 3 tiles of your origin, including walking distance around cornors.", {fill :  'white'});
    tutorialMove.alpha = 0;
    tutorialFight = game.add.text(0, 700, "when walking into a radius of ememies they will attack you,\ncan can then attack them by clicking on your character and then the enemie.", {fill :  'white'});
    tutorialFight.alpha = 0;
  },

  update: function() {

    //makes tutorial of some kind



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
    game.physics.arcade.collide(blulethI, endTile, this.WinIThink, null, this);
    //game.physics.arcade.collide(blulethI, endTile, this.WinHalf, null, this);
    //game.physics.arcade.collide(blulethI, endTile, this.WinFull, null, this);

    game.physics.arcade.collide(blulethMove1, layer);
    game.physics.arcade.collide(blulethMove2, layer);

    game.physics.arcade.collide(blulethMove1, alien1Body);
    game.physics.arcade.collide(blulethMove2, alien1Body);

    //   makes sure the camera can scroll with the camera sprite
    game.camera.follow(cameraSprite);

    if (game.global.dummyVar == 0) {
      cameraSprite.y = 800;
      game.global.dummyVar = 1;
    }

    //   makes sure the rpg is always in bluleths hands
    rpg.x = bluleth.x;
    rpg.y = bluleth.y;

    //   makes bluleth not able to walk through walls
    game.physics.arcade.collide(blulethI, layer);
    game.physics.arcade.collide(rpgRocket, layer, this.attackFail, null, this);

    game.physics.arcade.collide(alienMove1, layer);
    game.physics.arcade.collide(alienMove2, layer);

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

    game.physics.arcade.overlap(blulethI, wallB, this.wallBBlock, null, this);

    if (game.global.alien1HP == 0) {
      alien1.kill();
      alien1Body.kill();
      game.global.turn = 1;
    }

    if (blulethI.body.velocity.x < 0) {
      blulethI.animations.play("walkRight");
    } else if (blulethI.body.velocity.x > 0) {
        blulethI.animations.play("walkLeft");
    } else {
      blulethI.animations.play("Stand");
    }

    alien1.x = alien1Body.x;
    alien1.y = alien1Body.y;

    alien2.x = alien2Body.x;
    alien2.y = alien2Body.y;

    alien3.x = alien3Body.x;
    alien3.y = alien3Body.y;

    alien4.x = alien4Body.x;
    alien4.y = alien4Body.y;

    if (alien1.x > blulethI.x) {
      game.global.right_side = 1;
    } else {
      game.global.right_side = 0;
    }

    if (game.global.right_side == 1) {
      rpg.x = blulethI.x + 40;
      rpg.y = blulethI.y;
      bluleth.scale.x = 1;
      blulethI.scale.x = 1;
    } else {
      rpg.x = blulethI.x - 40;
      rpg.y = blulethI.y;
      bluleth.scale.x = -1;
      blulethI.scale.x = -1;
    }

    bluleth.x = blulethI.x;
    bluleth.y = blulethI.y;

    if (game.global.playerHP == 0) {
      game.state.start('gameover');
    }


    if (game.global.turn == 0) {
      if (game.global.alien1Moved == 1) {
        console.log('dubugging');
        alienMove1.x = alien1.x;
        alienMove1.y = alien1.y;

        alienMove2.x = alien1.x;
        alienMove2.y = alien1.y;

        game.global.alien1Moved = 0;

        if (Math.abs(Math.floor(alien1.x / 100) - Math.floor(blulethI.x / 100)) + Math.abs(Math.floor(alien1.y / 100) - Math.floor(blulethI.y / 100)) < 4) {
          alienMove1.body.velocity.x = (Math.floor(blulethI.x / 100) - Math.floor(alien1.x / 100)) * 120;
          alienMove2.body.velocity.y = (Math.floor(blulethI.y / 100) - Math.floor(alien1.y / 100)) * 120;

          game.time.events.add(Phaser.Timer.SECOND * (5 / 6), this.alienMovement1, this);
        }
      } else {
        game.global.turn = 1;
      }
    }

    if (game.global.turn == 0) {
      game.global.ammo = 0;
    }

    if (game.global.turn == 1) {
      game.global.ammo = 1;
    }

    if (game.input.activePointer.leftButton.isDown && game.global.moving == 1 && game.global.turn == 1) {
      if (Math.floor(this.input.mousePointer.x / 100) !== Math.floor(alien1.x / 100) || Math.floor((this.input.mousePointer.y + game.global.charY) / 100) !== Math.floor(alien1.y / 100)) {
        game.global.mouseX = Math.floor(this.input.mousePointer.x / 100);
        game.global.mouseY = Math.floor((this.input.mousePointer.y + game.global.charY) / 100);

        game.global.bluX = Math.floor(blulethI.x / 100);
        game.global.bluY = Math.floor(blulethI.y / 100);

        console.log(this.input.activePointer.x + "x");
        console.log(this.input.activePointer.y + "y");

        console.log(game.global.bluX);
        console.log(game.global.bluY);
        console.log(game.global.mouseX);
        console.log(game.global.mouseY);

        if (Math.abs(game.global.bluX - game.global.mouseX) + Math.abs(game.global.bluY - game.global.mouseY) < 4 && game.global.moving == 1) {
          if (game.global.bluX !== game.global.mouseX) {
            if (game.global.char == 'bluleth') {
              game.global.moving = 2;

              //   the movement around corners works by creating two L's with invisible sprites and if one of them collide with a wall
              //   it will use the other path, if both of them collide with a wall the player cannot move to where they are trying to move to
              //   but if they both are able to make it to their destination the player moves diagonally to their target

              alien1.onInputUp.add(this.attackalien1);
              blulethMove1.x = blulethI.x;
              blulethMove1.y = blulethI.y;
              blulethMove1.body.velocity.x = (game.global.mouseX - game.global.bluX) * 440;

              blulethMove2.x = blulethI.x;
              blulethMove2.y = blulethI.y;
              blulethMove2.body.velocity.y = (game.global.mouseY - game.global.bluY) * 440;

              game.time.events.add(Phaser.Timer.SECOND * 0.25, this.cornerMovementA, this);
            } else {
              console.log('no character');
            }
          } else if (game.global.bluY !== game.global.mouseY) {
            game.global.moving = 2;

            alien1.onInputUp.add(this.attackalien1);
            blulethMove1.x = blulethI.x;
            blulethMove1.y = blulethI.y;
            blulethMove1.body.velocity.x = (game.global.mouseX - game.global.bluX) * 440;

            blulethMove2.x = blulethI.x;
            blulethMove2.y = blulethI.y;
            blulethMove2.body.velocity.y = (game.global.mouseY - game.global.bluY) * 440;

            game.time.events.add(Phaser.Timer.SECOND * 0.25, this.cornerMovementA, this);
          } else {
            console.log('no character');
          }
        } else if (game.global.bluY !== game.global.mouseY) {
          game.global.moving = 2;

          alien1.onInputUp.add(this.attackalien1);
          blulethMove1.x = blulethI.x;
          blulethMove1.y = blulethI.y;
          blulethMove1.body.velocity.x = (game.global.mouseX - game.global.bluX) * 440;

          blulethMove2.x = blulethI.x;
          blulethMove2.y = blulethI.y;
          blulethMove2.body.velocity.y = (game.global.mouseY - game.global.bluY) * 440;

          game.time.events.add(Phaser.Timer.SECOND * 0.25, this.cornerMovementA, this);
        }
      }
    }

    if (game.global.tutorialStep == 5) {
      console.log("shoot em to end tutorial");
      if (game.global.alien1HP < 3) {
        tutorialFight.kill();
        game.global.tutorialStep = 6;
      }
    }

    if (game.global.tutorialStep == 4) {
      tutorialFight.alpha = 1;
      game.global.tutorialStep = 5;
    }

    if (game.global.tutorialStep == 3) {
      if (blulethI.body.velocity.y !== 0) {
        tutorialMove.kill();
        game.global.tutorialStep = 4;
      } else if (blulethI.body.velocity.x !== 0) {
        tutorialMove.kill();
        game.global.tutorialStep = 4;
      } else {

      }
    }


    if (game.global.tutorialStep == 2) {
      tutorialMove.alpha = 1;
      game.global.tutorialStep = 3;
      console.log("shows movement tutorial");
    }

    if (game.input.mousePointer.y > 650 && cameraSprite.y < 800) {
      tutorialScroll.kill();
      game.global.tutorialStep = 2;
      console.log("kill scroll1");
      cameraSprite.body.velocity.y = (this.input.mousePointer.y - 650);
      game.global.charY += cameraSprite.body.velocity.y / 60;
    } else if (game.input.mousePointer.y < 150 && cameraSprite.y > 400) {
      tutorialScroll.kill();
      game.global.tutorialStep = 2;
      console.log("kill scroll2");
      cameraSprite.body.velocity.y = (this.input.mousePointer.y - 150);
      game.global.charY += cameraSprite.body.velocity.y / 60;
    } else {
      cameraSprite.body.velocity.y = 0;
    }
  },

  render: function() {
    //   comment this to remove camera debug info
    //   game.debug.cameraInfo(game.camera, 32, 32);

    //   game.debug.pointer(game.input.mousePointer);
  },

  // this is how you write a function
  // note the comma after the } above
  // see that variables go in the brackets still
  // to use this function in collision detection, write this.exampleFunction
  // to call it manually, write this.exampleFunction(1, 2)
  exampleFunction: function(something, somethingElse) {

  },

  cornerMovementA: function() {
    blulethMove1.body.velocity.x = 0;
    blulethMove1.body.velocity.y = (game.global.mouseY - game.global.bluY) * 440;
    console.log('Velocity Swaps');

    blulethMove2.body.velocity.y = 0;
    blulethMove2.body.velocity.x = (game.global.mouseX - game.global.bluX) * 440;

    console.log(Math.floor(blulethMove1.x / 100) == game.global.mouseX);
    console.log(Math.floor(blulethMove1.x / 100) - game.global.mouseX);

    console.log(Math.floor(blulethMove2.y / 100) == game.global.mouseY);
    console.log(Math.floor(blulethMove2.y / 100) - game.global.mouseY);

    game.time.events.add(Phaser.Timer.SECOND * 0.25, this.cornerMovementB, this);
  },

  cornerMovementB: function() {
    blulethMove1.body.velocity.y = 0;

    blulethMove2.body.velocity.x = 0;

    console.log(game.global.bluY == game.global.mouseY);

    console.log(game.global.bluX == game.global.mouseX);

    if (Math.floor(blulethMove1.x / 100) == game.global.mouseX && Math.floor(blulethMove1.y / 100) == game.global.mouseY && Math.floor(blulethMove2.x / 100) == game.global.mouseX && Math.floor(blulethMove2.y / 100) == game.global.mouseY) {
      blulethI.body.velocity.x = Math.floor(game.global.mouseX - game.global.bluX) * 60;
      blulethI.body.velocity.y = Math.floor(game.global.mouseY - game.global.bluY) * 60;

      console.log('Test1');

      game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.characterStop, this);
    } else if (Math.floor(blulethMove1.x / 100) == game.global.mouseX && Math.floor((blulethMove1.y) / 100) == game.global.mouseY) {
      blulethI.body.velocity.x = (Math.floor(game.global.mouseX) - Math.floor(blulethI.x / 100)) * 60;

      console.log('Test2');

      game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.characterStop, this);
      game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.cornerMovementC, this);
    } else if (Math.floor(blulethMove2.x / 100) == game.global.mouseX && Math.floor(blulethMove2.y / 100) == game.global.mouseY) {
      blulethI.body.velocity.y = (game.global.mouseY - game.global.bluY) * 60;

      console.log('Test3');

      game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.characterStop, this);
      game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.cornerMovementD, this);
    } else {
      game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.characterStop, this);
      console.log('Invalid Moving Spot');
    }
  },

  cornerMovementC: function() {
    blulethI.body.velocity.x = 0;

    blulethI.body.velocity.y = (game.global.mouseY - game.global.bluY) * 60;

    game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.characterStop, this);
  },

  cornerMovementD: function() {
    blulethI.body.velocity.y = 0;

    blulethI.body.velocity.x = (game.global.mouseX - game.global.bluX) * 60;
    game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.characterStop, this);
  },

  blulethMove: function() {
    //   This function runs when bluleth moves
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

    game.global.alien1Moved = 1;

    console.log("their turn!!")
    game.global.ammo = 0;

    if (game.global.alien1HP == 0) {
      alien1.kill();
      game.global.turn = 1;
      game.global.ammo = 1;
    }
  },

  alienMovement1: function() {
    alienMove1.body.velocity.y = (Math.floor(blulethI.y / 100) - Math.floor(alien1.y / 100)) * 120;
    alienMove1.body.velocity.x = 0;

    alienMove2.body.velocity.x = (Math.floor(blulethI.x / 100) - Math.floor(alien1.x / 100)) * 120;
    alienMove2.body.velocity.y = 0;

    game.time.events.add(Phaser.Timer.SECOND * (5 / 6), this.alienMovement2, this);
  },

  alienMovement2: function() {
    alienMove1.body.velocity.y = 0;

    alienMove2.body.velocity.x = 0;

    if (Math.floor(alienMove1.x / 100) == Math.floor(blulethI.x / 100) && Math.floor(alienMove1.y / 100) == Math.floor(blulethI.y / 100)) {
      alien1Body.body.velocity.x = (Math.floor(blulethI.x / 100) - Math.floor(alien1.x / 100)) * 60;
      game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.alienMovement3, this);
    } else if (Math.floor(alienMove2.x / 100) == Math.floor(blulethI.x / 100) && Math.floor(alienMove2.y / 100) == Math.floor(blulethI.y / 100)) {
      alien1Body.body.velocity.y = (Math.floor(blulethI.y / 100) - Math.floor(alien1.y / 100)) * 60;
      game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.alienMovement4, this);
    }
  },

  alienMovement3: function() {
    alien1Body.body.velocity.y = (Math.floor(blulethI.y / 100) - Math.floor(alien1.y / 100)) * 60;
    alien1Body.body.velocity.x = 0;

    game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.alienMovement2, this);
  },

  alienMovemnt4: function() {
    alien1Body.body.velocity.x = (Math.floor(blulethI.x / 100) - Math.floor(alien1.x / 100)) * 60;
    alien1Body.body.velocity.y = 0;

    game.time.events.add(Phaser.Timer.SECOND * (5 / 3), this.alienMovement2, this);
  },

  characterStop: function() {
    //   This stops the characters velocity after they move
    blulethI.body.velocity.x = 0;
    blulethI.body.velocity.y = 0;
    game.global.moving = 1;
    blulethI.x = Math.floor(blulethI.x / 100) * 100 + 50;
    blulethI.y = Math.floor(blulethI.y / 100) * 100 + 50;
    if (game.global.storyStatus == 2) {
      game.global.storyStatus = 3;
    }
    game.global.turn = 0;
    game.global.moving = 0;


    console.log('turn ' + game.global.turn);

    game.global.alien1Moved = 1;
  },

  alien1HitPlayer: function() {
    blulethI.body.velocity.x = 0;

    game.global.playerHP = game.global.playerHP - 1;
    console.log("Ouch, you've been hit!");
    console.log("PlayerHP = " + game.global.playerHP);
    game.global.ammo = game.global.ammo + 1;
    console.log("Ammo: " + game.global.ammo);
    console.log("your turn!");

    alien1Body.body.velocity.x = 0;
    alien1Body.body.velocity.y = 0;

    alienMove1.x = -1000;
    alienMove2.x = -1000;

    game.global.turn = 1;
    game.global.alien1Moved = 0;

    alien1Body.x = Math.floor(alien1Body.x / 100) * 100 + 50;
    alien1Body.y = Math.floor(alien1Body.y / 100) * 100 + 50;
  },



  terminalAActivate: function(blulethI, terminalA) {
    //   this changes a variable when Bluleth touches the terminals
    game.global.wallA = 1;
    console.log(game.global.wallA);
  },

  terminalBActivate: function(blulethI, terminalB) {
    game.global.wallB = 1;
    console.log(game.global.wallB);
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


  WinIThink: function(blulethI, endTile) {
    game.state.start("WinIThink");
  },

  //WinFUll: function(blulethI, endTile) {
  //  game.state.start("WinFull");
  //},

  //WinHalf: function(blulethI, endTile) {
  //  game.state.start("WinHalf");
  //},


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
