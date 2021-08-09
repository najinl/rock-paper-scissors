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
var computerSelection = document.querySelector('.choice-computer');


window.addEventListener('load', function(){
  newGame.humanPlayer.retrieveWinsFromStorage('humanWins');
  newGame.computerPlayer.retrieveWinsFromStorage('computerWins');
  populateScoreBoard();
});

classicOption.addEventListener('click', function(event){
chooseGameMode('classic')
});

difficultOption.addEventListener('click', function(event){
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
  addCharacterOptions();
};

function showPlayerChoices() {
  classAddForHuman = newGame.humanPlayer.playChoice;
  classAddForComputer = newGame.computerPlayer.playChoice.type;
  addClass(fighterRoster, 'hidden');
  removeClass(humanSelection, 'hidden');
  removeClass(computerSelection, 'hidden');
  addClass(humanSelection, classAddForHuman);
  addClass(computerSelection, classAddForComputer);
};

function removePlayerChoices() {
  removeClass(humanSelection, classAddForHuman);
  removeClass(computerSelection, classAddForComputer);
}

function addCharacterOptions() {
  for(var i = 0; i < gameCharacters.length; i++) {
    gameCharacters[i].addEventListener('click', function(event) {
      event.preventDefault();
      newGame.humanPlayer.takeTurn(event.target.id);
      newGame.determineWinner();

      resetGameBoard();
      // humanPlayerChoiceDisplay = event.target;
      showPlayerChoices();
    })
  }
};

function resetGameBoard() {
  setTimeout(function(){
    addClass(humanSelection, 'hidden');
    addClass(computerSelection, 'hidden');
    removePlayerChoices();
    //all the things you want to do to reset the game board
    console.log('timeout')
    humanScore.innerText = `Wins: ${newGame.humanPlayer.wins}`;
    computerScore.innerText = `Wins: ${newGame.computerPlayer.wins}`;
    var mode = newGame.gameType
    newGame.startGame(mode)
    // removeClass(allCharacters,'hidden');
    removeClass(fighterRoster, 'hidden')
    if(mode === 'difficult') {
      removeClass(difficultMode, 'hidden');
    };
  }, 1000)
};

function populateScoreBoard() {
  // newGame = new Game();
  console.log(newGame);
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
