
class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.playChoice = null;
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }

  takeTurn(playerChoices) {
  this.playChoice = playerChoices;
  }
}
