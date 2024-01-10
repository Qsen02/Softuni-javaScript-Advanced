function agregateElements(inputArray) {
    let sumation = sum(inputArray);
    let inverse = inverseSum(inputArray);
    let concatination = concat(inputArray);
    console.log(sumation);
    console.log(inverse);
    console.log(concatination);
}

function sum(arr) {
    let sum = arr.reduce((acc, val) => acc + val);
    return sum;
}

function inverseSum(arr) {
    let inverseArr = arr.map(el => 1 / el);
    let inverseSum = inverseArr.reduce((acc, val) => acc + val);
    return inverseSum;
}

function concat(arr) {
    let strArr = arr.map(String);
    let concat = strArr.reduce((acc, val) => acc + val);
    return concat;
}
agregateElements([2, 4, 8, 16]);