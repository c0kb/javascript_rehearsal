function drawSquare() {
    const size = parseInt(document.getElementById('size').value);

    if (size < 2) {
        document.getElementById('squareOutput').innerHTML = "Please enter a number greater than or equal to 2.";
        return;
    }

    let square = '';

    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
                row += '%';
            } else {
                row += ' ';
            }
        }
        square += row + '\n';
    }

    document.getElementById('squareOutput').innerHTML = square;
}
