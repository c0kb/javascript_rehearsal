function printLetters() {
    const inputString = document.getElementById('inputString').value;
    let output = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (/^[a-zA-Z]$/.test(char)) {
            output += char + '\n';
        } else {
            break;
        }
    }

    document.getElementById('output').innerHTML = output || 'No letters found at the beginning.';
}
