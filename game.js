class Game {
  constructor(){
    this.gameType = null;
    this.humanPlayer = new Player('Human', '🧍‍♀️');
    this.computerPlayer = new Player('Computer', '🤖')
    this.humanWins = 0;
    this.computerWins = 0;
  }

// checkForDraw() {
//   if(this.humanPlay === this.computerPlay) {
//     return
//   }
// }

determineWinner() {
  var computerPlay = this.computerPlayer.takeTurn(3, 1);
  var humanPlay = this.humanPlayer.takeTurn(3,1);
  if(computerPlay === 'rock' && humanPlay === 'scissors' || computerPlay === 'scissors' && humanPlay === 'paper' || computerPlay === 'paper' && humanPlay === 'rock') {
    this.computerPlayer.wins++;
    return 'Computer won this round!';
  } else if(humanPlay === 'rock' && computerPlay === 'scissors' || humanPlay === 'scissors' && computerPlay === 'paper' || humanPlay === 'paper' && computerPlay === 'rock') {
    this.humanPlayer.wins++;
    return 'Human won this round!';
  } else {
    return "Ugh!t's a draw!"
  }
  //might be able to get rid of the conditional portion of else if and replase with just else return...
}

resetGameBoard() {

}

}
