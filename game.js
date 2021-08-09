class Game {
  constructor(){
    this.gameType = null;
    this.humanPlayer = new Player('Sarah', '🧕');
    this.computerPlayer = new Player('Computer', '💻')
    this.playerChoices = [];
    this.winner = null;
    this.draw = false;
  }

  startGame(mode) {
    this.gameType = mode;
    console.log(mode);
    if(this.gameType === 'classic') {
      this.playerChoices = classicCharacters;
    } else {
      console.log(difficultCharacters);
      this.playerChoices = difficultCharacters;
    }
    this.generateComputerPlay();
  }

  generateComputerPlay(){
  var randomIndex = Math.floor(Math.random() * this.playerChoices.length)
  console.log('Computer choice: ', this.playerChoices[randomIndex])
    this.computerPlayer.takeTurn(this.playerChoices[randomIndex])
  };

  determineWinner() {
    if(this.computerPlayer.playChoice.winAgainst.includes(this.humanPlayer.playChoice)) {
      console.log('Computer won');
      this.computerPlayer.wins++;
      this.winner = this.computerPlayer;
    } else if(this.computerPlayer.playChoice.loseAgainst.includes(this.humanPlayer.playChoice)) {
      console.log('Human won this round!');
      this.humanPlayer.wins++;
      this.winner = this.humanPlayer;
    } else {
      console.log("Ugh!t's a draw!");
      this.draw = true;
    }
    this.humanPlayer.saveWinsToStorage(this.humanPlayer.wins, 'humanWins');
    this.computerPlayer.saveWinsToStorage(this.computerPlayer.wins, 'computerWins')
  }
}
