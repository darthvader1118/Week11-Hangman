var game = require("game.js")
require("letter.js")

function Word(word){
  this.word = game.getWord();
  this.letters = [];
  for(var i = 0; i< randWord.length; i++){
    letters.push(new Letter(randWord.charAt(i),false)) 
}

}

var randWord = game.getWord();
var letters = []




