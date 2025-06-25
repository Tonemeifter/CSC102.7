function playDiceGame(){
        const playerRoll = Math.floor(Math.random() * 6) + 1;
    const casinoRoll = Math.floor(Math.random() * 6) + 1;

    let resultMessage = `You rolled a ${playerRoll}. Casino rolled a ${casinoRoll}. `;
// Win, Tie, and Loss are all mixed up
    if (playerRoll > casinoRoll) {
        resultMessage += "You Win!";
    } else if (playerRoll < casinoRoll) {
        resultMessage += "You Lose!";
    } else {
        resultMessage += "It's a Tie!";
    }

    document.getElementById("gameResult").innerText = resultMessage
}

function displayUserMessage(name) {
    const message = `Good luck, ${name}! Let's see if fortune favors you today`;
    document.getElementById("userMessage").innerText = message;
}