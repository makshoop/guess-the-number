let secretNumber;
let attempts = 0;
let maxAttempts = 3;
let minRange;
let maxRange;

function generateSecretNumber() {
    return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
}

function startGame() {
    minRange = parseInt(document.getElementById("minRange").value) || 1;
    maxRange = parseInt(document.getElementById("maxRange").value) || 100;
    
    if (minRange >= maxRange) {
        alert("Недопустимый диапазон. Пожалуйста, убедитесь, что минимальный диапазон меньше максимального.");
        return;
    }

    secretNumber = generateSecretNumber();
    attempts = 0;

    document.getElementById("result").innerHTML = "";
    document.getElementById("hint").innerHTML = "";
    document.getElementById("attempts").innerHTML = "";
    document.getElementById("userGuess").value = "";
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);

    if (isNaN(userGuess) || userGuess < minRange || userGuess > maxRange) {
        alert(`Пожалуйста, введите число в диапазоне от ${minRange} до ${maxRange}.`);
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        document.getElementById("result").innerHTML = `Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток.`;
        document.getElementById("hint").innerHTML = "";
    } else {
        document.getElementById("result").innerHTML = `Неверно. Загаданное число ${secretNumber > userGuess ? 'больше' : 'меньше'} вашего предположения.`;

        if (attempts % maxAttempts === 0) {
            document.getElementById("hint").innerHTML = `Подсказка: загаданное число ${secretNumber % 2 === 0 ? 'четное' : 'нечетное'}.`;
        }
    }

    document.getElementById("attempts").innerHTML = `Попыток: ${attempts}`;
}

function resetGame() {
    startGame();
}

window.onload = startGame;

