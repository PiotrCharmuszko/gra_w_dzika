let interval;
let score = 0;
let currentNumber = 1;

function startGame() {
    score = 0;
    currentNumber = 1;
    document.getElementById("score").innerText = "Wynik: 0";
    document.getElementById("start-button").disabled = true; 
    generateNumber();
    interval = setInterval(generateNumber, 500);
}

function generateNumber() { 
    document.getElementById("number-display").innerText = currentNumber; 

    let isCorrectClick = (currentNumber % 7 === 0 || String(currentNumber).includes('7'));

    document.getElementById("dzik").onclick = function() {
        if (isCorrectClick) {
            score++; 
            document.getElementById("score").innerText = `Wynik: ${score}`;
           
        } else {
            endGame(); 
        }
    };

    currentNumber++; 
}

function endGame() {
    clearInterval(interval); 
    document.getElementById("start-button").disabled = false; 
    alert("Gra zakończona! Twój wynik to: " + score); 
}

document.getElementById("start-button").addEventListener("click", startGame);