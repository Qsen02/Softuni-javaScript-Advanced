class Stringer {
    string;
    length;
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = Number(length);
    }
    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }
    toString() {
        if (this.innerLength < this.innerString.length - 1) {
            let result = this.innerString.slice(0, this.innerLength) + "...";
            return result;
        } else if (this.innerLength == 0) {
            return "...";
        } else {
            let result = this.innerString.slice(0, this.innerLength);
            return result;
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test