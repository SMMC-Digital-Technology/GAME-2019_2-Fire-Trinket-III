/**
 * Use this state to load all of your assets
 */
var loadState = {
  preload: function() {
    loadingLabel = game.add.text(80, 150, 'loading...', {
      font: '30px Courier',
      fill: '#ffffff'
    });

    game.load.image('ship1', 'assets/Ship_1.png');
    //invisible sprites
    game.load.image('wall', 'assets/wall.png');
    game.load.image('moveTool', 'assets/movingTool.png');
    game.load.image('tiles', 'assets/level1tilemap.png');
    //planet sprites
    game.load.image('planet1', 'assets/Planet_1.png');
    game.load.image('planet2', 'assets/Planet_2.png');
    game.load.image('planet3', 'assets/Planet_3.png');
    game.load.image('planet4', 'assets/Planet_4.png');
    game.load.image('planet5', 'assets/Planet_5.png');
    game.load.image('GalaxyMap', 'assets/Galaxy_Map.png');
    //level spritesheet
    game.load.image('level1BG', 'assets/BG_1.png');
    //WIP potions
    game.load.image('wrathE', 'assets/ElixirOfWrath.png');
    game.load.image('realmWarpE', 'assets/RealmWarpPotion.png');
    //weapon sprites
    game.load.spritesheet('rocketAsset', 'assets/Rocket.png', 32, 32);
    game.load.image('RPGAsset', 'assets/RPG.png');
    //enemy sprites
    game.load.spritesheet("Alien", 'assets/alien.png', 100, 100);
    //player sprites
    game.load.spritesheet("Bluleth", 'assets/bluleth.png', 100, 100);
    game.load.image('Joe', 'assets/Joe.png');
    game.load.image('Abel', 'assets/Able.png');
    //players HP
    game.load.spritesheet("playerHPSprite", "assets/PlayerHP.png", 96, 32);

    game.load.image("Text_Box", "assets/textBox.png");

    //game.load.bitmapFont('carrier_command', 'assets/carrier_command.png', 'assets/carrier_command.xml');
    //   preloads everything into the game
  },

  create: function() {
    game.state.start('menu');
  }

};
