function solution(num) {
    return function decrease(anotherNum) {
        return num + anotherNum;
    }
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));