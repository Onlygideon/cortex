/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify the plater of the correct answer if loose
- Let player choose to play again
*/

// Game Values
let min = 1,
    max = 50,
    winningNum = getRandomNum(min, max),
    guessesLeft = 5;

// UI Elements  
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listener
game.addEventListener('mousedown', play); 

//play Function
function play(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    };
};
 

// guessBtn Event Listener
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);

   // Validate input
   if(isNaN(guess) || guess < min || guess > max ){;
       setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   };

   // Check if its the winning number
   if(guess === winningNum){;
    // Game Over - won

    gameOver(true,`${winningNum} is correct, YOU WIN!`,);
   
    } else{
    // Wrong Number
    guessesLeft = guessesLeft -1;
   
    if(guessesLeft === 0){
        // Game Over - Lost

        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    
    } else{
        // Game Continues - answer wrong
        // Change border color
        guessInput.style.borderColor = 'red';

        //Clear Input
        guessInput.value = '';
    };
   };
});

// Game Over
function gameOver(won, msg){
    let color;
    won === true ? color= 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true; 
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(msg);

    // Play Again?
    guessBtn.value = 'Play Again';
    //Add class
    guessBtn.className += 'play-again';
};

// Get Winning Number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
};

// Set Message
function setMessage(msg, color){
   message.style.color = color;
   message.textContent = msg;  
};