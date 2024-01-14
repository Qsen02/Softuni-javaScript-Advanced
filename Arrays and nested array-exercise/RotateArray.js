function rotateArray(inputArray, rotationsCount) {
    for (let i = 0; i < rotationsCount; i++) {
        let lastElement = inputArray.pop();
        inputArray.unshift(lastElement);
    }
    console.log(inputArray.join(" "));
}
rotateArray(['Banana',
        'Orange',
        'Coconut',
        'Apple'
    ],
    15)