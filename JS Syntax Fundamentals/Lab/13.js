function solve(input) {
    let evenSum = 0;
    let oddSum = 0;
    for(i = 0; i < input.length; i++){
        if (input[i] % 2 == 0) {
            let number = Number(input[i]);
            evenSum += number;
        }
        else{
            let number = Number(input[i]);
            oddSum += number;
        }
    }

    console.log(evenSum - oddSum);
}

solve([1,2,3,4,5,6]);