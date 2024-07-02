// script.js
document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const resultDisplay = document.getElementById('result');
    const attemptsDisplay = document.getElementById('attempts');
    
    submitButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        attempts++;
        attemptsDisplay.textContent = `Intentos: ${attempts}`;
        
        if (userGuess === randomNumber) {
            resultDisplay.textContent = '¡Felicidades! ¡Adivinaste el número!';
            resultDisplay.style.color = 'green';
            guessInput.disabled = true;
            submitButton.disabled = true;
        } else if (userGuess < randomNumber) {
            resultDisplay.textContent = 'El número es mayor. Intenta de nuevo.';
            resultDisplay.style.color = 'red';
        } else {
            resultDisplay.textContent = 'El número es menor. Intenta de nuevo.';
            resultDisplay.style.color = 'red';
        }
    });
});
