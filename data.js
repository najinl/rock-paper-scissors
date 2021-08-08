
var classicCharacters = [
  {
    type: "rock",
    winAgainst: "scissors",
    loseAgainst: "paper"
  },
  {
    type: "paper",
    winAgainst: "rock",
    loseAgainst: "scissors"
  },
  {
    type: "scissors",
    winAgainst: "paper",
    loseAgainst: "rock"
  }
]

var difficultCharacters = [
  {
    type: "rock",
    winAgainst: ["scissors", "venusaur"],
    loseAgainst: ["paper", "fletchinder"]
  },
  {
    type: "paper",
    winAgainst: ["rock", "fletchinder"],
    loseAgainst: ["scissors", "venusaur"]
  },
  {
    type: "scissors",
    winAgainst: ["venusaur", "paper"],
    loseAgainst: ["rock", "fletchinder"]
  },
  {
    type: "venusaur",
    winAgainst: ["fletchinder", "paper"],
    loseAgainst: ["rock", "scissors"]
  },
  {
    type: "fletchinder",
    winAgainst: ["scissors", "rock"],
    loseAgainst: ["venusaur", "paper"]
  }
]
