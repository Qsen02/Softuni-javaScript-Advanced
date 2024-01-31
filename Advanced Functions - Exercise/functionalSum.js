function addToSum(curSum) {
    let sum = curSum || 0;

    function add(num) {
        sum += num;
        return add;
    }

    add.toString = function() {
        return sum;
    };

    return add;
}
console.log(add(1).toString());
console.log(add(3).toString());