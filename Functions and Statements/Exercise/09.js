function loadingBar(number) {
    let string = "";

    let percentCount = number / 10;

    for (let i = 0; i < percentCount; i++) {
        string += '%';
    }

    for (let i = 0; i < 10 - percentCount; i++) {
        string += '.';
    }

    if (number === 100) {
        console.log(`100% Complete!`);
        console.log(`[${string}]`);
    }
    else {
        console.log(`${number}% [${string}]`);
        console.log("Still loading...");
    }
}

loadingBar(30)