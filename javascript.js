const choices = ["rock", "paper", "scissors"];
const winners = [];

// function game() {
//   for (let i = 1; i <= 5; i++) {
//     playRound(i);
//   }
//   document.querySelector("button").textContent = "Play Again";
//   logWins();
// }

function playRound(e) {
  const playerSelection = e;
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner);
  logWins();
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let tieGames = winners.filter((item) => item == "Tie").length;
  scorediv.textContent =
    "Wins: " +
    "Player: " +
    playerWins +
    " Computer: " +
    computerWins +
    " Tie Games: " +
    tieGames;
  results.appendChild(scorediv);
  if (playerWins === 5) {
    scorediv.textContent = "PLAYER WINS!!";
    winners.length = 0;
  } else if (computerWins === 5) {
    scorediv.textContent = "COMPUTER WINS!! :(";
    winners.length = 0;
  }
  // console.log("Results: ");
  // console.log("Player Wins: ", playerWins);
  // console.log("Computer Wins: ", computerWins);
  // console.log("Ties: ", tieGames);
}

const results = document.querySelector(".results");
const playerdiv = document.createElement("div");
playerdiv.classList.add("playerdiv");
const compdiv = document.createElement("div");
compdiv.classList.add("compdiv");
const winnerdiv = document.createElement("div");
winnerdiv.classList.add("winnerdiv");
const scorediv = document.createElement("div");
scorediv.classList.add("scorediv");

function logRound(playerChoice, computerChoice, winner) {
  playerdiv.textContent = "Player Chose: " + playerChoice;
  compdiv.textContent = "Computer Chose: " + computerChoice;
  winnerdiv.textContent = winner + " won this round!";
  results.appendChild(playerdiv);
  results.appendChild(compdiv);
  results.appendChild(winnerdiv);

  // console.log("Player Chose: ", playerChoice);
  // console.log("Computer Chose: ", computerChoice);
  // console.log(winner, "won this round.");
  // console.log("-------------------------------------");
}

// Add buttons to play game
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => playRound("rock"));

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => playRound("paper"));

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => playRound("scissors"));
