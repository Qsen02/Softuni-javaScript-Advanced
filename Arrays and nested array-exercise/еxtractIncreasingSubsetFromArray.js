function increasingSubset(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        let prevEl = result[result.length - 1];
        let curEl = inputArray[i];
        if (prevEl == undefined) {
            result.push(curEl);
        } else if (curEl >= prevEl) {
            result.push(curEl);
        }
    }
    return result;
}
increasingSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);