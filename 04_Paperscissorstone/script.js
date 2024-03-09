function getComputerChoice() {
  let pssChoices = ["stone", "paper", "scissors"];
  let computerChoice = pssChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function getResult(playerChoice, computerChoice) {
  let score;
  if (computerChoice === playerChoice) {
    score = 0;
  } else if (
    (playerChoice === "stone" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "stone")
  ) {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

// show the result of the game
function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById("result");
  switch (score) {
    case 0:
      result.innerText = `平手。\n你出了${playerChoice}\n電腦出了${computerChoice}`;
      break;
    case -1:
      result.innerText = `你輸了！\n你出了${playerChoice}\n電腦出了${computerChoice}`;
      break;
    case 1:
      result.innerText = `你贏了！\n你出了${playerChoice}\n電腦出了${computerChoice}`;
      break;
  }
}
// onClickPSS function to handle the game logic when the player clicks on a button to choose paper, scissors, or stone
function onClickPSS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
}

function playGame() {
  // querySelectorAll() method to select all the buttons with the class pssButton
  let pssButtons = document.querySelectorAll(".pssButton");

  // use forEach() method to loop through all the buttons and add an onclick event to each of them
  pssButtons.forEach((pssButton) => {
    pssButton.onclick = () => onClickPSS(pssButton);
  });

  
  let endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}

// endGame clears the player score, hands, and result
function endGame() {
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

playGame();
