function negativeAndPositive(inputArray) {
    let result = [];
    inputArray.forEach(el => {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    })
    console.log(result.join("\n"));
}
negativeAndPositive([7, -2, 8, 9]);