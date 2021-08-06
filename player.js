
class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = 0 || wins;
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }

  takeTurn(max, min) {
    var playChosen = Math.floor(Math.random() * (max - min + 1) + min);
    if(playChosen === 1) {
      playChosen = 'rock';
    } else if(playChosen === 2) {
      playChosen = 'paper';
    } else {
      playChosen = 'scissors';
    }
    return playChosen;
  }
}
