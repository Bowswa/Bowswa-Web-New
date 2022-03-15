/*
    This game is made by Bowswa with massive help & insparation from Cookie Clicker!
*/

var VERSION = 0.009;
var BETA = 0;

/*
    Game Initialization
*/

var Game={};

/*
    Misc. Helper Functions
*/

Game.elmID = function(id) {return document.getElementById(id);}

Game.Choose = function(arr) {return arr[Math.floor(Math.random()*arr.length)];}

/*
    Game Launch
*/

Game.Launch = function() {
  Game.elmID('gameSpace').innerHTML = '<span id="version">Version:' + VERSION + '</span>';
}

window.onload = Game.Launch;