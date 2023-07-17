function solve(arr) {
    let heroes = [];

    arr.forEach((hero) => {

        let cmdArgs = hero.split(" / ");
        let name = cmdArgs[0];
        let level = cmdArgs[1];
        let items = cmdArgs[2];

        heroes.push({
            name,
            level,
            items
        });
    });

    //console.log(JSON.stringify(heroes));

    
    heroes.sort(function(a, b) {
        return a.level - b.level;
    });

    heroes.forEach((hero) => { 
    console.log(`Hero: ${hero.name}`),
    console.log(`level => ${hero.level}`),
    console.log(`items => ${hero.items}`)
});
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );