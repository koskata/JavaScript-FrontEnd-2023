function solve(input) {
    let searchedWords = input.shift().split(" ");
    let list = [];

    for (const word of searchedWords) {
        let counter = 0;
        for (let secWord of input) {
            if (word === secWord) {
                counter++;
            }
        }

        let currWord = {
            word,
            counter
        }

        list.push(currWord);
    }

    list.sort(function(a, b) {
        return b.counter - a.counter;
    });

    for (let word of list) {
        console.log(`${word.word} - ${word.counter}`);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
    );