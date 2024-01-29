function sorting(inputArray, order) {
    let orders = {
        asc: inputArray => inputArray.sort((a, b) => a - b),
        desc: inputArray => inputArray.sort((a, b) => b - a)
    }
    if (order == "asc") {
        return orders.asc(inputArray);
    } else {
        return orders.desc(inputArray);
    }
}
console.log(sorting([14, 7, 17, 6, 8], 'desc'));