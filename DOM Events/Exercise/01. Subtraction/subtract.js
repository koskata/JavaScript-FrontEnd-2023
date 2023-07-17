function subtract() {
    let firstInput = Number(document.getElementById('firstNumber').value);
    let secondInput = Number(document.getElementById('secondNumber').value);

    let sum = firstInput - secondInput;

    let result = document.getElementById('result');
    result.textContent = sum;
}