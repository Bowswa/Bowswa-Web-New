/*
    This game is made by Bowswa with massive help & insparation from Cookie Clicker!
*/

var VERSION = 0.010;
var BETA = 0;

/*
    Game Initialization
*/

var Game={};

Game.Launch = function() {
  Game.Version = VERSION;
  Game.Beta = BETA;
  if (window.location.href.indexOf('/beta')>-1) Game.beta=1;


}

Game.CreateScreen=
  '<span id="version">Version:' + VERSION + betaStr + '</span>' + 
  '<div id="welcome">' + Game.Welcome + '</div>';

Game.Changelog=
  '<span class="close"><button onclick="clearMid()">&times;</button></span>' +
  '<p class="warning">Please report any bugs in the <a href="https://discord.gg/RqSwaQTZn4" target="_blank">Discord.</a></p>' +
  '<br>' +
  '<p class="update-name">Is it really the same game?</p>' +
  '<p class="update-disc">??/??/???? 0.010 RELEASE</p>' +
  '<p class="update-bullet">Completely re-write the game from scratch.</p>' +
  '<br>' +
  '<p class="update-disc"> The following versions followed a different version system than now!</p>' +
  '<br>' +
  '<p class="update-name">Stats O\' Ramma</p>' +
  '<p class="update-disc">5/18/2021 0.05 RELEASE</p>' +
  '<p class="update-bullet">Updated the style of the page to flow better on all divices.</p>' +
  '<p class="update-bullet">Changed how the Setting, Stats, and Updates buttons display things.</p>' +
  '<p class="update-bullet">Cleaned up a lot of the code. This should help reduce chance of bugs upon updates.</p>' +
  '<p class="update-bullet">Separated Live and Beta save storage. DO NOT reset browser data to keep your save.</p>' +
  '<p class="update-bullet">Added a backend beta version detection system. This should help reduce bugs upon pushing to a live version.</p>' +
  '<p class="update-bullet">Fixed Grandma Bakers saying "cookie" in their description... Yeah I did that...</p>' +
  '<p class="update-bullet">Fixed a bunch of other things.</p>' +
  '<p class="update-bullet">Moved all settings buttons into the settings menu.</p>' +
  '<br>' +
  '<p class="update-name">Ole\' Gyzers\' Club</p>' +
  '<p class="update-disc">3/22/2021 0.04 BETA</p>' +
  '<p class="update-bullet">Separated the Beta and Live data storage in your LocalStorage.</p>' +
  '<p class="update-bullet">Added Grandpas to the game in full. This is a BETA so you might experience some bugs at first.</p>' +
  '<p class="update-bullet">Cleaned up some code.</p>' +
  '<p class="update-bullet">Worked on the other versions Tab.</p>' +
  '<br>' +
  '<p class="update-name">I said a Broom-Sweepa-Broom!</p>' +
  '<p class="update-disc">2/18/2021 0.03 BETA</p>' +
  '<p class="update-bullet">Lots of styling improvements. This is the final layout I will use.</p>' +
  '<p class="update-bullet">Fixed a bug where PPS(pretzels per second) would not re-calculate on time.</p>' +
  '<p class="update-bullet">Fixed my games page link.</p>' +
  '<p class="update-bullet">Fixed the Grandma Baker Description saying "cookie"... Yeah I did that.</p>' +
  '<p class="update-bullet">Moved the Save, Load, And reset buttons into the settings button.</p>' +
  '<p class="update-bullet">Added fancy beta verson detection to add a BETA tag next to the version number.</p>' +
  '<p class="update-bullet">Beta version detection also affects the Other Versions tab.</p>' +
  '<br>' +
  '<p class="update-name">Bug Fix V1</p>' +
  '<p class="update-bullet">Fixed many critical bugs</p>' +
  '<p class="update-bullet">Moved PPS(Pretzels Per Second) to a new calculation.</p>' +
  '<p class="shadow-bullet">Many shadow patches fixing bugs created in this update and adding styling.</p>' +
  '<br>' +
  '<p class="update-name">New Waste of Time</p>' +
  '<p class="update-bullet">Released Game</p>' +
  '<p class="update-disc">Well, is this a waste of my time? I had a couple hours to spend.</p>';

/*
    Misc. Helper Functions
*/

Game.elmID = function(id) {return document.getElementById(id);}

Game.Choose = function(arr) {return arr[Math.floor(Math.random()*arr.length)];}



/*
    Game Launch
*/

Game.RunIt = function() {
  Game.Launch();

  Game.Welcome = Game.Choose('Welcome!', 'How did you get here?!?!', 'Testing Testing 123...', 'Pretzel Clicker Re-Write!', 'Official Developer');

  if (Game.Beta >= 1) betaStr = 'BETA';
  else betaStr = '';
  Game.elmID('gameSpace').innerHTML = Game.CreateScreen;
}

window.onload = Game.RunIt();