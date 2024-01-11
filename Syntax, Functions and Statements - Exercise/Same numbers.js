function sameNumbers(num) {
    let strNum = String(num);
    let isSame = true;
    let firstDigit = strNum[0];
    let sum = 0;
    for (let digit of strNum) {
        if (digit != firstDigit) {
            isSame = false;
        }
        let number = Number(digit);
        sum += number;
    }
    console.log(isSame);
    console.log(sum);

}
sameNumbers(2222222);