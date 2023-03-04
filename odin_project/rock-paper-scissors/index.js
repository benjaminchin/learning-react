const hands = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return Math.floor(Math.random() * (2 + 1)); // return random int 0-2 inclusive
}

function win(computerChoice, playerChoice) {
    return "You win!" + computerChoice + " beats " + playerChoice;
    
}

function lose(computerChoice, playerChoice) {
    return "You lose!" + computerChoice + " beats " + playerChoice;
}

function playRound(computerChoice, playerChoice) {
    
    if (computerChoice == "rock") {
        if (playerChoice == "scissors") {
            return lose(computerChoice, playerChoice);
        }
        else if (playerChoice == "paper") {
            return win(computerChoice, playerChoice);
        }
    }

    else if (computerChoice == "paper") {
        if (playerChoice == "rock") {
            return lose(computerChoice, playerChoice);
        }
        else if (playerChoice == "scissors") {
            return win(computerChoice, playerChoice);
        }
    }

    else if (computerChoice == "scissors") {
        if (playerChoice == "paper") {
            return lose(computerChoice, playerChoice);
        }
        else if (playerChoice == "rock") {
            return win(computerChoice, playerChoice);
        }
    }
    return "Draw!";
}

function game() {
    let playerChoice = prompt("Rock, paper, or scissors: ");
    let computerChoice = getComputerChoice();
    playRound(computerChoice, playerChoice);
}

function main() {
    for (let i = 0; i < 5; i++) {
        game();
    }
}
