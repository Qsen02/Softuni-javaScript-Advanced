class Hex {
    constructor(value) {
        this.value = Number(value);
    }
    toString() {
        return "0x" + (this.value.toString(16)).toUpperCase();
    }
    valueOf() {
        return this.value;
    }
    plus(num) {
        return new Hex(num + Number(this.value));
    }
    minus(num) {
        return new Hex(Math.abs(num - Number(this.value)));
    }
    parse(str) {
        return parseInt(str, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 == 256);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));