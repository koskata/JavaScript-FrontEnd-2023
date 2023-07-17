function printSum(product, quantity) {
    
    switch (product) {
        case "water":
            console.log((quantity * 1).toFixed(2));
            break;
        case "coffee":
            console.log((quantity * 1.50).toFixed(2));
            break;
        case "coke":
            console.log((quantity * 1.40).toFixed(2));
            break;
        case "snacks":
            console.log((quantity * 2).toFixed(2));
            break;
        default:
            break;
    }

}

printSum("water", 5);