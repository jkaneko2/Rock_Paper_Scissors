let computerSelection;
let win = 0;
let loss = 0;
let tie = 0;

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
    let playerSelection = prompt('Rock, Paper, or Scissors?');

    playerSelection = playerSelection.toUpperCase();
    computerPlay();


    if (playerSelection == 'PAPER') {
        if (computerSelection == 'PAPER') {
            console.log('Tie!');
            return ++tie;
        } else if (computerSelection == 'ROCK') {
            console.log('You Win! Paper beats Rock');
            return ++win;
        } else {
            console.log('You lose! Scissors beats Paper');
            return ++loss;
        }
    } else if (playerSelection == 'ROCK') {
        if (computerSelection == 'PAPER') {
            console.log('You lose! Paper beats Rock');
            return ++loss;
        } else if (computerSelection == 'ROCK') {
            console.log('Tie');
            return ++tie;
        } else {
            console.log('You win! Rock beats Scissors');
            return ++win;
        }
    } else {
        if (computerSelection == 'PAPER') {
            console.log('You lose! Scissors beats Paper');
            return ++loss;
        } else if (computerSelection == 'ROCK') {
            console.log('You win! Rock beats Scissors');
            return ++win;
        } else {
            console.log('Tie');
            return ++tie;
        }
    }

    console.log(computerSelection);
    console.log(playerSelection);
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

game();