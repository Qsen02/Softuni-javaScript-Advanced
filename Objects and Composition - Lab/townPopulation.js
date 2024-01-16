function townPopulation(inputArray) {
    let towns = {};
    for (let command of inputArray) {
        let [name, population] = command.split(" <-> ");
        population = Number(population);
        if (name in towns) {
            towns[name] += population;
        } else {
            towns[name] = population;
        }
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);