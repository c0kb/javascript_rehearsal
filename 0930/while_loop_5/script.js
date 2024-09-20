function printDivisors() {
    let output = '';
    let number = 10;

    while (number <= 30) {
        output += number + ': ';
        let divisor = 1;

        while (divisor <= number) {
            if (number % divisor === 0) {
                output += divisor + ', ';
            }
            divisor++;
        }

        output = output.slice(0, -2) + '\n';
        number++;
    }

    document.getElementById('output').innerHTML = output;
}
