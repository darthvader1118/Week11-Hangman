function Letter(word,bool){
  this.word = word;
  this.bool = bool;
}

Letter.prototype.showWord = function(){
  if(this.bool == true){
    console.log(this.word)
  }
  else{
    consol.log("_")
  }
}