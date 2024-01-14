function diagonalSum(matrix) {
    let sumCentralDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        let element = matrix[i][i];
        sumCentralDiagonal += element;
    }
    for (let i = 0; i < matrix.length; i++) {
        let element = matrix[i][matrix.length - 1 - i];
        sumSecondaryDiagonal += element;
    }
    console.log(`${sumCentralDiagonal} ${sumSecondaryDiagonal}`);
}
diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);