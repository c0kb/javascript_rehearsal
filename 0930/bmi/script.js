function calculateBMI() {
    const mass = parseFloat(document.getElementById('mass').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = mass / (height * height);

    document.getElementById('bmiResult').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
}
