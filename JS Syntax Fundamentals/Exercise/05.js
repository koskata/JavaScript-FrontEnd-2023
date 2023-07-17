function solve(n) {
    for (let index = 1; index <= 10; index++) {
        let result = n * index;
        console.log(`${n} X ${index} = ${result}`);
    }
}

solve(5);