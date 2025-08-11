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
    if (humanChoice == "rock" && computerChoice =="paper"){
        console.log("You Lose! Paper beats Rock");
        ++computerScore;
    } else if (humanChoice == "paper" &&  computerChoice == "rock"){
        console.log("You Win! Paper beats Rock");
        ++humanScore;
    }

   
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);