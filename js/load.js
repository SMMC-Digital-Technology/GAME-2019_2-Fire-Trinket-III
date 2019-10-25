/**
 * Use this state to load all of your assets
 */
var loadState = {
  preload: function() {
    loadingLabel = game.add.text(80, 150, 'loading...', {
      font: '30px Courier',
      fill: '#ffffff'
    });

    game.add.image('ship1', 'assets/Ship_1.png');

    game.add.image('planet1', 'assets/Planet_1.png');
    game.add.image('planet2', 'assets/Planet_2.png');
    game.add.image('planet3', 'assets/Planet_3.png');
    game.add.image('planet4', 'assets/Planet_4.png');
    game.add.image('planet5', 'assets/Planet_5.png');
    game.add.image('GalaxyMap', 'assets/Galaxy_Map.png');

    game.add.image('wrathE', 'assets/ElixirOfWrath');
    game.add.image('realmWarpE', 'assets/RealmWarpPotion.png');

    game.add.image('rocketAsset', 'assets/Rocket.png');
    game.add.image('RPGAsset', 'assets/RPG.png');
    // load all assets
  },

  create: function() {
    game.state.start('menu');
  }

};