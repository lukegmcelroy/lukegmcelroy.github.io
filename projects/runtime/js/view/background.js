var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
     var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'6333FF');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            //wverytime this loop runs it ceates a circle with a random x andy respective to the caveas.
            for (var i = 0;i <=100;i++){
            var circle = draw.circle(1,'white','LightGray',1);//ceates avar  calls circle theat holds eacxh circle 
            circle.x = canvasWidth*Math.random();
            circle.y = groundY*Math.random();
            background.addChild(circle);
        }

            var moon = draw.bitmap('img/moon.png');// created a var celled moon  
            moon.x = canvasWidth - 750;//holds the x value (left to pight)
            moon.y = 100;//holds the y value (up and down)
            moon.scaleX = 0.5;//changes the x scale of the moon 
             moon.scaleY = 0.5;//changes the y scale of the moon 
            background.addChild(moon);//add the moon to the backgroud
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for(var i=0;i<5;++i) {
                var buildingHeight = 300;
                var building = draw.rect(75,buildingHeight,'LightGray','Black',1);
                building.x = 200*i;
                building.y = groundY-buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
           
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/tree.png');
            tree.x = 600;
            tree.y = groundY = 240;
            tree.scaleX = 0.5;//changes the x scale of the tree 
             tree.scaleY = 0.5;//changes the y scale of the tree
            background.addChild(tree);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1;// taking the vaalue of tree. x and decreasing by 1 pixel everry time the update function runs. makes it move left.
            if(tree.x < -200) {
            tree.x = canvasWidth;
            }       
            
            // TODO 5: Part 2 - Parallax
            // loop the buildings and moves them to the lrft by 0.5 pixles 
        for (var i = 0; i < buildings.length; i++){
            buildings[i].x = builddings[i].x - 0.5;// moves the biuldings x position by .5 pixels 
            if (buildings[i].x < 0) {//cheks to see if the buildings s x pos id off ythe left side.
                buildings[i].x = canvasWidth;
            }
        }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
 };


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
