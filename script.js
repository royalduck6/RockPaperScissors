function playGame(computerMove, playerMove) {
    if (playerMove == "rock") {
        switch (computerMove) {
            case "rock":
                console.log("The computer played rock");
                console.log("Tie");
                break;
            case "paper":
                console.log("The computer played paper");
                console.log("Computer wins");
                setWinstreak("computer")
                break;
            case "scissors":
                console.log("The computer played scissors");
                console.log("Player wins!");
                setWinstreak("player")
                break;
        }
    } else if (playerMove == 'paper') {
        switch (computerMove) {
            case "rock":
                console.log("The computer played rock");
                console.log("Player Wins!")
                setWinstreak("player")
                break;
            case "paper":
                console.log("The computer played paper");
                console.log("Tie")
                break;
            case "scissors":
                console.log("The computer played scissors");
                console.log("Computer wins");
                setWinstreak("computer")
                break;
    }
    } else {
        switch (computerMove) {
            case "rock":
                console.log("The computer played rock");
                console.log("Computer wins");
                setWinstreak("computer");
                break;
            case "paper":
                console.log("The computer played paper");
                console.log("Player wins!");
                setWinstreak("player");
                break;
            case "scissors":
                console.log("The computer played scissors");
                console.log("Tie")
                break;
                }
    }
}
function setWinstreak(winner) {
    if (winstreak[1] == winner) {
                winstreak[0]++;
                } else {
                    winstreak[0] = 1;
                    winstreak[1] = winner
                }
}
function setMoves() {
    let playerMove = prompt("Choose a move (rock/paper/scissors)");
    let computerMove= computerMoves[Math.floor(Math.random() * 3)];
    return [playerMove, computerMove];
}
function gameLoop() {
    let [playerMove, computerMove] = setMoves();
    playGame(playerMove, computerMove);
    console.log(`The ${winstreak[1]} has a winstreak of ${winstreak[0]}`);
    again = prompt("Play again (y/n)");
    if (again == "y") {
        gameLoop();
    }
}

let winstreak = [0, "player"]
const computerMoves = ["rock", "paper", "scissors"];

gameLoop();
