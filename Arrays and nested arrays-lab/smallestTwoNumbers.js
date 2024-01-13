function smallestTwoNumbers(inputArray) {
    let smallestTwo = [];
    for (let i = 0; i < 2; i++) {
        let smallest = Math.min(...inputArray);
        let index = inputArray.indexOf(smallest);
        inputArray.splice(index, 1);
        smallestTwo.push(smallest);
    }
    console.log(smallestTwo.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);