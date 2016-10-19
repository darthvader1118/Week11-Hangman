var game = require("game.js")
require("letter.js")


var randWord = game.getWord();
var letters = []

for(var i = 0; i< randWord.length; i++){
    letters.push(new Letter(randWord.charAt(i),false)) 
}

