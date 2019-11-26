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


    nextButton = game.add.button(900, 550, "");
    nextButton.anchor.setTo(0.5, 0.5);
    nextButton.scale.x = 2;
    nextButton.scale.y = 2;
    nextButton.smoothed = false;
    nextButton.onInputUp.add(this.nextHeading);

    nextText = game.add.text(880, 550, "Next", {
      fill: 'white'
    });

    urk = game.add.text(button1.x + 100, button1.y - 20, "Urk", {
      fill: 'white'
    });


    textBox = game.add.sprite(500, 550, "Text_Box");
    textBox.scale.x = 2.5;
    textBox.scale.y = 2.5;

    textHeading1 = game.add.text(510, 560, game.global.headingText1, {
      fill: 'white'
    });

    textHeading2 = game.add.text(510, 560, game.global.headingText2, {
      fill: 'white'
    });
    textHeading2.alpha = 0;

    textBody1 = game.add.text(510, 610, game.global.bodyText1, {
      fill: 'white'
    });
    textBody1.scale.x = 0.8;
    textBody1.scale.y = 0.8

    textBody2 = game.add.text(510, 610, game.global.bodyText2, {
      fill: 'white'
    });
    textBody2.scale.x = 0.8;
    textBody2.scale.y = 0.8;
    textBody2.alpha = 0;

    textBody3 = game.add.text(510, 610, game.global.bodyText3, {
      fill: 'white'
    });
    textBody3.scale.x = 0.8;
    textBody3.scale.y = 0.8;
    textBody3.alpha = 0;

    textBody4 = game.add.text(510, 610, game.global.bodyText4, {
      fill: 'white'
    });
    textBody4.scale.x = 0.8;
    textBody4.scale.y = 0.8;
    textBody4.alpha = 0;


  },

  nextHeading: function() {
    if (textBody1.alpha == 1) {
      textBody1.alpha = 0;
      textBody2.alpha = 1;
      textHeading2.alpha = 1;
      textHeading1.alpha = 0;
    } else if (textBody2.alpha == 1){
      textHeading2.alpha = 0;
      textHeading1.alpha = 1;
      textBody2.alpha = 0;
      textBody3.alpha = 1;
    } else if (textBody3.alpha == 1){
      textHeading2.alpha = 1;
      textHeading1.alpha = 0;
      textBody3.alpha = 0;
      textBody4.alpha = 1;
    } else if (textBody4.alpha == 1){
      textBody4.alpha = 0;
      textBox.kill();
      textHeading1.kill();
      textHeading2.kill();
      textBody1.kill();
      textBody2.kill();
      textBody3.kill();
      textBody4.kill();
      nextButton.kill();
      nextText.kill();
    }
  },

  //   these function when you are in the right part of the story, allow you to travel to different levels
  startLevel1: function() {
    if (game.global.storyStatus == 1) {
      game.state.start('level1');
    }
  },


};
