/* rock.js by Warren Beufesche, November 17, 2022 */

/*  Rock, Paper, Scissors Game. 
    Paper COVERS Scissors
    Rock SMASHES Scissors
    Scissors CUTS Paper */

/* Generate the Player's choice: rock, paper, or scissors */
function getPlayerChoice() {
  let player_item;
  player_item = prompt("Enter rock, paper, or scissors");
  player_item = player_item.toLowerCase();
  if ((player_item === "rock") || (player_item === "paper") || (player_item === "scissors")) {
    return player_item;
  } else {
    alert("Invalid Entry, Try Again");
  }
}

/* Generate the Computer's choice: rock, paper, or scissors */
function getComputerChoice() {
  let random_number = Math.floor(Math.random() * 3);
  if (random_number === 0) {
    return "rock";
  } else if (random_number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

/* Play a single game and return the result */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "computer";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "player";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "player";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "computer";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "computer";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "player";
  }
}

/* Play a five round game */
function game() {
  let tie_score = 0;
  let computer_score = 0;
  let player_score = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    switch (result) {
      case "tie":
        tie_score += 1;
        console.log("It is a tie");
        break;
      case "computer":
        computer_score += 1;
        console.log("The Computer wins");
        break;
      case "player":
        player_score += 1;
        console.log("The Playa wins");
    }
  }
  console.log("Player: " + player_score + " Computer: " + computer_score + "  Ties: " + tie_score);
}
game();




