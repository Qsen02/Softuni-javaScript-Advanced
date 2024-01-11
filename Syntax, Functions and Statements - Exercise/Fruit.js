function fruits(fruit, grams, moneyPerKilogram) {
    let kilograms = grams / 1000;
    let price = kilograms * moneyPerKilogram;
    console.log(`I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}
fruits('orange', 2500, 1.80);