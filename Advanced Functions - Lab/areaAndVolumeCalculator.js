function solve(area, vol, input) {
    let parsedInput = JSON.parse(input);
    let result = [];
    for (let object of parsedInput) {
        result.push({
            area: area.call(object),
            volume: vol.call(object)
        });
    }
    return result;
}
const array = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

console.log(solve(area, vol, array));

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};