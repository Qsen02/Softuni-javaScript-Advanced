function cityPrices(inputArray) {
    let products = {};
    for (let command of inputArray) {
        let [town, productName, price] = command.split(" | ");
        price = Number(price);
        if (!(productName in products)) {
            products[productName] = { town, price };
        } else {
            if (price < products[productName].price) {
                products[productName].price = price;
                products[productName].town = town;
            }
        }
    }
    for (let product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}
cityPrices(["Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "Mexico City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Washington City | Mercedes | 1000"
]);