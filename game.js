class Game {
  constructor(){
    this.gameType = null;
    this.humanPlayer = new Player('Sarah', '🧕');
    this.computerPlayer = new Player('Computer', '💻')
    this.playerChoices = [];
    this.winner = null;
    this.draw = null;
  }

  startGame(mode) {
    this.gameType = mode;
    if(this.gameType === 'classic') {
      this.playerChoices = classicCharacters;
    } else {
      this.playerChoices = difficultCharacters;
    }
    this.generateComputerPlay();
  }

  generateComputerPlay(){
  var randomIndex = Math.floor(Math.random() * this.playerChoices.length);
    this.computerPlayer.takeTurn(this.playerChoices[randomIndex]);
  };

  determineWinner() {
    if(this.computerPlayer.playChoice.winAgainst.includes(this.humanPlayer.playChoice)) {
      this.computerPlayer.wins++;
      this.winner = this.computerPlayer;
    } else if(this.computerPlayer.playChoice.loseAgainst.includes(this.humanPlayer.playChoice)) {
      this.humanPlayer.wins++;
      this.winner = this.humanPlayer;
    } else {
      this.draw = true;
      this.winner = 'none';
    }
    this.humanPlayer.saveWinsToStorage(this.humanPlayer.wins, 'humanWins');
    this.computerPlayer.saveWinsToStorage(this.computerPlayer.wins, 'computerWins');
  }
}
