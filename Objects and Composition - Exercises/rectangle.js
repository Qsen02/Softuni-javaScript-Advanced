function rectangle(width, height, color) {
    let firstLetter = color[0].toUpperCase();
    color = color.replace(color[0], firstLetter);
    let objectRectangle = {
        width: width,
        height: height,
        color: color,
        calcArea: function() {
            let area = this.width * this.height;
            return area;
        }
    }
    return objectRectangle;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());