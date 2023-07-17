function solve(number) {
    let digitsToString = number.toString();
    let sum = 0;
    for (let index = 0; index < digitsToString.length; index++) {
        sum += Number(digitsToString[index]);
    }

    console.log(sum);
}

solve(245678);