function calculateAverage() {
    const number = document.getElementById('number').value;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
        count++;
    }

    const average = sum / count;

    document.getElementById('output').innerHTML = `The average of digits is ${average}`;
}
