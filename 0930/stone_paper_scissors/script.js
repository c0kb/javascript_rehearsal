function determineWinner() {
    const player1 = parseInt(document.getElementById('player1').value);
    const player2 = parseInt(document.getElementById('player2').value);
    let output;

    if (player1 < 1 || player1 > 3 || player2 < 1 || player2 > 3) {
        output = "Please enter a valid number (1, 2, or 3) for both players.";
    } else if (player1 === player2) {
        output = "The game is a tie.";
    } else if (
        (player1 === 1 && player2 === 3) ||
        (player1 === 2 && player2 === 1) ||
        (player1 === 3 && player2 === 2)
    ) {
        output = "The first player wins.";
    } else {
        output = "The second player wins.";
    }

    document.getElementById('output').innerHTML = output;
}
