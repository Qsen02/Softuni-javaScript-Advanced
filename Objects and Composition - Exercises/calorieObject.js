function calorieObject(inputArray) {
    let foods = {};
    for (let i = 0; i < inputArray.length; i += 2) {
        let foodName = inputArray[i];
        let calories = Number(inputArray[i + 1]);
        foods[foodName] = calories;
    }
    console.log(foods);
}
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);