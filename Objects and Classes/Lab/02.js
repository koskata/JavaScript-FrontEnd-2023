function cityInfo(object) {
    let entries = Object.entries(object);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);