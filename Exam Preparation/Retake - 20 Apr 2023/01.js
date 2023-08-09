function solve(arr) {
    let input = arr.shift();

    let inputSplitted = input.split("|");

    let horses = [];

    inputSplitted.forEach(horse => {
        horses.push(horse);
    });

    let n = 0;

    while (arr[n] !== "Finish") {
        let currRow = arr[n].split(" ");

        let cmdType = currRow[0];
        if (cmdType === "Retake") {
            let overtaking = currRow[1];
            let overtaken = currRow[2];

            let overtakingIndex = arr.indexOf(overtaking);
            let overtakenIndex = arr.indexOf(overtaken);

            if (overtakingIndex < overtakenIndex) {
                arr[overtakenIndex] = overtaking;
                arr[overtakingIndex] = overtaken;
            }

            
        }
        else if (cmdType === "Trouble") {
            let horseName = currRow[1];

        }

        n++;
    }

    console.log(horses.join("->"));
}

solve((['Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish'])
);