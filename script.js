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

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    switch(humanChoice) {
        case humanChoice == "rock" && computerChoice == "paper":
            console.log("You Lose! Paper beats Rock");
            ++computerScore;
            break;  
        
        case humanChoice == "paper" && computerChoice == "rock":
            console.log("You Win! Paper beats Rock");
            ++humanScore;
            break;

        case humanChoice == "rock" && computerChoice == "scissors":
            console.log("You Win! Rock beats Scissors");
            ++humanScore;
            break;

        case humanChoice == "scissors" && computerChoice == "rock":
            console.log("You Lose! Rock beats Scissors");
            ++computerScore;
            break;   

        case humanChoice == "scissors" && computerChoice == "paper":
            console.log("You Win! Scissors beats Paper");
            ++humanScore;

        case humanChoice == "paper" && computerChoice == "scissors":
            console.log("You Lose! Scissors beat Paper");
            ++computerScore;
            break;

        default:
            console.log(`It's a Draw you both played ${humanChoice}!`);
            break;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);