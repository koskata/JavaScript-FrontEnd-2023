function calcNums(num1, num2, operator) {
    switch (operator) {
        case "multiply":
            console.log(num1 * num2);
            break;
        case "divide":
            console.log(num1 / num2);
            break;
        case "add":
            console.log(num1 + num2);
            break;
        case "subtract":
            console.log(num1 - num2);
            break;
        default:
            break;
    }
}

calcNums(5,5,"multiply");