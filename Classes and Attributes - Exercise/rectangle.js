class Rectangle {
    width;
    height;
    color;
    constructor(width, height, color) {
        this.width = Number(width);
        this.height = Number(height);
        this.color = String(color);
    }
    calcArea() {
        return this.width * this.height;
    }
}
let rect = new Rectangle(7, 2, "blue");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());