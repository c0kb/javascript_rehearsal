function calculateFactorial() {
    const number = parseInt(document.getElementById('number').value);

    let factorial = 1;

    if (number >= 0) {
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }

        document.getElementById('result').innerHTML = `${number} factorial is ${factorial}.`;
    } else {
        document.getElementById('result').innerHTML = `Please enter a non-negative number.`;
    }
}
