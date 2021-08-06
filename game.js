class Game {
  constructor(){
    this.gameType = null;
    this.humanPlay = null;
    this.computerPlay = null;
    this.humanWins = 0;
    this.computerWins = 0;
  }

// checkForDraw() {
//   if(this.humanPlay === this.computerPlay) {
//     return
//   }
// }

determineWinner() {
  // human = new Player('Human', '🧍‍♀️');
  // computer = new Player('Computer', '🤖')
  this.computerPlay = computer.takeTurn(3, 1)
  this.humanPlay = human.takeTurn(3, 1)
  if(this.computerPlay === 'rock' && this.humanPlay === 'scissors' || this.computerPlay === 'scissors' && this.humanPlay === 'paper' || this.computerPlay === 'paper' && this.humanPlay === 'rock') {
    computer.wins++;
    return 'Computer won this round!';
  } else if(this.humanPlay === 'rock' && this.computerPlay === 'scissors' || this.humanPlay === 'scissors' && this.computerPlay === 'paper' || this.humanPlay === 'paper' && this.computerPlay === 'rock') {
    human.wins++;
    return 'Human won this round!';
  } else {
    return "Ugh!t's a draw!"
  }
  //might be able to get rid of the conditional portion of else if and replase with just else return...
}

resetGameBoard() {

}

}
