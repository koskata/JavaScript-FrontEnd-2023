function solve(string, searchedWord) {
    let counter = 0;
    let words = string.split(' ');
    for (let word of words) {
        if (word === searchedWord) {
            counter++;
        }
    }

    console.log(counter);
}

solve('This is a word and it also is a sentence', 'is');