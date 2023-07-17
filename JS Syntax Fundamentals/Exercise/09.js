function solve(fruit, grams, kilogram) {
    let kilograms = grams / 1000;
    let money = kilograms * kilogram;

    console.log(`I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);