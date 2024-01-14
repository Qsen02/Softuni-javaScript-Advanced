function oddPositions(inputArray) {
    let oddElements = inputArray.filter((el, i) => i % 2 != 0).map(el => el * 2).reverse();
    return oddElements;
}
oddPositions([10, 15, 20, 25]);