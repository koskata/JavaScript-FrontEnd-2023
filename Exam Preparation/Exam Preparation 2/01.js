function solve(list) {
    let input = list.shift();
    let collection = [];

    input = input.split("!");

    input.forEach(product => {
        collection.push(product);
    });


    let n = 0;

    while (list[n] !== "Go Shopping!") {
        
        let curr = list[n];
        curr = curr.split(" ");

        let cmdType = curr[0];

        if (cmdType === "Urgent") {
            if (!collection.includes(curr[1])) {
                collection.unshift(curr[1]);
            }
        }
        else if (cmdType === "Unnecessary") {
            if (collection.includes(curr[1])) {
                const index = collection.indexOf(curr[1]);
                collection.splice(index, 1);
            }
        }
        else if (cmdType === "Correct") {
            let oldItem = curr[1];
            let newItem = curr[2];

            if (collection.includes(oldItem)) {
                const index = collection.indexOf(oldItem);
                collection.splice(index, 1, newItem);
                //collection.splice(index, 1, newItem);
            }
        }
        else if (cmdType === "Rearrange") {
            if (collection.includes(curr[1])) {
                const index = collection.indexOf(curr[1]);
                collection.splice(index, 1);
                collection.push(curr[1]);
            }
        }

        n++;
    }

    console.log(collection.join(", "));
}

solve((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
);