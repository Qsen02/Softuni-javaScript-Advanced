function biggestElement(matrix) {
    let array = [];
    for (let arr of matrix) {
        array.push(...arr);
    }
    let biggestNum = Math.max(...array);
    return biggestNum;
}
biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);