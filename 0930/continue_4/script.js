function printNumbers() {
    let output = '';
    let count = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            count++;
            if (count % 3 === 1) {
                continue;
            } else if (count % 3 === 2) {
                continue;
            } else if (count % 3 === 0) {
                continue;
            }
        }
        output += i + ', ';
    }

    output = output.slice(0, -2);

    document.getElementById('output').innerHTML = output;
}
