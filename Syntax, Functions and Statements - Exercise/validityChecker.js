function validityChecker(x1, y1, x2, y2) {
    let validation1 = validatingDistance(x1, y1, 0, 0);
    console.log(`{${x1}, ${y1}} to {0, 0} is ${validation1}`);

    let validation2 = validatingDistance(x2, y2, 0, 0);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${validation2}`);

    let validation3 = validatingDistance(x1, y1, x2, y2);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validation3}`);
}

function validatingDistance(x1, y1, x2, y2) {
    let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let resultAsStr = result.toString();
    if (!resultAsStr.includes(".")) {
        result = "valid";
    } else {
        result = "invalid";
    }
    return result;
}
validityChecker(2, 1, 1, 1);