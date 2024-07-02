// script.js
document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const resultDisplay = document.getElementById('game-result');
    
    const buttons = document.querySelectorAll('#choices button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.id;
            userChoiceDisplay.textContent = `Tu elección: ${userChoice}`;
            const computerChoice = getComputerChoice();
            computerChoiceDisplay.textContent = `Elección de la computadora: ${computerChoice}`;
            const result = getResult(userChoice, computerChoice);
            resultDisplay.textContent = result;
        });
    });

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Es un empate!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return '¡Ganaste!';
        } else {
            return 'Perdiste. Inténtalo de nuevo!';
        }
    }
});
