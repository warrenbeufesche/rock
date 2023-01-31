/*
The Odin Project: Revisting Rock Paper Scissors
rock.js by Warren Beufesche, Nov 17 2022, Dec 5 2022, 
Paper COVERS Scissors, Rock SMASHES Scissors, Scissors CUTS Paper
*/

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
let player_score = document.getElementById('player_score');
let computer_score = document.getElementById('computer_score');
let result_text = document.getElementById('result_text');
rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

// Handle the player's click on Rock, Paper, Scissors 
function handleClick(playerSelection) {
  if (player_total >= 5 || computer_total >= 5) {
    return
  }
  const computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  console.log('RESULT = ' + result);
  if (result === 'tie') {
    result_text.textContent = 'a tie this round';  
  } else {
    result_text.textContent = result + ' won this round';
  }
  game(result);
}

// Generate the Computer's choice: rock, paper, or scissors
function getComputerChoice() {
  let random_number = Math.floor(Math.random() * 3);
  if (random_number === 0) {
    return 'rock';
  } else if (random_number === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Play a single round and return the result 
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'tie';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'computer';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'player';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'player';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'computer';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'computer';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'player';
  }
}

//  Determine the winner of the game, the first to five round wins 
let player_total = 0;
let computer_total = 0;
let tie_total = 0;
function game(result) {
  switch (result) {
    case 'player':
      player_total += 1;
      break;
    case 'computer':
      computer_total += 1;
  }
  player_score.textContent = player_total;
  computer_score.textContent = computer_total;
  console.log('PLAYER_TOTAL = ' + player_total);
  if (player_total >= 5) {
    result_text.textContent = 'THE PLAYER WON THE GAME';
  } else if (computer_total >= 5) {
    result_text.textContent = 'THE COMPUTER WON THE GAME';
  }
}

const reset = document.getElementById('resetBtn');
reset.addEventListener('click',() => resetGame());
function resetGame(){
  player_total = 0;
  computer_total = 0;
  tie_total = 0;
  location.reload();
}


/* 
Comment out Original Code 

function game() {
  let tie_score = 0;
  let computer_score = 0;
  let player_score = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    switch (result) {
      case 'tie':
        tie_score += 1;
        break;
      case 'computer':
        computer_score += 1;
        break;
      case 'player':
        player_score += 1;
    }
  }
}
game();

function getPlayerChoice() {
  let player_item;
  player_item = prompt('Enter rock, paper, or scissors');
  player_item = player_item.toLowerCase();
  if ((player_item === 'rock') || (player_item === 'paper') || (player_item === 'scissors')) {
    return player_item;
  } else {
    alert('Invalid Entry, Try Again');
  }
}
*/


