
var guess;         //guess
var guesses = [];  //holds each letter guessed
var numOfRightGuesses = 0;
var numOfWrongGuesses = 0;
var correctLetter = 0;
var word;
var letter;

//buttons to guess letters
function setLetter(letter) {
    numOfRightGuesses = 0;
    document.getElementById('guess').innerHTML += letter;
    $('#word').find('.letter').each(function(index, el) {
      if ($(el).text().toUpperCase() === letter){
        $(el).css('visibility', 'visible');
        numOfRightGuesses++;
        correctLetter++;
      }
    });
    if (numOfRightGuesses === 0){
        numOfWrongGuesses++;
        $('.bodyParts').eq(numOfWrongGuesses - 1).show()
        // show next image
    }
    checkGuess();
    win();
    $('#' + letter).css('visibility', 'hidden'); //hides letters after guess
}

//check guesses
function checkGuess(){
  if(numOfWrongGuesses === 9){
    $('div.letterBox button').css('visibility', 'hidden');
    alert('You lost! Try again!');
    // $(#word).css('visibility', 'visible');
  }
};

//check for winner
function win(){
  if (correctLetter === word.length){
    alert('You won!');
    $('div.letterBox button').css('visibility', 'hidden');
  }
}

// start button
$("#start").on('click', function(event) {
  //random word generator
  setWord();
});

//replay button
$('#replay').on('click', function(event) {
  $('div.letterBox button').css('visibility', 'visible');
  $('#guess').text("Letters guessed: ");
  $('#word').empty();
  resetGlobals();
  $('.bodyParts').each(function(index, bodyPart) {
    $(bodyPart).css('display', 'none');
  })
  setWord();
  checkGuess();
  win();
});


//databank of words
var words = [
            'lion', 'gorilla', 'zebra',
            'elephant', 'penguin', 'bear',
            'antelope', 'racoon', 'tiger',
            'dolphin', 'seagull', 'leopard'];

//start button function
function setWord() {
  word = words[Math.floor(Math.random() * words.length)];
  var wordArray = word.split('');
  $(wordArray).each(function(index, el) {
    $("#word").append('<div class="letter-holder"><div class="letter">' + el + '</div></div>');
  });
  $('#word').find('.letter').css('visibility','hidden');
}

//reset button function
function resetGlobals() {
  numOfRightGuesses = 0;
  numOfWrongGuesses = 0;
  correctLetter = 0;
  guesses = [];
};
