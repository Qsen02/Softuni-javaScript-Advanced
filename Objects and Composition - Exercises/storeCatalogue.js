function catalogue(inputArray) {
    let catalogue = {}
    for (let command of inputArray) {
        let [productName, price] = command.split(" : ");
        let group = productName[0].toUpperCase();
        if (group in catalogue) {
            let product = { name: productName, price: price };
            catalogue[group].push(product);
        } else {
            let product = { name: productName, price: price };
            catalogue[group] = [product];
        }
    }
    let sortedArray = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));
    let sortedCatalogue = Object.fromEntries(sortedArray);
    for (let group in sortedCatalogue) {
        console.log(group);
        let sortedArray = sortedCatalogue[group].map(obj => Object.values(obj)).sort((a, b) => a[0].localeCompare(b));
        for (let product of sortedArray) {
            console.log("  " + product.join(": "));
        }
    }
}
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);