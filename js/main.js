
var guess;         //guess
var guesses = [];  //holds each letter guessed

var playerOne = 1;


//buttons to guess letters
document.getElementById('letterBox').innerHTML = guess;

function setLetter(letter) {
    document.getElementById('guess').innerHTML += letter;
}

var startGame = function(event){

}
//databank of words
var words = [
            'lion', 'gorilla', 'zebra',
            'elephant', 'penguin', 'bear',
            'antelope', 'racoon', 'tiger',
            'dolphin', 'seagull', 'leopard'];

//random word generator
var word = words[Math.floor(Math.random() * words.length)];
//display random word
var answer = [];
  for (var i = 0; i < word.length; i++){
    answer[i] = "_";
  }

var remainingLetters = word.length;

// var replay = function()

