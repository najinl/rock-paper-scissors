var newGame = new Game();
var classAddForHuman;
var classAddForComputer;
var humanToken = document.querySelector('.human-token');
var humanName = document.querySelector('.human-name');
var humanScore = document.querySelector('.human-score');
var computerToken = document.querySelector('.computer-token');
var computerName = document.querySelector('.computer-name');
var computerScore = document.querySelector('.computer-score');
var classicOption = document.getElementById('classic');
var difficultOption = document.getElementById('difficult');
var fighterRoster = document.querySelector('.game-characters')
var gameCharacters = document.getElementsByName('fighter');
var difficultMode = document.querySelector('.difficult-mode');
var allCharacters = document.querySelector('.full-character-lineup');
var computerSelection = document.querySelector('.choice-computer');
var humanSelection = document.querySelector('.choice-human');
var changeGameButton = document.querySelector('.change-game');
var playerPrompt = document.querySelector('.player-prompt');

window.addEventListener('load', function(){
  newGame.humanPlayer.retrieveWinsFromStorage('humanWins');
  newGame.computerPlayer.retrieveWinsFromStorage('computerWins');
  populateScoreBoard();
});

changeGameButton.addEventListener('click', function() {
location.reload();
});

classicOption.addEventListener('click', function(event) {
chooseGameMode('classic')
});

difficultOption.addEventListener('click', function(event) {
  chooseGameMode('difficult');
});

function chooseGameMode(mode) {
  addClass(difficultOption, 'hidden');
  addClass(classicOption, 'hidden');
  removeClass(allCharacters,'hidden');
  if(mode === 'difficult') {
    removeClass(difficultMode, 'hidden');
  };
  newGame.startGame(mode);
  playerPrompt.innerText = 'Choose your fighter!';
  addCharacterOptions();
};

function showPlayerChoices() {
  classAddForHuman = newGame.humanPlayer.playChoice;
  classAddForComputer = newGame.computerPlayer.playChoice.type;
  addClass(fighterRoster, 'hidden');
  removeClass(humanSelection, 'hidden');
  removeClass(computerSelection, 'hidden');
  addPlayerChoices();
};

function generateWinnerMessage(winner) {
  if(winner.winner === winner.computerPlayer) {
    playerPrompt.innerText = `${winner.computerPlayer.token} ${winner.computerPlayer.name} won this round! ${winner.computerPlayer.token}`;
  } else if(winner.winner === winner.humanPlayer) {
    playerPrompt.innerText = `${winner.humanPlayer.token} ${winner.humanPlayer.name} won this round! ${winner.humanPlayer.token}`;
  } else {
    playerPrompt.innerText = "😥 Ugh!t's a draw! 😥";
  }
};

function addCharacterOptions() {
  for(var i = 0; i < gameCharacters.length; i++) {
    gameCharacters[i].addEventListener('click', function(event) {
      event.preventDefault();
      newGame.humanPlayer.takeTurn(event.target.id);
      showSelectedAndDeclareWinner();
    })
  }
};

function showSelectedAndDeclareWinner() {
  newGame.determineWinner();
  generateWinnerMessage(newGame);
  resetGameBoard();
  showPlayerChoices();
  removeClass(changeGameButton, 'hidden');
};

function resetGameBoard() {
  setTimeout(function(){
    var mode = newGame.gameType
    addClass(humanSelection, 'hidden');
    addClass(computerSelection, 'hidden');
    removePlayerChoices();
    newGame.startGame(mode)
    humanScore.innerText = `Wins: ${newGame.humanPlayer.wins}`;
    computerScore.innerText = `Wins: ${newGame.computerPlayer.wins}`;
    playerPrompt.innerText = 'Choose your fighter!';
    removeClass(fighterRoster, 'hidden')
    if(mode === 'difficult') {
      removeClass(difficultMode, 'hidden');
    };
  }, 1000)
};

function populateScoreBoard() {
  humanToken.innerText = newGame.humanPlayer.token;
  humanName.innerText = newGame.humanPlayer.name;
  humanScore.innerText = `Wins: ${newGame.humanPlayer.wins}`;
  computerToken.innerText = newGame.computerPlayer.token;
  computerName.innerText = newGame.computerPlayer.name;
  computerScore.innerText = `Wins: ${newGame.computerPlayer.wins}`;
};

function addClass(element, classList) {
  element.classList.add(classList);
};

function removeClass(element, classList) {
  element.classList.remove(classList);
};

function removePlayerChoices() {
  removeClass(humanSelection, classAddForHuman);
  removeClass(computerSelection, classAddForComputer);
};

function addPlayerChoices() {
  addClass(humanSelection, classAddForHuman);
  addClass(computerSelection, classAddForComputer);
};
