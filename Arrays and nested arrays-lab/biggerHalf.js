function biggerHalf(inputArray) {
    let sortedArray = inputArray.sort((a, b) => a - b);
    let copy = inputArray.slice(-Math.ceil(sortedArray.length / 2));
    return copy;
}
biggerHalf([4, 7, 2, 5]);