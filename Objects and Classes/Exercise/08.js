function solve(input) {

    let arr = [];

    input.forEach((entry) => {
        const [command, number] = entry.split(", ");

        if (command === "IN") {
            arr.push(number);
        }
        else{
            const index = arr.indexOf(number);
            arr.splice(index, 1);
        }
    });


    const sortedArr = arr.sort();

    
    if (sortedArr.length == 0) {
        console.log("Parking Lot is Empty");
        return;
    }

    for (const num of sortedArr) {
        console.log(num);
    }

}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);