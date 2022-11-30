var userInput = prompt("Please choose from rock, paper, or scissors.")

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
    if (userChoice === 'bomb') {
        return 'YOU WON!'
    } else if (userChoice === computerChoice) {
        return 'Tied'; 
    } else if (userChoice === 'paper'){
            if (computerChoice === 'rock') { 
                return 'U won!';
            } else {
                return 'U LOST!';
            } 
    } else if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'YOU LOSE!'; 
            } else {
                return 'You won... FOR NOW!'; 
            }
    } else {
        if (computerChoice === 'rock') {
            return 'You LOSE!'; 
        } else {
            return 'You won...'; 
        }
    }
}; 




function playGame() {
    userChoice = getUserChoice(userInput); 
    computerChoice = getComputerChoice(); 
    console.log(userInput); 
    console.log(computerChoice); 
    console.log(determineWinner(userChoice, computerChoice)); 
 };


 playGame(); 


/*
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

// inside the function, I should have pass in the parameters
//do not use console.log, use return 
//test functions before moving on (on the website console) 
//log out each player's choice to see if everything is working properly
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


*/

