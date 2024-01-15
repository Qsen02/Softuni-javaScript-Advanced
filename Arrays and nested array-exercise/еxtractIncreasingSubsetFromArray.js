function increasingSubset(inputArray) {
    let biggestOne = Number.MIN_SAFE_INTEGER;
    return inputArray.reduce((acc, val) => {
        if (val >= biggestOne) {
            biggestOne = val;
            acc.push(val);
        }
        return acc;
    }, []);
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