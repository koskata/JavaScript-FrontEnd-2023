function solve(arr) {
    let n = Number(arr.shift());

    //console.log(arr[n]);

    let collection = {};

    for (let i = 0; i < n; i++) {
        let curr = arr[i].split("|");
        //console.log(curr[0]);
        let piece = curr[0];
        let composer = curr[1];
        let key = curr[2];

        if (!collection.hasOwnProperty(piece)) {
            collection[piece] = [];
        }
        
        collection[piece] = {"composer": composer, "key": key};
    }

    while (arr[n] !== "Stop") {

        let curr = arr[n].split("|");
        let cmdType = curr[0];
        if (cmdType === "Add") {
            let piece = curr[1];
            let composer = curr[2];
            let key = curr[3];

            if (collection.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            }
            else {
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                collection[piece] = {"composer": composer, "key": key};
            }
        }
        else if (cmdType === "Remove") {
            let piece = curr[1];

            if (!collection.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
            else {
                console.log(`Successfully removed ${piece}!`);
                delete collection[piece];
            }
        }
        else if (cmdType === "ChangeKey") {
            let piece = curr[1];
            let newKey = curr[2];

            if (!collection.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
            else {
                console.log(`Changed the key of ${piece} to ${newKey}!`);
                collection[piece].key = newKey;
            }
        }


        n++;
    }


    let entries = Object.entries(collection);
    for (const [piece, info] of entries) {
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}

solve([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'  
]
);