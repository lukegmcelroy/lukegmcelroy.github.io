var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function cretesawBlade(x,y){


        var hitZoneSize = 25;// creates the size the hitzone 
    var damageFromObstacle = 10;// sets yje damage 
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// creates the hitzone
    sawBladeHitZone.x = x;// the x postiton of the hitzone 
    sawBladeHitZone.y = y;// the y position of the hitzone 
    game.addGameItem(sawBladeHitZone); // adds thhe hitzone to the game
    var obstacleImage = draw.bitmap('img/sawblade.png');//Drawing the imge and storing in the variable 
    sawBladeHitZone.addChild(obstacleImage);// add the image to the hiezone so we can see it     
     obstacleImege.x = -25 // tweaks the image pixels  the left 
     obstacleImege.y = -25  //tweaks the image pixels up  
    }
    createMyObstacle(400,345);
    createMyObstacle(600,345);
    createMyObstacle(800,345);  
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
