function factorialDivision(num1, num2) {
    function firstFactorial() {
        let sum = 1;
        for (let i = 1; i <= num1; i++) {
            sum *= i;
        }
        return sum;
    }

    function secondFactorial() {
        let sum = 1;
        for (let i = 1; i <= num2; i++) {
            sum *= i;
        }
        return sum;
    }

    return (firstFactorial() / secondFactorial()).toFixed(2);
}

const num = factorialDivision(5, 2);
console.log(num);