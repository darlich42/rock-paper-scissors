const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector("button").textContent = "Play Again";
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors!", "paper");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors!", "paper");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Scissors! With Correct spelling please.",
      "paper"
    );
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "player").length;
  let computerWins = winners.filter((item) => item == "computer").length;
  let tieGames = winners.filter((item) => item == "tie").length;
  console.log("Results: ");
  console.log("Player Wins: ", playerWins);
  console.log("Computer Wins: ", computerWins);
  console.log("Ties: ", tieGames);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round: ", round);
  console.log("Player Chose: ", playerChoice);
  console.log("Computer Chose: ", computerChoice);
  console.log(winner, "won this round.");
  console.log("-------------------------------------");
}
