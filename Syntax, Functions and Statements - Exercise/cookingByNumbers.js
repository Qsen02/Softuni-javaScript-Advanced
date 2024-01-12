function cookingByNumbers(numAsStr, ...operations) {
    let num = Number(numAsStr);
    let actions = {
        chop: num => num / 2,
        dice: num => Math.sqrt(num),
        spice: num => num + 1,
        bake: num => num * 3,
        fillet: num => num * 0.80
    }
    operations.forEach((el) => {
        num = actions[el](num);
        console.log(num);
    })
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');