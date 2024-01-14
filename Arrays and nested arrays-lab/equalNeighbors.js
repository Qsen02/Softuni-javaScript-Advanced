function equalNeighbors(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        for (let j = 0; j < arr.length; j++) {
            let el = matrix[i][j];
            let nexEl = matrix[i][j + 1];
            if (nexEl == undefined) {
                break;
            } else if (el === nexEl) {
                count++;
            }
        }
    }
    for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            let el = matrix[i][j];
            if (i + 1 > matrix.length - 1) {
                break;
            }
            let nexEl = matrix[i + 1][j];
            if (el === nexEl) {
                count++;
            }
        }
    }
    return count;
}
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);