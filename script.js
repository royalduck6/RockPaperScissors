function playGame(computerMove, playerMove) {
    if (playerMove == "rock") {
        switch (computerMove) {
            case "rock":
                console.log("You played rock and the computer played rock");
                console.log("Tie");
                break;
            case "paper":
                console.log("You played rock and the computer played paper");
                console.log("Computer wins");
                setScore("computer")
                break;
            case "scissors":
                console.log("You played rock and the computer played scissors");
                console.log("Player wins!");
                setScore("player")
                break;
        }
    } else if (playerMove == 'paper') {
        switch (computerMove) {
            case "rock":
                console.log("You played paper and the computer played rock");
                console.log("Player Wins!")
                setScore("player")
                break;
            case "paper":
                console.log("You played paper and the computer played paper");
                console.log("Tie")
                break;
            case "scissors":
                console.log("You played paper and the computer played scissors");
                console.log("Computer wins");
                setScore("computer")
                break;
    }
    } else {
        switch (computerMove) {
            case "rock":
                console.log("You played scissors and the computer played rock");
                console.log("Computer wins");
                setScore("computer");
                break;
            case "paper":
                console.log("You played scissors and the computer played paper");
                console.log("Player wins!");
                setScore("player");
                break;
            case "scissors":
                console.log("You played scissors and the computer played scissors");
                console.log("Tie")
                break;
                }
    }
}
function setScore(winner) {
    score[winner]++;
}
function setMoves() {
    let playerMove = prompt("Choose a move (rock/paper/scissors)");
    let computerMove= computerMoves[Math.floor(Math.random() * 3)];
    return [playerMove, computerMove];
}
function gameLoop() {
    let [playerMove, computerMove] = setMoves();
    playGame(playerMove, computerMove);
    console.log(`The score is Player : ${score["player"]} to Computer : ${score["computer"]}`);
    gamesPlayed++;
    if (gamesPlayed !== 5) {
        gameLoop();
    }
}

let gamesPlayed = 0;
let score = {
    "player": 0,
    "computer": 0,
}
const computerMoves = ["rock", "paper", "scissors"];

gameLoop();
