
class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.playChoice = null;
  }

  saveWinsToStorage(player, storageName) {
    var winsToAdd = JSON.stringify(player);
    localStorage.setItem(storageName, winsToAdd);
  }

  retrieveWinsFromStorage(storageName) {
    var retrievedWins = localStorage.getItem(storageName) || 0;
    var parsedWins = JSON.parse(retrievedWins);
    this.wins = parseInt(parsedWins);
  }

  takeTurn(playerChoices) {
  this.playChoice = playerChoices;
  }
}
