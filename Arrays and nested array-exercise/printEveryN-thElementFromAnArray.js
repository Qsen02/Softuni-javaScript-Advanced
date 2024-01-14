function printNthElement(inputArray, n) {
    let line = [];
    for (let i = 0; i < inputArray.length; i += n) {
        line.push(inputArray[i]);
    }
    return line;
}
printNthElement(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2
)