function solve(start, end) {
    let sum = 0;
    let arr = [];
    for (let index = start; index <= end; index++) {
        sum += index;
        arr.push(index);
    }

    console.log(arr.join(" "));
    console.log(`Sum: ${sum}`);
}

solve(5, 10);