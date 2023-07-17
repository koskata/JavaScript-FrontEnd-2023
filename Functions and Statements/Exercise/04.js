function oddEvenSum(number) {

    let numberAsString = number.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        if (Number(numberAsString[i]) % 2 == 0) {
            evenSum += Number(numberAsString[i]);
        }
        else {
            oddSum += Number(numberAsString[i]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435);