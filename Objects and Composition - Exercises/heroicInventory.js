function inventory(inputArray) {
    let register = [];
    for (let str of inputArray) {
        let [heroName, level, items] = str.split(" / ");
        let itemsArr = items ? items.split(", ") : [];
        let hero = {
            name: heroName,
            level: Number(level),
            items: itemsArr
        }
        register.push(hero);
    }
    let jsonRegiter = JSON.stringify(register);
    console.log(jsonRegiter);
}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);