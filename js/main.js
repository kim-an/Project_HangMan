var won = false;
var guess;         //guess
var guesses = [];  //holds each letter guessed
var numOfRightGuesses = 0;
var numOfWrongGuesses = 0;
var correctLetter = 0;
var word;
var letter;

//buttons to guess letters
// document.getElementById('letterBox').innerHTML = guess;

function setLetter(letter) {
    numOfRightGuesses = 0;
    document.getElementById('guess').innerHTML += letter;
    $('#word div').each(function(index, el) {
      if ($(el).text().toUpperCase() === letter){
        $(el).css('visibility', 'visible');
        numOfRightGuesses++;
        correctLetter++;
      }
    });
    if (numOfRightGuesses === 0){
        numOfWrongGuesses++;
    }
    checkGuess();
    win();
    $('#' + letter).css('visibility', 'hidden'); //hides letters after guess
    console.log("Number of wrong guess is: "+ numOfWrongGuesses);
    console.log("Number of right guess is: "+ numOfRightGuesses);
}

function checkGuess(){
  if(numOfWrongGuesses === 9){
    $('div.letterBox button').css('visibility', 'hidden');
    alert('You lost! Try again!');
  }
};

function win(){
  if (correctLetter === word.length){
    alert('You won!');
    $('div.letterBox button').css('visibility', 'hidden');
  }
}

// start button
$("#start").on('click', function(event) {
  // event.preventDefault();
  /* Act on the event */
  //random word generator
  word = words[Math.floor(Math.random() * words.length)];
  var wordArray = word.split('');
  $(wordArray).each(function(index, el) {
    $("#word").append("<div>" + el + "</div>");
  });
  $('#word div').css('visibility','hidden');
});

//replay button
$('#replay').on('click', function(event) {
  // event.preventDefault();
  /* Act on the event */
  $('button').css('visibility', 'visible');
  $('#guess').empty();
  $('#word').empty();

});

//databank of words
var words = [
            'lion', 'gorilla', 'zebra',
            'elephant', 'penguin', 'bear',
            'antelope', 'racoon', 'tiger',
            'dolphin', 'seagull', 'leopard'];


//random word generator
var word = words[Math.floor(Math.random() * words.length)];



