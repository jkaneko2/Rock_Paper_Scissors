let computerSelection;
let playerSelection;
let win = 0;
let loss = 0;
let tie = 0;
let currentScore = 0;
let result;

function computerPlay() {
    let compValue = Math.floor(Math.random() * 3);
    if (compValue == 0) {
        computerSelection = 'ROCK';
    } else if (compValue == 1) {
        computerSelection = 'PAPER';
    } else {
        computerSelection = 'SCISSORS';
    }
    return computerSelection;
}

function playRound() {
    //let playerSelection = prompt('Rock, Paper, or Scissors?');

    playerSelection = playerSelection.toUpperCase();
    computerPlay();


    if (playerSelection == 'PAPER') {
        if (computerSelection == 'PAPER') {
            result = 'Tie!';
            return ++tie;
        } else if (computerSelection == 'ROCK') {
            result = 'You Win! Paper beats Rock';
            return ++win;
        } else {
            result = 'You lose! Scissors beats Paper';
            return ++loss;
        }
    } else if (playerSelection == 'ROCK') {
        if (computerSelection == 'PAPER') {
            result = 'You lose! Paper beats Rock';
            return ++loss;
        } else if (computerSelection == 'ROCK') {
            result = 'Tie';
            return ++tie;
        } else {
            result = 'You win! Rock beats Scissors';
            return ++win;
        }
    } else {
        if (computerSelection == 'PAPER') {
            result = 'You win! Scissors beats Paper';
            return ++loss;
        } else if (computerSelection == 'ROCK') {
            result = 'You lose! Rock beats Scissors';
            return ++win;
        } else {
            result = 'Tie';
            return ++tie;
        }
    }
    return result; 
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log(win);
    console.log(loss);
    console.log(tie);

    if (win > loss) {
        console.log('Congratulations! You are the winner!');
    } else if (win < loss) {
        console.log('You are a loser!');
    } else {
        console.log('You tied!');
    }
}

const resultDisplay = document.querySelector('#results');

const playerScore = document.createElement('div');
playerScore.textContent = 'Player Score = 0';
const computerScore = document.createElement('div');
computerScore.textContent = 'Computer Score = 0';

resultDisplay.appendChild(playerScore);
resultDisplay.appendChild(computerScore);

const select = document.querySelectorAll('button');
select.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRound();
        if (win == 5) {
            playerScore.innerHTML = 'You are the winner!';
            computerScore.innerHTML = '';
            win = 0;
            loss = 0;
        } else if (loss == 5) {
            playerScore.innerHTML = 'You lost!';
            computerScore.innerHTML = '';
            win = 0;
            loss = 0;
        } else {
            playerScore.innerHTML = 'Player Score = ' + win;
            computerScore.innerHTML = 'Computer Score = ' + loss;
        }
    });
});

