function solve(arr) {
    let n = Number(arr.shift());

    let riders = [];

    for (let i = 0; i < n; i++) {
        let curr = arr[0].split("|");

        let name = curr[0];
        let fuelCapacity = Number(curr[1]);
        let position = Number(curr[2]);

        riders.push({rider: name, fuelCapacity: fuelCapacity, position: position});

        arr.shift();
    }


    arr.forEach(command => {
        let curr = command.split(" - ");

        let cmdType = curr[0];

        if (cmdType === "StopForFuel") {
            let rider = curr[1];
            let minimumFuel = Number(curr[2]);
            let changedPosition = Number(curr[3]);

            let riderToFind = riders.find(x => x.rider === rider);

            if (riderToFind.fuelCapacity < minimumFuel) {
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                riderToFind.position = changedPosition;
            }
            else {
                console.log(`${rider} does not need to stop for fuel!`);
            }

            //console.log(riderToFind.fuelCapacity);
        }
        else if (cmdType === "Overtaking") {
            let rider1 = curr[1];
            let rider2 = curr[2];

            let index = riders.findIndex(x => x.rider === rider1);
            let index2 = riders.findIndex(x => x.rider === rider2);
            let rider1Position = riders[index].position;
            let rider2Position = riders[index2].position;

            if (rider1Position < rider2Position) {


                riders[index2].position = rider1Position;
                riders[index].position = rider2Position;

                console.log(`${rider1} overtook ${rider2}!`);

                //console.log(JSON.stringify(riders));
                //console.log(temp);
            }

            //console.log(index);
            //console.log(index2);
        }
        else if (cmdType === "EngineFail") {
            let rider = curr[1];
            let lapsLeft = Number(curr[2]);

            let index = riders.findIndex(x => x.rider === rider);

            
            riders.splice(index, 1);

            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);

            //console.log(JSON.stringify(riders));
        }
        else if (cmdType === "Finish") {
            riders.forEach(rider => {
                console.log(rider.rider);
                console.log(`  Final position: ${rider.position}`);
            });
        }

        //console.log(curr);
    });

    //console.log(JSON.stringify(riders));
}

solve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);