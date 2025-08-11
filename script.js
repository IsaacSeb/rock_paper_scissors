function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;  

    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper"; 
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
 const humanChoice = prompt("Please pick ONE of the three choices: rock, paper or scissors ");
 return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, ComputerChoice){
    let humanChoice = humanChoice.toLowerCase();
    switch(humanChoice) {
        case humanChoice == "rock" && ComputerChoice == "paper":
            console.log("You Lose! Paper beats Rock");
            ++computerScore;
            break;  
        
        case humanChoice == "paper" && ComputerChoice == "rock":
            console.log("You Win! Paper beats Rock");
            ++humanScore;
            break;

        case humanChoice == "rock" && ComputerChoice == "scissors":
            console.log("You Win! Rock beats Scissors");
            ++humanScore;
            break;

        case humanChoice == "scissors" && ComputerChoice == "rock":
            console.log("You Lose! Rock beats Scissors");
            ++computerScore;
            break;   
    }

}