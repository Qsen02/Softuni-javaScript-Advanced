function townsToJSON(inputArray) {
    inputArray.shift();
    let towns = [];
    for (let command of inputArray) {
        let [townName, latitude, longitude] = command.split("|").map(el => el.trim()).filter(el => !!el);
        latitude = Number(latitude);
        longitude = Number(longitude);
        latitude = latitude.toFixed(2);
        longitude = longitude.toFixed(2);
        let town = {
            Town: townName,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }
        towns.push(town);
    }
    let result = JSON.stringify(towns);
    console.log(result);
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);