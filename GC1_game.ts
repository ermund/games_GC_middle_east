function checkInput(input) {
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2);
    }
}

function playLotto() {
    const userNumbers = [
        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value)
    ];

    if (userNumbers.includes(NaN)) {
        alert('Please enter valid numbers between 01 and 31.');
        return;
    }

    const lottoNumbers = generateLottoNumbers();
    const matchedNumbers = userNumbers.filter(num => lottoNumbers.includes(num));

    document.getElementById('results').innerHTML = `
        <p>Your numbers: ${formatNumbers(userNumbers).join(', ')}</p>
        <p>Lotto numbers: ${formatNumbers(lottoNumbers).join(', ')}</p>
        <p>You matched ${matchedNumbers.length} number(s): ${formatNumbers(matchedNumbers).join(', ')}</p>
    `;
}

function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 2) {
        const num = Math.floor(Math.random() * 31) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

function formatNumbers(numbers) {
    return numbers.map(num => num.toString().padStart(2, '0'));
}
