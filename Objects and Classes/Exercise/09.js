function solve(input) {
    let dictionary = {};
    for (const el of input) {
        let currEl = JSON.parse(el);
        let key = Object.keys(currEl);
        let value = Object.values(currEl);
        dictionary[key] = value;
    }

    Object.entries(dictionary).sort((a,b)=>a[0].localeCompare(b[0])).forEach(x => console.log(`Term: ${x[0]} => Definition: ${x[1]}`));
}

solve([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]);