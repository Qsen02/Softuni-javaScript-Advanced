function sortingNumbers(inputArray) {
    let sortedArray = inputArray.sort((a, b) => a - b);
    let counter = inputArray.length;
    let result = [];
    for (let i = 0; i < counter; i++) {
        if (i % 2 == 0) {
            let firstEl = sortedArray.shift();
            result.push(firstEl);
        } else {
            let lastEl = sortedArray.pop();
            result.push(lastEl);
        }
    }
    return result;
}
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);