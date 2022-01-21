let CHOICES = ["rock", "paper", "scissors"];

// Function that randomly returns rock, paper or scissors

function computerPlay() {
  let choicesLen = CHOICES.length;
  let randomChoice = Math.floor(Math.random() * choicesLen);
  return CHOICES[randomChoice];
}

// Function that plays single round of the game

function playRound(playerSelection, computerSelection) {
  let lose = "You lose!";
  let win = "You win!";
  let tie = "It's a tie"
  switch (true) {
    case (playerSelection === computerSelection):
      return tie
    case (playerSelection === "rock" && computerSelection === "scissors"):
      return win;
      break;
    case (playerSelection === "paper" && computerSelection === "rock"):
      return win;
      break;
    case (playerSelection === "scissors" && computerSelection === "paper"):
      return win;
    default:
      return lose;
  }
}

// Function for Rock-paper-scissors game

function game() {
  let rounds = 5;
  for (let i=0; i<5; i++) {
    computerSelection = computerPlay();
    playerSelection = prompt("Select: \n").toString().toLowerCase();
    if (!CHOICES.includes(playerSelection)) {
      console.log("Only rock paper or scissors");
      continue;
    }
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
