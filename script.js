let playerScore = 0;
let computerScore = 0;

const img_src={rock:"./images/fist.png",paper:"./images/hand.png",scissors:"./images/win.png"}

// Load stored scores
if (localStorage.getItem('playerScore')) {
    playerScore = parseInt(localStorage.getItem('playerScore'));
    computerScore = parseInt(localStorage.getItem('computerScore'));
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

const choices = ['rock', 'paper', 'scissors'];
const resultMessage = document.getElementById('resultMessage');

// Event listeners for player choices
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const box=document.getElementById('choices');
    const res=document.getElementById('result');
    document.getElementById('choices').addEventListener('click', () => {
        box.style.display = 'none';     //hide the choicess
        res.style.display = 'flex'; 
    });
   

    
    
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = getResult(playerChoice, computerChoice);
    updateScores(result);
    showResult(result, playerChoice, computerChoice);
}

function getResult(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateScores(result) {
    if (result === 'win') {
        playerScore++;
        document.getElementById('playerScore').textContent = playerScore;
        localStorage.setItem('playerScore', playerScore);
        // Trigger celebration animation
        triggerCelebration();
    } else if (result === 'lose') {
        computerScore++;
        document.getElementById('computerScore').textContent = computerScore;
        localStorage.setItem('computerScore', computerScore);
    }
}

function showResult(result, playerChoice, computerChoice) {

    document.getElementById('palyer-icon').style.backgroundImage = `url(${img_src[playerChoice]})`;
    document.getElementById('palyer-icon').style.backgroundSize = 'cover'; // Optional: Make the background cover the element

    if (result === 'win') {
        resultMessage.textContent = `YOU WIN `;
    } else if (result === 'lose') {
        resultMessage.textContent = `YOU LOST`;
    } else {
        resultMessage.textContent = `TIE UP`;
    }
    document.getElementById('pc-icon').style.backgroundImage = `url(${img_src[computerChoice]})`;
    document.getElementById('pc-icon').style.backgroundSize = 'cover'; // Optional: Make the background cover the element

}

function triggerCelebration() {
    // Add celebration effect (e.g., confetti)
   

}

// Rules modal logic
const modal = document.getElementById("rulesModal");
const btn = document.getElementById("rulesButton");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const res=document.getElementById('result');
const replay = document.getElementById('choices');
document.getElementById('rep').addEventListener('click', () => {

        //hide the choicess
    replay.style.display = 'flex'; 
    res.style.display = 'none'; 

    
});

