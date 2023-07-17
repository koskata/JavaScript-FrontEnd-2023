function solve(number) {
    let digitsToString = number.toString();
    let num = Number(digitsToString[0]);

    let isEnd = true;

    let sum = 0;

    for (let index = 0; index < digitsToString.length; index++) {
        if (Number(digitsToString[index]) !== num) {
            isEnd = false;
        }
        sum += Number(digitsToString[index]);
    }

    console.log(isEnd);
    console.log(sum);
}

solve(2222222);