
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
    // alert('You lost! Try again!');
    $('#wholeBody').addClass('do-sway');
     loseMessage();

  }
};

//check for winner
function win(){
  if (correctLetter === word.length){
    $('div.letterBox button').css('visibility', 'hidden');
    winMessage();
  }
}

//keyboard access
$('body').on('keypress', function(event){
  var letter = event.key.toUpperCase();
  $('#' + letter).trigger('click');
});

// start button
$('#start').on('click', function(event) {
  $('#wholeBody').removeClass('do-sway');
  //random word generator
  resetGlobals();
  setWord();
  removeMessage();
});

//replay button
$('#replay').on('click', function(event) {
  $('#wholeBody').removeClass('do-sway');
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
  removeMessage();
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
  $('#word').html('');
  $(wordArray).each(function(index, el) {
    $('#word').append('<div class="letter-holder"><div class="letter">' + el + '</div></div>');
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

function winMessage(){
  $('#hangman').addClass('animated bounceOut');
  setTimeout (function(){
    $('#head', '#wholeBody').css('display', 'none');
    $('#hangman').css('background-image', 'url("./images/hangman_win-1.jpg")');
    $('#hangman').removeClass('bounceOut').addClass('bounceIn');
  }, 1000);
}

function loseMessage(){
  $('#hangman').addClass('animated bounceOut');
  setTimeout (function(){
    $('#head, #eyeR, #eyeL, #mouth').css('display', 'none');
    $('#wholeBody').css({'top':'174px', 'left':'188px'});
    $('#hangman').css('background-image', 'url("./images/hangman_lose-2.jpg")');
    $('#hangman').removeClass('bounceOut').addClass('bounceIn');
  }, 1000);

}

function removeMessage(){
  $('#hangman').css('background-image', 'url("./images/hangman_bg.png');
}









