function sumFirstAndLast(inputArray) {
    let first = Number(inputArray.shift());
    let last = Number(inputArray.pop());
    let sum = first + last;
    return sum;
}
sumFirstAndLast(['20', '30', '40']);