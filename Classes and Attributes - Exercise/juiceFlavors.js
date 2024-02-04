function juice(inputArray) {
    let juiceList = {};
    let bottlesList = [];
    for (let str of inputArray) {
        let [name, quantity] = str.split(" => ");
        quantity = Number(quantity);
        let bottles = quantity / 1000;
        if (!(name in juiceList)) {
            juiceList[name] = bottles;
        } else {
            juiceList[name] += bottles;
        }
        if (juiceList[name] >= 1 && !(bottlesList.includes(name))) {
            bottlesList.push(name);
        }
    }
    for (let juice of bottlesList) {
        if (juiceList[juice] < 1) {
            continue;
        }
        console.log(`${juice} => ${Math.floor(juiceList[juice])}`);
    }
}
juice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);