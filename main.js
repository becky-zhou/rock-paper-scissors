//var userInput = prompt("Please choose from rock, paper, or scissor.")
userInput = ''; 
function getUserChoice(userInput) { 
    userInput = userInput.toLowerCase(); 
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput; 
    } else {
        return 'You have enter an invaild input';  
    }
};


function getComputerChoice() {
    let num1 = Math.floor(Math.random() * 3);
    if (num1 === 0) {
        return 'rock'; 
    } else if (num1 === 1) {
        return 'paper'; 
    } else {
        return 'scissors'; 
    }
}

function determineWinner(userChoice, computerChoice) {
    if (getUserChoice(userInput) === 'bomb') {
        console.log('YOU WON!')
    } else if (getUserChoice(userInput) === getComputerChoice ()) {
        console.log('Tied'); 
    } else if (getUserChoice(userInput) === 'paper'){
            if (getComputerChoice() === 'rock') { 
                console.log('U won!');
            } else {
                console.log('U LOST!');
            } 
    } else if (getUserChoice(userInput) === 'rock') {
            if (getComputerChoice() === 'paper') {
                console.log('YOU LOSE!'); 
            } else {
                console.log('You won... FOR NOW!'); 
            }
    } else {
        if (getComputerChoice() === 'rock') {
            console.log('You LOSE!'); 
        } else {
            console.log('You won...'); 
        }
    }
};

console.log(determineWinner('rock', 'paper')); 



function playGame() {
    userChoice = getUserChoice('rock'); 
    computerChoice = getComputerChoice(); 
    console.log(determineWinner(userChoice, computerChoice)); 
 };



