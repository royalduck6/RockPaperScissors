function playGame(computerMove, playerMove) {
    if (playerMove == "rock") {
        switch (computerMove) {
            case "rock":
                winMessage.innerHTML = "You played rock and the computer played rock, tie"
                break;
            case "paper":
                winMessage.innerHTML = "You played rock and the computer played paper, computer wins"
                setScore("computer")
                break;
            case "scissors":
                winMessage.innerHTML = "You played rock and the computer played scissors, you win"
                setScore("player")
                break;
        }
    } else if (playerMove == 'paper') {
        switch (computerMove) {
            case "rock":
                winMessage.innerHTML = "You played paper and the computer played rock, you win"
                setScore("player")
                break;
            case "paper":
                winMessage.innerHTML = "You played paper and the computer played paper, tie"
                break;
            case "scissors":
                winMessage.innerHTML = "You played paper and the computer played scissors, computer wins"
                setScore("computer")
                break;
    }
    } else {
        switch (computerMove) {
            case "rock":
                winMessage.innerHTML = "You played scissors and the computer played rock, computer wins"
                setScore("computer");
                break;
            case "paper":
                winMessage.innerHTML = "You played scissors and the computer played paper, you win"
                setScore("player");
                break;
            case "scissors":
                winMessage.innerHTML = "You played scissors and the computer played scissors, tie"
                break;
                }
    }
}
function setScore(winner) {
    score[winner]++;
}
function gameLoop(playerMove) {
    if (score["player"] + score["computer"] != 5) {
    let computerMove = computerMoves[Math.floor(Math.random() * 3)];
    playGame(computerMove, playerMove);
    scoreText.innerHTML = (`Player | ${score["player"]} <br> Computer | ${score["computer"]}`);
    if (score["player"] + score["computer"] == 5) {
        if (score["player"] > score["computer"]) {
            winMessage.innerHTML = "You win"
        } else {
            winMessage.innerHTML = "You lose"
        }
    }
}
}

let score = {
    "player": 0,
    "computer": 0,
}
const computerMoves = ["rock", "paper", "scissors"];
const rockButton = document.querySelector("#rock_button");
const paperButton = document.querySelector("#paper_button");
const scissorsButton = document.querySelector("#scissors_button");
const winMessage = document.querySelector("#win_message");
const scoreText = document.querySelector("#score_text");

rockButton.addEventListener("click", () => {
    let playerMove = "rock"
    gameLoop(playerMove)
});
paperButton.addEventListener("click", () => {
    let playerMove = "paper"
    gameLoop(playerMove)
});
scissorsButton.addEventListener("click", () => {
    let playerMove = "scissors"
    gameLoop(playerMove)
});

