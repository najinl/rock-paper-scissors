var game1;

function instanciate() {
  human = new Player('Human', '🧍‍♀️', 10);
  computer = new Player('Computer', '🤖', 13);
  game1 = new Game();
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
