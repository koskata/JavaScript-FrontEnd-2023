function solve(input) {

    const employees = input.reduce((acc, curr) => {
        acc[curr] = curr.length;
        return acc;
    }, {});

    Object.keys(employees).forEach((key) => {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    })

    /* for (const key in input) {
        console.log(`Name: ${input[key]} -- Personal Number: ${input[key].length}`);
    } */
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );