var newGame;
var humanToken = document.querySelector('.human-token');
var humanName = document.querySelector('.human-name');
var humanScore = document.querySelector('.human-score');
var computerToken = document.querySelector('.computer-token');
var computerName = document.querySelector('.computer-name');
var computerScore = document.querySelector('.computer-score');
var classicOption = document.getElementById('classic');
var difficultOption = document.getElementById('difficult');
var gameCharacters = document.getElementsByClassName('characters');
var difficultMode = document.querySelector('.difficult-mode');
var allCharacters = document.querySelector('.full-character-lineup');


window.addEventListener('load', function(){
  populateScoreBoard();
});

classicOption.addEventListener('click', function(event){
chooseGameMode('classic')
});

difficultOption.addEventListener('click', function(event){
  chooseGameMode('difficult');
});

function chooseGameMode(mode) {
  addHidden(difficultOption, 'hidden');
  addHidden(classicOption, 'hidden');
  removeHidden(allCharacters,'hidden');
  if(mode === 'difficult') {
    removeHidden(difficultMode, 'hidden');
  };
  newGame.startGame(mode);
  addCharacterOptions();
}

// gameCharacters.addEventListener('click', function(event) {
//   newGame.humanPlayer.takeTurn(event.target.id);
// });

function addCharacterOptions() {
  for(var i = 0; i < gameCharacters.length; i++) {
    gameCharacters[i].addEventListener('click', function(event) {
      event.preventDefault();
      newGame.humanPlayer.takeTurn(event.target.id);
      newGame.determineWinner();
      resetGameBoard()
    })
  }
}

function resetGameBoard() {
  setTimeout(function(){
    //all the things you want to do to reset the game board
    console.log('timeout')
    var mode = newGame.gameType
    newGame.startGame(mode)
  }, 1000)
}

function populateScoreBoard() {
  // preventDefault();
  newGame = new Game();
  console.log(newGame);
  humanToken.innerText = newGame.humanPlayer.token;
  humanName.innerText = newGame.humanPlayer.name;
  humanScore.innerText = newGame.humanPlayer.wins;
  computerToken.innerText = newGame.computerPlayer.token;
  computerName.innerText = newGame.computerPlayer.name;
  computerScore.innerText = newGame.computerPlayer.wins;
}

function addHidden(element, classList) {
  element.classList.add(classList);
}

function removeHidden(element, classList) {
  element.classList.remove(classList);
}



//--------------the long and non-class-to-class way to solve it!----------------
// var humanWins = 0;
// var computerWins = 0;
// var computerPlay;
// var humanPlay;
//
//
// function selectComputerPlay(min, max) {
//   computerPlay = Math.floor(Math.random() * (max - min + 1) + min);
//   if(computerPlay === 1) {
//     computerPlay = 'rock';
//   } else if(computerPlay === 2) {
//     computerPlay = 'paper';
//   } else {
//     computerPlay = 'scissors';
//   }
// }
//
// function selectHumanPlay(min, max) {
//   humanPlay = Math.floor(Math.random() * (max - min + 1) + min);
//   if(humanPlay === 1) {
//     humanPlay = 'rock';
//   } else if(humanPlay === 2) {
//     humanPlay = 'paper';
//   } else {
//     humanPlay = 'scissors';
//   }
// }
//
//
// function determineWinner() {
//   if(computerPlay === 'rock' && humanPlay === 'scissors' || computerPlay === 'scissors' && humanPlay === 'paper' || computerPlay === 'paper' && humanPlay === 'rock') {
//     computerWins++;
//     return 'Computer won this round!';
//   } else if(humanPlay === 'rock' && computerPlay === 'scissors' || humanPlay === 'scissors' && computerPlay === 'paper' || humanPlay === 'paper' && computerPlay === 'rock') {
//     humanWins++;
//     return 'Human won this round!';
//   } else {
//     return "Ugh!t's a draw!";
//   }
// }
//
// selectComputerPlay(1,3);
// selectHumanPlay(1,3);
// console.log('computer:', computerPlay);
// console.log('human:', humanPlay);
// determineWinner();
