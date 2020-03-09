var computerScore = 0;
var playerScore = 0;
            
//calls the button everytime user clicks; then runs the associated functions
const buttons = document.querySelectorAll('button');

//as soon as any button is clicked, runs playRound and results functions
buttons.forEach(button => {
    button.addEventListener('click', playRound);
    button.addEventListener('click', results);
});

//computer randomly selects Rock, Paper or Scissor
function computerPlay(){
    
    //generates random floating-point number between 0 and 1; inclusive of 0 but not 1
    var computerChoice = Math.random()
    
    if (computerChoice < 0.34) {
        return ('rock')
    } 

    //will not run code unless if statement above is false
    else if(computerChoice <= 0.67) {
        return ('paper')
    } 
    else {
        return ('scissors')
    } 
}
            
function playRound(button){

    //runs the function to determine who earns the point for the round 
    const playerSelection = button.target.id;
    const computerSelection = computerPlay();

    //based on the button select by player, will determine who receives point
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        alert("Rock beats Scissor! 1 Point!");
        return ("Rock beats Scissor! 1 Point!");
    }

    else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        alert("Paper beats Rock! 1 Point Computer!");
        return("Paper beats Rock! 1 Point Computer!");
    }

    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        alert("Paper beats Rock! 1 Point!");
        return("Paper beats Rock! 1 Point!");
    }

    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        alert("Scissor beats Paper! 1 Point Computer!");
        return("Scissor beats Paper! 1 Point Computer!");
    }

    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        alert("Scissor cuts Paper! 1 Point!");
        return("Scissor cuts Paper! 1 Point!");
    }

    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++;
        alert("Rock stomps Scissor! 1 Point Computer!");
        return("Rock stomps Scissor! 1 Point Computer!");
    }
    else if (playerSelection == computerSelection){
        alert("It's a tie! Try again!");
        return("It's a tie! Try again!");
    }

}

function results (){

    //displays the results of the current round and winner (first to 5 points) on the screen
    document.getElementById('score').innerHTML = "Computer: " + computerScore + " Player Score: " + playerScore; 

    //determines winner of the game
    if (computerScore == 5){
        document.getElementById('result').innerHTML = "Computer Wins the Game!"; 
    } 
    else if (playerScore == 5){
        document.getElementById('result').innerHTML = "You Win the Game!"; 
    }
}
