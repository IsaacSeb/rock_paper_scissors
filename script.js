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
function playGame(){


function updateHumanScore(points){
    humanScore += points;
    return humanScore
}

function updateComputerScore(points){
    computerScore += points;
    return computerScore;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice =="paper"){
        console.log("You Lose! Paper beats Rock");
        updateComputerScore(1);
    } else if (humanChoice == "paper" &&  computerChoice == "rock"){
        console.log("You Win! Paper beats Rock");
        updateHumanScore(1);
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Win! Rock beats scissors");
        updateHumanScore(1);
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You Lose! Rock beats Scissors");
        updateComputerScore(1);
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win! Scissors beat Paper");
        updateHumanScore(1);
    } else if ( humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You Lose! Scissors beat Paper");
        updateComputerScore(1);
    } else if (humanChoice == computerChoice) {
        console.log(`It's a Draw! you both played ${humanChoice}`);
    }
    }
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
}
function getWinner(){
    if (humanScore > computerScore){
        console.log(`You win! you have: ${humanScore} & the Computer got ${computerScore}`)
    } else if (computerScore > humanScore){
        console.log(`You Lose! you have: ${humanScore} & the Computer got ${computerScore}`)
    }else if (computerScore == humanScore){
        console.log(`You Drew! you have: ${humanScore} & the Computer got ${computerScore}`)
    }
}

playGame();
getWinner();


