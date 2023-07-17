function biggest(num1, num2, num3) {
    let biggestNum;
    if (num1 > num2) {
        if (num1 > num3) {
            biggestNum = num1;
        }
    }
    if (num2 > num1) {
        if (num2 > num3) {
            biggestNum = num2;
        }
    }

    if (num3 > num1) {
        if (num3 > num2) {
            biggestNum = num3;
        }
    }

    console.log(`The largest number is ${biggestNum}.`);
}

biggest(5, 3, 16);