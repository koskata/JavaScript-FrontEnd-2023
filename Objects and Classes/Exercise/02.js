function townsInfo(input) {

    for (let i = 0; i < input.length; i++) {

        let object = {};

        const info = input[i].split(" | ");

        const town = info[0];
        const lati = Number(info[1]);
        const long = Number(info[2]);

        object.town = town;
        object.latitude = lati.toFixed(2);
        object.longitude = long.toFixed(2);

        console.log(object);
    }
}


townsInfo(
    ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);