function getFibonator() {
    let result = [];
    return function sum() {
        if (result.length == 0) {
            result.push(1);
        } else if (result.length == 1) {
            result.push(1);
        } else {
            let num = result[result.length - 2] + result[result.length - 1];
            result.push(num);
        }
        return result[result.length - 1];
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13