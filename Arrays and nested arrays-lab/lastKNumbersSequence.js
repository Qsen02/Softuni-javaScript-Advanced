function lastKNumbers(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let copy = result.slice(-k);
        sum = copy.reduce((acc, val) => acc + val);
        result.push(sum);
    }
    return result;
}
console.log(lastKNumbers(6, 3));