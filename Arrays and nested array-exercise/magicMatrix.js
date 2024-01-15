function magicMatrix(matrix) {
    let isMagic = true;
    let neededSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        let curSum = arr.reduce((acc, val) => acc + val);
        if (i == 0) {
            neededSum = curSum;
        } else {
            if (neededSum != curSum) {
                isMagic = false;
                break;
            }
        }
    }
    for (let j = 0; j < matrix.length; j++) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            let el = matrix[i][j];
            sum += el;
        }
        if (neededSum != sum) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);
}
magicMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
])