function arraySum(array, start, end) {
    if (!Array.isArray(array)) {
        return NaN;
    }
    for (let el of array) {
        if (typeof(el) !== "number") {
            return NaN;
        }
    }
    if (start < 0) {
        start = 0;
    }
    if (end > array.length - 1) {
        end = array.length - 1;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        let element = array[i];
        sum += element;
    }
    return sum;
}
console.log(arraySum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));