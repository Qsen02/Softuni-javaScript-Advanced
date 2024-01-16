function diagonalAttack(strMatrix) {
    let numMatrix = strMatrix.map(arr => arr.split(" ").map(Number));
    let centralDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let i = 0; i < numMatrix.length; i++) {
        let centrEl = numMatrix[i][i];
        centralDiagonalSum += centrEl;
        let secEl = numMatrix[i][numMatrix.length - 1 - i];
        secondaryDiagonalSum += secEl;
    }
    if (centralDiagonalSum == secondaryDiagonalSum) {
        for (let i = 0; i < numMatrix.length; i++) {
            for (let j = 0; j < numMatrix.length; j++) {
                if (!(i == j || j == numMatrix.length - 1 - i)) {
                    numMatrix[i][j] = centralDiagonalSum;
                }
            }
        }
    }
    for (let arr of numMatrix) {
        console.log(arr.join(" "));
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);